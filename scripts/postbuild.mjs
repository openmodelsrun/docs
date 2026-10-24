import {execFileSync} from 'node:child_process'
import {existsSync} from 'node:fs'

execFileSync('next-sitemap', {stdio: 'inherit'})
execFileSync('pagefind', ['--site', '.next/server/app', '--output-path', 'out/_pagefind'], {stdio: 'inherit'})

if (!existsSync('out/_pagefind/pagefind.js')) {
  throw new Error('Missing Pagefind search index in static export')
}
