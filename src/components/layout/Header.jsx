import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Download, ArrowRight } from 'lucide-react'
import { navItems, ROUTES } from '../../data/navigation'
import TopContactBar from './TopContactBar'
import MobileNavigation from './MobileNavigation'
import Logo from '../common/Logo'
import Button from '../common/Button'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => setMenuOpen(false), [pathname])
  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    const onResize = () => window.innerWidth >= 1280 && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 shadow-[0_1px_12px_rgba(45,18,45,0.08)]">
      <TopContactBar />
      <div className="relative border-b border-outline-variant/40 bg-surface/95 backdrop-blur-xl">
        <div className="container-page flex h-20 items-center justify-between gap-space-md">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-space-xs xl:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-lg px-space-sm py-1.5 text-label-md transition-colors ${
                    isActive
                      ? 'border border-primary-container/40 bg-surface-container font-semibold text-plum-dark'
                      : 'border border-transparent text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-space-sm">
            <Button
              href={`${ROUTES.products}#catalogue`}
              variant="outline"
              icon={Download}
              iconClassName="text-primary"
              className="hidden min-h-11 px-space-md py-2 text-plum-dark sm:inline-flex xl:min-h-10"
            >
              Catalogue (PDF)
            </Button>
            <Button
              href={ROUTES.distributor}
              icon={ArrowRight}
              variant="outline"
              iconPosition="right"
              // iconClassName="text-primary-container"
              className="hidden min-h-11 px-space-md py-2 sm:inline-flex xl:min-h-10 text-plum-dark"
            >
              Distributor Enquiry
            </Button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-lg border border-outline-variant bg-surface-container-lowest text-plum-dark transition-colors hover:bg-surface-container xl:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
            </button>
          </div>
        </div>
        <MobileNavigation id="mobile-navigation" open={menuOpen} onNavigate={closeMenu} />
      </div>
    </header>
  )
}
