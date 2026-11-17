import { Routes, Route, useLocation } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import ScrollManager from '../components/common/ScrollManager'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ProductsPage from '../pages/ProductsPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import QualityPage from '../pages/QualityPage'
import DistributorPage from '../pages/DistributorPage'
import ContactPage from '../pages/ContactPage'
import NotFoundPage from '../pages/NotFoundPage'
import { products } from '../data/products'
import { ROUTES } from '../data/navigation'

const wrap = (path, el) => <PageLayout path={path}>{el}</PageLayout>

export default function AppRouter() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollManager />
      <Routes key={pathname === '/' ? 'home' : undefined}>
        <Route path={ROUTES.home} element={wrap('/', <HomePage />)} />
        <Route path={ROUTES.about} element={wrap(ROUTES.about, <AboutPage />)} />
        <Route path={ROUTES.products} element={wrap(ROUTES.products, <ProductsPage />)} />
        {products.map((p) => (
          <Route key={p.slug} path={p.path} element={wrap(p.path, <ProductDetailPage slug={p.slug} />)} />
        ))}
        <Route path={ROUTES.quality} element={wrap(ROUTES.quality, <QualityPage />)} />
        <Route path={ROUTES.distributor} element={wrap(ROUTES.distributor, <DistributorPage />)} />
        <Route path={ROUTES.contact} element={wrap(ROUTES.contact, <ContactPage />)} />
        <Route path="*" element={<PageLayout path="/404" notFound><NotFoundPage /></PageLayout>} />
      </Routes>
    </>
  )
}
