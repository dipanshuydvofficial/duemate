import { features } from "@/lib/content"
import { featureIcons } from "./icons"
import Reveal from "./Reveal"

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <Reveal className="head">
          <span className="eyebrow">Features</span>
          <h2 className="h2">
            Everything you need to stay <span className="grad-text">ahead of a deadline</span>
          </h2>
          <p className="lede">
            No dashboard to babysit. DueMate does the tracking, the math and the
            nagging — the only thing left for you is the payment itself.
          </p>
        </Reveal>

        <div className="bento">
          {features.map((feature, index) => {
            const Icon = featureIcons[feature.icon]
            return (
              <Reveal
                key={feature.title}
                delay={index * 70}
                className={`bento__cell bento__cell--${feature.span}`}
              >
                <article className={`tile tile--${feature.accent}`}>
                  <span className="tile__icon">
                    <Icon />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                  <span className="tile__glow" aria-hidden="true" />
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
