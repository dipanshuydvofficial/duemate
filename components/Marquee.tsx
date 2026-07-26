import { brands } from "@/lib/content"

export default function Marquee() {
  return (
    <section className="marquee-wrap" aria-label="Customer logos">
      <div className="container">
        <p className="marquee__label">Trusted by 12,000+ freelancers and finance teams</p>
      </div>
      <div className="marquee">
        <div className="marquee__track">
          {[...brands, ...brands].map((brand, index) => (
            <span className="marquee__item" key={`${brand}-${index}`} aria-hidden={index >= brands.length}>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
