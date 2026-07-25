import { LogoMark } from "./icons"

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="brand" href="#top" aria-label="DueMate home">
          <LogoMark />
          <span>DueMate</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="nav__actions">
          <a className="nav__signin" href="#signin">
            Sign in
          </a>
          <a className="btn btn--primary btn--sm" href="#start">
            Get started
          </a>
        </div>
      </div>
    </header>
  )
}
