import { LogoMark } from "./icons"

const columns = [
  { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"] },
  { title: "Resources", links: ["Help center", "Late fee calculator", "Templates", "API docs"] },
  { title: "Company", links: ["About", "Careers", "Privacy", "Terms", "Security"] },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <span className="brand">
              <LogoMark size={26} />
              <span>DueMate</span>
            </span>
            <p className="footer__about">
              A calmer way to track bills, invoices and renewals — built for people
              who would rather not think about due dates at all.
            </p>
            <span className="footer__badge">
              <i className="tick" aria-hidden="true" /> SOC 2 Type II controls
            </span>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__base">
          <span>&copy; {new Date().getFullYear()} DueMate Labs · Demo project</span>
          <span>Made for people who hate late fees</span>
        </div>
      </div>
    </footer>
  )
}
