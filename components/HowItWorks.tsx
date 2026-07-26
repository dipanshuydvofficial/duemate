import { steps } from "@/lib/content"
import Reveal from "./Reveal"

export default function HowItWorks() {
  return (
    <section className="section section--alt" id="how">
      <div className="container">
        <Reveal className="head head--center">
          <span className="eyebrow">How it works</span>
          <h2 className="h2">
            Set it up once. <span className="grad-text">Coast all year.</span>
          </h2>
        </Reveal>

        <div className="flow">
          <span className="flow__line" aria-hidden="true" />
          {steps.map((step, index) => (
            <Reveal key={step.step} delay={index * 120} className="flow__item">
              <span className="flow__num">{step.step}</span>
              <span className="flow__tag">{step.tag}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
