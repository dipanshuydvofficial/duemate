"use client"

import { useState } from "react"
import { faqs } from "@/lib/content"
import { PlusIcon } from "./icons"
import Reveal from "./Reveal"

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal className="head head--center">
          <span className="eyebrow">FAQ</span>
          <h2 className="h2">
            Questions people ask <span className="grad-text">before signing up</span>
          </h2>
        </Reveal>

        <Reveal className="faq">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div className={`faq__item${isOpen ? " is-open" : ""}`} key={faq.q}>
                <h3>
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-btn-${index}`}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span>{faq.q}</span>
                    <span className={`faq__sign${isOpen ? " is-open" : ""}`}>
                      <PlusIcon />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq__panel"
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  hidden={!isOpen}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
