"use client"

import { useMemo, useState } from "react"
import type { FormEvent } from "react"
import { seedDues } from "@/lib/content"
import type { Due } from "@/lib/content"
import { CheckIcon, PlusIcon, TrashIcon } from "./icons"

type Filter = "upcoming" | "all" | "paid"

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

function tone(due: Due) {
  if (due.paid) return "done"
  if (due.days <= 1) return "risk"
  if (due.days <= 7) return "warn"
  return "calm"
}

function whenLabel(due: Due) {
  if (due.paid) return "Paid"
  if (due.days < 0) return `${Math.abs(due.days)}d overdue`
  if (due.days === 0) return "Due today"
  if (due.days === 1) return "Due tomorrow"
  return `Due in ${due.days} days`
}

/** Fully interactive demo of the product: add, pay, delete, filter, forecast. */
export default function DashboardDemo() {
  const [dues, setDues] = useState<Due[]>(seedDues)
  const [filter, setFilter] = useState<Filter>("upcoming")
  const [adding, setAdding] = useState(false)
  const [label, setLabel] = useState("")
  const [amount, setAmount] = useState("")
  const [days, setDays] = useState("7")

  const visible = useMemo(() => {
    const list = dues.filter((d) =>
      filter === "all" ? true : filter === "paid" ? d.paid : !d.paid,
    )
    return [...list].sort((a, b) => a.days - b.days)
  }, [dues, filter])

  const outstanding = dues.filter((d) => !d.paid)
  const total = outstanding.reduce((sum, d) => sum + d.amount, 0)
  const paidCount = dues.length - outstanding.length
  const progress = dues.length ? Math.round((paidCount / dues.length) * 100) : 0

  function togglePaid(id: string) {
    setDues((prev) =>
      prev.map((d) => (d.id === id ? { ...d, paid: !d.paid, days: d.paid ? d.days : -0 } : d)),
    )
  }

  function remove(id: string) {
    setDues((prev) => prev.filter((d) => d.id !== id))
  }

  function addDue(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = Number(amount)
    if (!label.trim() || !Number.isFinite(value) || value <= 0) return

    setDues((prev) => [
      ...prev,
      {
        id: `d${Date.now()}`,
        label: label.trim(),
        vendor: label.trim(),
        amount: Math.round(value),
        days: Number(days) || 0,
        paid: false,
        category: "Software",
      },
    ])
    setLabel("")
    setAmount("")
    setDays("7")
    setAdding(false)
    setFilter("upcoming")
  }

  return (
    <div className="app" aria-label="Interactive DueMate demo">
      <div className="app__chrome">
        <span className="app__dot" />
        <span className="app__dot" />
        <span className="app__dot" />
        <span className="app__url">duemate.app/dashboard</span>
        <span className="app__live">
          <i className="app__pulse" />
          Live demo
        </span>
      </div>

      <div className="app__body">
        <div className="app__summary">
          <div>
            <p className="app__label">Outstanding this month</p>
            <p className="app__total">{money(total)}</p>
          </div>
          <div className="app__ring" role="img" aria-label={`${progress}% of dues cleared`}>
            <span>{progress}%</span>
          </div>
        </div>

        <div className="app__bar">
          <span className="app__bar-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="app__tabs" role="tablist" aria-label="Filter dues">
          {(
            [
              ["upcoming", `Upcoming ${outstanding.length}`],
              ["paid", `Paid ${paidCount}`],
              ["all", `All ${dues.length}`],
            ] as Array<[Filter, string]>
          ).map(([key, text]) => (
            <button
              key={key}
              role="tab"
              type="button"
              aria-selected={filter === key}
              className={`app__tab${filter === key ? " is-active" : ""}`}
              onClick={() => setFilter(key)}
            >
              {text}
            </button>
          ))}
        </div>

        <ul className="app__list">
          {visible.map((due) => (
            <li key={due.id} className={`row row--${tone(due)}${due.paid ? " row--paid" : ""}`}>
              <button
                type="button"
                className="row__check"
                aria-label={due.paid ? `Mark ${due.label} unpaid` : `Mark ${due.label} paid`}
                aria-pressed={due.paid}
                onClick={() => togglePaid(due.id)}
              >
                {due.paid ? <CheckIcon /> : null}
              </button>

              <span className="row__main">
                <span className="row__label">{due.label}</span>
                <span className="row__meta">
                  <span className="chip">{due.category}</span>
                  {whenLabel(due)}
                </span>
              </span>

              <span className="row__amount">{money(due.amount)}</span>

              <button
                type="button"
                className="row__del"
                aria-label={`Delete ${due.label}`}
                onClick={() => remove(due.id)}
              >
                <TrashIcon />
              </button>
            </li>
          ))}

          {visible.length === 0 ? (
            <li className="app__empty">Nothing here. Add a due to see it appear instantly.</li>
          ) : null}
        </ul>

        {adding ? (
          <form className="app__form" onSubmit={addDue}>
            <input
              className="field"
              placeholder="What is due?"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              aria-label="Due name"
              autoFocus
            />
            <input
              className="field field--sm"
              placeholder="$"
              inputMode="numeric"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              aria-label="Amount"
            />
            <input
              className="field field--sm"
              placeholder="days"
              inputMode="numeric"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              aria-label="Days until due"
            />
            <button className="btn btn--grad btn--sm" type="submit">
              Add
            </button>
          </form>
        ) : (
          <button type="button" className="app__add" onClick={() => setAdding(true)}>
            <PlusIcon /> Add a due date
          </button>
        )}
      </div>
    </div>
  )
}
