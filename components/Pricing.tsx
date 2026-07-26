"use client"

import { useState } from "react"
import { plans } from "@/lib/content"
import { CheckIcon } from "./icons"
import Reveal from "./Reveal"

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section className="section" id="pricing">
      <div className="container">
        <Reveal className="head head--center">
          <span className="eyebrow">Pricing</span>
          <h2 className="h2">
            Cheaper than <span className="grad-text">one late fee</span>
          </h2>
          <p className="lede">
            Start free, upgrade only when you outgrow it. Every plan includes
            unlimited reminders and full data export.
          </p>

          <div className="switch" role="group" aria-label="Billing period">
            <button
              type="button"
              className={`switch__opt${!annual ? " is-active" : ""}`}
              aria-pressed={!annual}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`switch__opt${annual ? " is-active" : ""}`}
              aria-pressed={annual}
              onClick={() => setAnnual(true)}
            >
              Annual <span className="switch__save">−20%</span>
            </button>
          </div>
        </Reveal>

        <div className="plans">
          {plans.map((plan, index) => {
            const price =
              plan.monthly === 0
                ? "Free"
                : `$${annual ? Math.round(plan.monthly! * 0.8) : plan.monthly}`
            const cadence =
              plan.monthly === 0 ? "forever" : annual ? "/mo, billed yearly" : "/mo"

            return (
              <Reveal key={plan.name} delay={index * 90}>
                <article className={`plan${plan.featured ? " plan--featured" : ""}`}>
                  {plan.featured ? <span className="plan__ribbon">Most popular</span> : null}
                  <h3 className="plan__name">{plan.name}</h3>
                  <p className="plan__price">
                    <span className="plan__amount">{price}</span>
                    <span className="plan__cadence">{cadence}</span>
                  </p>
                  <p className="plan__blurb">{plan.blurb}</p>

                  <ul className="plan__list">
                    {plan.features.map((item) => (
                      <li key={item}>
                        <CheckIcon className="plan__check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className={`btn btn--block plan__cta ${plan.featured ? "btn--grad" : "btn--glass"}`}
                    href="#start"
                  >
                    {plan.cta}
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
