import { metrics } from "@/lib/content"
import CountUp from "./CountUp"
import Reveal from "./Reveal"

export default function Metrics() {
  return (
    <section className="section section--tight">
      <div className="container">
        <Reveal>
          <div className="metrics">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <p className="metric__value">
                  <CountUp
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    decimals={metric.decimals ?? 0}
                  />
                </p>
                <p className="metric__label">{metric.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
