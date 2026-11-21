import { spawnSync } from 'node:child_process'
import { copyFile, readdir } from 'node:fs/promises'
import { join, resolve, sep } from 'node:path'

const result = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, NEXT_STATIC_EXPORT: '1' },
})

if (result.error) throw result.error
if (result.status !== 0) process.exit(result.status ?? 1)

// Next 16.4 collects segment paths with the OS separator, but its static
// filename encoder replaces only '/'. Windows consequently exports nested
// __next.* directories where the client requests a single dotted filename.
// Add the expected names without changing Next or the original payloads.
const output = resolve('out')
let normalized = 0
for (const filename of await readdir(output, { recursive: true })) {
  const parts = filename.split(sep)
  const segmentIndex = parts.findIndex((part) => part.startsWith('__next.'))
  if (segmentIndex < 0 || segmentIndex === parts.length - 1 || !filename.endsWith('.txt')) continue
  const destination = join(output, ...parts.slice(0, segmentIndex), parts.slice(segmentIndex).join('.'))
  await copyFile(join(output, filename), destination)
  normalized++
}
if (normalized) console.log(`Normalized ${normalized} static segment filenames.`)
