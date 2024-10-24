import { useState } from 'react'
import { ModeToggle } from "./ThemeToggle"
import { Menu, X } from 'lucide-react'
import { data } from '../utils/constants'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-sm border border-primary py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-md"
    >
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="text-light-text text-xl tracking-tight font-bold dark:text-dark-text" href="/">
              Imaneentee
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center justify-center gap-5">
              {data.NavLink.map((navItem) => (
                <li key={navItem.id}>
                  <a href={navItem.path} className="text-dark-card font-medium dark:text-light-card">{navItem.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-end gap-3">
            <ModeToggle />
            <button
              className="md:hidden"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24}  /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-3 px-4">
          <ul className="flex flex-col gap-2">
            {data.NavLink.map((navItem) => (
              <li key={navItem.id}>
                <a
                  href={navItem.path}
                  className="block py-2 text-dark-card font-medium dark:text-light-card"
                  onClick={toggleMenu}
                >
                  {navItem.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header