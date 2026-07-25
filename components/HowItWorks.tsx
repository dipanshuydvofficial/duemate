import { steps } from "@/lib/content"

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">How it works</span>
          <h2 className="h2">Set it up once. Coast for the rest of the year.</h2>
        </div>

        <div className="steps">
          {steps.map((step) => (
            <article className="step" key={step.step}>
              <span className="step__num">{step.step}</span>
              <div className="step__rule" />
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
