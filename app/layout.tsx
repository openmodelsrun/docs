import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Logo } from './logo'

export const metadata: Metadata = {
  title: {
    default: 'OpenModels Docs',
    template: '%s – OpenModels Docs'
  },
  description:
    'Discover, compare, and integrate LLM models and inference providers',
  openGraph: {
    title: 'OpenModels Documentation',
    description:
      'The open-source registry and comparison platform for LLM models and inference providers'
  }
}

const navbar = (
  <Navbar
    logo={<Logo />}
    logoLink="https://www.openmodels.run"
    projectLink="https://github.com/openmodels-run/openmodels"
  />
)

const footer = <Footer>OpenModels © {new Date().getFullYear()}</Footer>

export default async function RootLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/openmodels-run/docs/tree/main"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ float: true, title: 'On This Page' }}
          darkMode={true}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
