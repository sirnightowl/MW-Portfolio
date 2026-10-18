import { ImageResponse } from 'next/og'

export const alt = 'Martin Whitaker — Digital Interaction Designer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0b0715 0%, #1a1530 55%, #2d2450 100%)',
          color: '#fbfaff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            fontSize: '26px',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            color: '#c6a7ff',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '999px',
              background: '#c6a7ff',
              display: 'flex',
            }}
          />
          Digital interaction designer
        </div>
        <div style={{ fontSize: '88px', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-3px', display: 'flex', flexDirection: 'column' }}>
          <span>Useful products,</span>
          <span>designed with intent.</span>
        </div>
        <div
          style={{
            marginTop: '36px',
            fontSize: '30px',
            color: 'rgba(251,250,255,0.7)',
            display: 'flex',
          }}
        >
          Martin Whitaker — accessible design, front-end build, and shipping end to end
        </div>
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontSize: '28px',
            fontWeight: 700,
          }}
        >
          <span style={{ color: '#ff7d78' }}>martwhitty</span>
          <span style={{ color: '#c6a7ff' }}>.dev</span>
        </div>
      </div>
    ),
    { ...size }
  )
}