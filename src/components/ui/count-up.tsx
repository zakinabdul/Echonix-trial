'use client'

import React, { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  to: number
  from?: number
  duration?: number // seconds
  delay?: number // seconds
  digitEffect?: 'slide' | 'none'
  className?: string
}

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4)
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  digitEffect = 'none',
  className = '',
}: CountUpProps) {
  const nodeRef = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState<number>(from)
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (!nodeRef.current) return
    if (prefersReduced) {
      setValue(to)
      return
    }

    let cancelled = false
    const startAnim = () => {
      const start = performance.now()
      const dur = Math.max(6, duration * 1000) // guard minimal duration? keep as ms
      const animate = (now: number) => {
        if (cancelled) return
        const elapsed = now - start
        const t = Math.min(elapsed / (duration * 1000), 1)
        const eased = easeOutQuart(t)
        const current = from + (to - from) * eased
        setValue(current)
        if (t < 1) requestAnimationFrame(animate)
        else setValue(to)
      }
      requestAnimationFrame(animate)
    }

    // Use IntersectionObserver to trigger once when visible
    const observer = new IntersectionObserver(
      (entries) => {
        const e = entries[0]
        if (e && e.isIntersecting) {
          setTimeout(() => startAnim(), Math.round(delay * 1000))
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(nodeRef.current)

    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [to, from, duration, delay, prefersReduced])

  // Render formatting: show one decimal if `to` is fractional
  const isDecimal = Math.floor(to) !== to
  const display = isDecimal ? value.toFixed(1) : Math.round(value).toString()

  // When using digitEffect="slide" simply wrap value in a span (styling handled via CSS)
  return (
    <span ref={nodeRef} className={className} aria-hidden="false">
      {digitEffect === 'slide' ? (
        <span className="countup-slide-wrapper" aria-hidden="true">
          <span className="countup-slide-value">{display}</span>
        </span>
      ) : (
        <>{display}</>
      )}
    </span>
  )
}
