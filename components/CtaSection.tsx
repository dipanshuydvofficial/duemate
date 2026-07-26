"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { ArrowIcon } from "./icons"
import Reveal from "./Reveal"

type Status = "idle" | "loading" | "done" | "error"

export default function CtaSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = (await res.json()) as { message?: string }
      if (!res.ok) throw new Error(data.message ?? "Something went wrong")
      setStatus("done")
      setMessage(data.message ?? "You are on the list.")
      setEmail("")
    } catch (error) {
      setStatus("error")
      setMessage(error instanceof Error ? error.message : "Something went wrong")
    }
  }

  return (
    <section className="section" id="start">
      <div className="container">
        <Reveal>
          <div className="cta">
            <span className="cta__glow" aria-hidden="true" />
            <h2>
              Put your due dates on <span className="grad-text">autopilot tonight</span>
            </h2>
            <p>
              Add your first three dues in under two minutes. If DueMate does not
              save you a late fee within 90 days, we refund you in full.
            </p>

            <form className="cta__form" onSubmit={onSubmit}>
              <label htmlFor="cta-email" className="sr-only">
                Work email
              </label>
              <input
                id="cta-email"
                className="field field--lg"
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
              />
              <button className="btn btn--grad btn--lg" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Creating…" : "Create free account"}
                {status === "loading" ? null : <ArrowIcon />}
              </button>
            </form>

            <p className={`cta__msg${status === "error" ? " is-error" : ""}`} role="status">
              {status === "idle"
                ? "No credit card. 15 dues free, forever."
                : status === "loading"
                  ? "Setting up your workspace…"
                  : message}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
