"use client"

import { useState } from "react"
import type { FormEvent } from "react"

export default function CtaBanner() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Demo only: wire this to your signup or waitlist API route.
    setSent(true)
  }

  return (
    <section className="section" id="start">
      <div className="container">
        <div className="cta">
          <h2>Put your due dates on autopilot tonight</h2>
          <p>
            Add your first three dues in under two minutes. If DueMate does not
            save you a late fee in 90 days, we will refund you.
          </p>

          <form className="cta__form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="cta-email" style={{ position: "absolute", left: "-9999px" }}>
              Work email
            </label>
            <input
              id="cta-email"
              className="input"
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button className="btn btn--primary btn--cta" type="submit">
              {sent ? "Check your inbox" : "Create free account"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
