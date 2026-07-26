"use client"

import { useEffect, useState } from "react"
import { testimonials } from "@/lib/content"
import Reveal from "./Reveal"

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => window.clearInterval(id)
  }, [paused])

  const active = testimonials[index]

  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal>
          <div
            className="quote-card"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <span className="quote-card__mark" aria-hidden="true">
              &ldquo;
            </span>

            <blockquote key={active.name} className="quote-card__body">
              <p>{active.quote}</p>
            </blockquote>

            <div className="quote-card__who">
              <span className="avatar">{active.initials}</span>
              <span>
                <strong>{active.name}</strong>
                <em>{active.role}</em>
              </span>
            </div>

            <div className="dots" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial from ${item.name}`}
                  className={`dot${i === index ? " is-active" : ""}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
