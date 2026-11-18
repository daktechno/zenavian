import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import Breadcrumbs from '../common/Breadcrumbs'
import Seo from '../seo/Seo'

export default function PageLayout({ path, notFound = false, children }) {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-plum-dark focus:px-4 focus:py-2 focus:text-white">
        Skip to main content
      </a>
      <Seo path={path} notFound={notFound} />
      <Header />
      <div className="pt-[116px]">
        <Breadcrumbs path={path} /> {/* it shows breadcrumbs (Home -> Page Name) */}
        <main id="main-content" tabIndex={-1} className="w-full outline-none">
          {children}
        </main>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  )
}
