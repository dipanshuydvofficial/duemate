import { LogoMark } from "./icons"

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Resources",
    links: ["Help center", "Late fee calculator", "Templates", "API docs"],
  },
  {
    title: "Company",
    links: ["About", "Privacy", "Terms", "Contact"],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <span className="brand">
              <LogoMark />
              <span>DueMate</span>
            </span>
            <p className="footer__about">
              A calmer way to track bills, invoices and renewals. Built for
              people who would rather not think about due dates at all.
            </p>
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
          <span>&copy; {new Date().getFullYear()} DueMate Labs. Demo project.</span>
          <span>Made for people who hate late fees.</span>
        </div>
      </div>
    </footer>
  )
}
