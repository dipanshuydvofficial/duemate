import { ArrowIcon, SparkIcon } from "./icons"
import DashboardDemo from "./DashboardDemo"
import Reveal from "./Reveal"

const trust = ["No card required", "Free for 15 dues", "Cancel in one click"]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <span className="grid-layer" />
        <span className="orb orb--a" />
        <span className="orb orb--b" />
        <span className="orb orb--c" />
      </div>

      <div className="container hero__grid">
        <Reveal className="hero__copy">
          <a className="badge" href="#features">
            <SparkIcon />
            <span>New — WhatsApp reminders &amp; 90-day forecast</span>
            <ArrowIcon />
          </a>

          <h1>
            Never miss a
            <br />
            <span className="grad-text">due date</span> again.
          </h1>

          <p className="hero__sub">
            DueMate puts every bill, invoice, EMI and renewal on one calm timeline
            &mdash; then pings you at exactly the right moment on the channel you
            actually check.
          </p>

          <div className="hero__cta">
            <a className="btn btn--grad btn--lg" href="#start">
              Start free <ArrowIcon />
            </a>
            <a className="btn btn--glass btn--lg" href="#how">
              See how it works
            </a>
          </div>

          <ul className="hero__trust">
            {trust.map((item) => (
              <li key={item}>
                <i className="tick" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="hero__app" delay={140}>
          <DashboardDemo />
        </Reveal>
      </div>
    </section>
  )
}
