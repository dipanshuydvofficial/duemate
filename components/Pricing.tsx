import { plans } from "@/lib/content"
import { CheckIcon } from "./icons"

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Pricing</span>
          <h2 className="h2">Cheaper than one late fee</h2>
          <p className="lede">
            Start free and upgrade only when you outgrow it. Every plan includes
            unlimited reminders and full data export.
          </p>
        </div>

        <div className="grid-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`plan${plan.featured ? " plan--featured" : ""}`}
            >
              {plan.featured ? <span className="plan__tag">Most popular</span> : null}
              <h3 className="plan__name">{plan.name}</h3>
              <p className="plan__price">
                <span className="plan__amount">{plan.price}</span>
                <span className="plan__cadence">{plan.cadence}</span>
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
                className={`btn btn--block plan__cta ${
                  plan.featured ? "btn--primary" : "btn--ghost"
                }`}
                href="#start"
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
