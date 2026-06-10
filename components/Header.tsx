'use client'

import Link from 'next/link'
import { useRef } from 'react'

const navItems = [
  { label: 'ホーム',       href: '/' },
  { label: '寺について',   href: '/about' },
  { label: 'ギャラリー',   href: '/gallery' },
  { label: '行事',         href: '/events' },
  { label: 'お問い合わせ', href: '/contact' },
]

export default function Header() {
  const menuRef = useRef<HTMLDivElement>(null)

  const openMenu  = () => menuRef.current?.classList.add('show-menu')
  const closeMenu = () => menuRef.current?.classList.remove('show-menu')

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link href="/" className="nav__logo">
          <i className="ri-ancient-gate-line" />
          <span>境内</span>
        </Link>

        <div className="nav__menu" id="nav-menu" ref={menuRef}>
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="nav__link" onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav__close" id="nav-close" onClick={closeMenu}>
            <i className="ri-close-large-line" />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={openMenu}>
          <i className="ri-apps-2-line" />
        </div>
      </nav>
    </header>
  )
}
