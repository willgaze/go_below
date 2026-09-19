'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/**
 * A single slight lift-and-fade as a section enters view.
 *
 * Deliberately not Framer Motion: the brief asks for restraint, and this page
 * is image-heavy, so the animation budget is better spent on the photographs.
 * Content is styled visible-by-default in CSS, so nothing is ever trapped
 * invisible if the observer does not run.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      el.dataset.shown = 'true'
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.shown = 'true'
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
