"use client"

import { useState } from "react"
import { faqs } from "@/lib/content"
import { PlusIcon } from "./icons"

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section section--soft" id="faq">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">FAQ</span>
          <h2 className="h2">Questions people ask before signing up</h2>
        </div>

        <div className="faq">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div className="faq__item" key={faq.q}>
                <h3>
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{faq.q}</span>
                    <PlusIcon
                      className={`faq__sign${isOpen ? " faq__sign--open" : ""}`}
                    />
                  </button>
                </h3>
                {isOpen ? (
                  <div
                    className="faq__a"
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                  >
                    {faq.a}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
