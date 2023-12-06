import { execSync as exec } from 'node:child_process'

import { name, version } from '../package.json'

exec('pnpm build', { stdio: 'inherit' })

const command = 'npm publish --access public'

const tag = version.includes('beta')
  ? 'beta'
  : version.includes('rc')
    ? 'rc'
    : null

exec(`${command}${tag ? ` --tag ${tag}` : ''}`, { stdio: 'inherit' })

console.log(`Published ${name} v${version}`)
