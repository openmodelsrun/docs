const fs = require('fs')
const path = require('path')

const schemaPath = path.join(
  __dirname,
  '..',
  'node_modules',
  'nextra-theme-docs',
  'dist',
  'schemas.js'
)

if (fs.existsSync(schemaPath)) {
  let content = fs.readFileSync(schemaPath, 'utf8')
  if (content.includes('children: reactNode,')) {
    content = content.replace('children: reactNode,', 'children: reactNode.optional(),')
    fs.writeFileSync(schemaPath, content)
    console.log('Patched nextra-theme-docs schema (children optional)')
  } else {
    console.log('nextra-theme-docs schema already patched')
  }
} else {
  console.log('nextra-theme-docs schema not found, skipping patch')
}
