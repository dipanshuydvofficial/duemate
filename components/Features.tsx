import { features } from "@/lib/content"
import { featureIcons } from "./icons"

export default function Features() {
  return (
    <section className="section section--soft" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Features</span>
          <h2 className="h2">Everything you need to stay ahead of a deadline</h2>
          <p className="lede">
            No dashboards to babysit. DueMate does the tracking so the only
            thing left for you is the payment itself.
          </p>
        </div>

        <div className="grid-3">
          {features.map((feature) => {
            const Icon = featureIcons[feature.icon]
            return (
              <article className="card" key={feature.title}>
                <span className="card__icon">
                  <Icon />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
