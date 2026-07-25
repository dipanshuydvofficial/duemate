import { upcoming } from "@/lib/content"
import { ArrowIcon, BellIcon } from "./icons"

const stats = [
  { value: "41,000+", label: "due dates tracked" },
  { value: "$3.2M", label: "late fees avoided" },
  { value: "4.9/5", label: "average user rating" },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div>
          <span className="pill">
            <BellIcon width={14} height={14} />
            Reminders that respect your attention
          </span>

          <h1>Never miss a due date again.</h1>

          <p className="hero__sub">
            DueMate keeps every bill, invoice, EMI and renewal on one calm
            timeline &mdash; and pings you at exactly the right moment, on the
            channel you actually check.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary btn--cta" href="#start">
              Start free <ArrowIcon />
            </a>
            <a className="btn btn--ghost btn--cta" href="#how">
              See how it works
            </a>
          </div>

          <p className="hero__note">
            Free for 15 dues. No card required. Cancel in one click.
          </p>

          <dl className="hero__stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="stat__value">{s.value}</dt>
                <dd className="stat__label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="preview" role="img" aria-label="Preview of the DueMate dashboard listing upcoming dues">
          <div className="preview__bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="preview__title">duemate.app / dashboard</span>
          </div>
          <div className="preview__body">
            <div className="preview__head">
              <h3>Next 14 days</h3>
              <span className="preview__total">5 dues &middot; $5,252</span>
            </div>
            <ul>
              {upcoming.map((item) => (
                <li className="due" key={item.label}>
                  <span className={`due__mark due__mark--${item.tone}`} />
                  <span className="due__main">
                    <span className="due__label">{item.label}</span>
                    <span className="due__meta">{item.meta}</span>
                  </span>
                  <span className="due__amount">{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
