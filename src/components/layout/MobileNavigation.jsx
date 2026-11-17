import { NavLink } from 'react-router-dom'
import { Download, ArrowRight } from 'lucide-react'
import { navItems, ROUTES } from '../../data/navigation'
import Button from '../common/Button'

export default function MobileNavigation({ id, open, onNavigate }) {
  return (
    <div
      id={id}
      hidden={!open}
      className="absolute inset-x-0 top-full max-h-[calc(100dvh-7.25rem)] overflow-y-auto overscroll-contain border-b border-outline-variant/40 bg-surface shadow-lg xl:hidden"
    >
      <nav aria-label="Mobile" className="container-page py-space-md">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.to}
                end={item.end}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `flex min-h-12 items-center rounded-lg border px-space-md text-title transition-colors ${
                    isActive
                      ? 'border-primary-container/40 bg-surface-container font-semibold text-plum-dark'
                      : 'border-transparent text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-space-md grid gap-space-sm sm:grid-cols-2">
          <Button href={`${ROUTES.products}#catalogue`} variant="outline" icon={Download} onClick={onNavigate} iconClassName="text-primary">
            Catalogue (PDF)
          </Button>
          <Button href={ROUTES.distributor} icon={ArrowRight} iconPosition="right" iconClassName="text-primary-container" onClick={onNavigate}>
            Distributor Enquiry
          </Button>
        </div>
      </nav>
    </div>
  )
}
