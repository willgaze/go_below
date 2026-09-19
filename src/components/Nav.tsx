'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '@/lib/site'

const links = [
  { href: '#possibilities', label: 'What’s possible' },
  { href: '#engineering', label: 'Engineering' },
  { href: '#protection', label: 'Protection' },
  { href: '#process', label: 'Process' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // A locked body behind an open menu; restored on close or unmount.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-arch ${
        scrolled || open ? 'bg-ink-deep/92 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="brand-mark text-sm text-limestone sm:text-base">
          Go&nbsp;Below
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-limestone/70 transition-colors hover:text-limestone"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#enquiry"
            className="border border-limestone/30 px-5 py-2.5 text-sm text-limestone transition-colors duration-300 hover:border-amber-soft hover:text-amber-soft"
          >
            Discuss a project
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-limestone md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t hairline bg-ink-deep md:hidden">
          <div className="space-y-1 px-5 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-lg text-limestone/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#enquiry"
              onClick={() => setOpen(false)}
              className="mt-4 block border border-limestone/30 px-5 py-3.5 text-center text-limestone"
            >
              Discuss a project
            </a>
            {site.phone && (
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="block py-3 text-center text-sm text-limestone/60"
              >
                {site.phone}
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
