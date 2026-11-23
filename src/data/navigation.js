import { products } from './products'

export const ROUTES = {
  home: '/',
  about: '/about',
  products: '/products',
  quality: '/quality-manufacturing',
  distributor: '/distributor-enquiry',
  contact: '/contact',
}

export const navItems = [
  { id: 'home', label: 'Home', to: ROUTES.home, end: true },
  // { id: 'about', label: 'About', to: ROUTES.about },
  { id: 'products', label: 'Products', to: ROUTES.products },
  { id: 'quality', label: 'Quality & Manufacturing', to: ROUTES.quality },
  // { id: 'distributor', label: 'Distributor Enquiry', to: ROUTES.distributor },
  { id: 'contact', label: 'Contact', to: ROUTES.contact },
]

export const footerProductLinks = products.map((p) => ({ label: p.name, to: p.path }))

export const footerCompanyLinks = [
  { label: 'About ZenAvian Healthcare', to: ROUTES.about },
  { label: 'Quality & Manufacturing', to: ROUTES.quality },
  { label: 'Distributor Enquiry', to: ROUTES.distributor },
  { label: 'Product Catalogue', to: `${ROUTES.products}#catalogue` },
  { label: 'Contact & Support', to: ROUTES.contact },
]
