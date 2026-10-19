import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { ImageResponse } from 'next/og'
import { projects } from '@/lib/data/projects'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return projects.map((project) => ({ image: `${project.id}.png` }))
}

export async function GET(_request: Request, { params }: { params: Promise<{ image: string }> }) {
  const { image } = await params
  const project = projects.find((item) => `${item.id}.png` === image)
  if (!project) return new Response('Not found', { status: 404 })
  // PNG build inputs are kept outside public; ImageResponse does not render WebP reliably.
  const bytes = await readFile(path.join(process.cwd(), 'assets/social', `${project.id}.png`))
  const source = `data:image/png;base64,${bytes.toString('base64')}`
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', background: '#0b0715', color: '#fbfaff', padding: '56px', fontFamily: 'sans-serif', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, color: '#c6a7ff', letterSpacing: 3 }}>
        <span>SELECTED WORK / CASE STUDY</span><span>snowl.uk</span>
      </div>
      <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 44 }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: 480 }}>
          <span style={{ display: 'flex', color: project.isLive ? '#b6dbc9' : '#ffd58c', fontSize: 20, letterSpacing: 2, marginBottom: 22 }}>{project.status.toUpperCase()}</span>
          <span style={{ display: 'flex', fontSize: project.title.length > 24 ? 54 : 66, fontWeight: 700, letterSpacing: -2, lineHeight: 1.06 }}>{project.title}</span>
          <span style={{ display: 'flex', marginTop: 22, fontSize: 23, color: '#c6c0d3' }}>{project.category} / {project.year} review</span>
        </div>
        {/* The preview uses existing project imagery; it does not fabricate product UI. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={source} alt="" width={564} height={364} style={{ objectFit: project.id === 'stay-with-me-deep-sea' ? 'cover' : 'contain', objectPosition: project.imagePosition ?? 'center', background: '#151020', borderRadius: 14, border: '1px solid #635475' }} />
      </div>
      <div style={{ display: 'flex', borderTop: '1px solid #44384f', paddingTop: 22, fontSize: 24 }}>Martin Whitaker · Design &amp; development</div>
    </div>,
    { width: 1200, height: 630 },
  )
}
