const brands = ["Northwind", "Kite Studio", "Basecamp Legal", "Orbit Labs", "Fernway"]

export default function LogoCloud() {
  return (
    <section className="logos">
      <div className="container">
        <p className="logos__label">Trusted by freelancers and finance teams at</p>
        <div className="logos__row">
          {brands.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
