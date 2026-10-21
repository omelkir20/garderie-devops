export const instant = false;

async function getData(path) {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL || "http://localhost:4000"}${path}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Erreur API");
    }

    return await response.json();
  } catch {
    return null;
  }
}

export default async function Home() {
  const garderie = await getData("/api/garderie");
  const services = await getData("/api/services");

  const nom = garderie?.nom || "Ma Garderie";

  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="#">🌈 {nom}</a>
        <div className="navlinks">
          <a href="#accueil">Accueil</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="accueil">
        <div>
          <p className="eyebrow">Grandir, apprendre et s'épanouir</p>
          <h1>Bienvenue à {nom} !</h1>
          <p>
            {garderie?.description ||
              "Un espace accueillant où chaque enfant découvre le monde en s'amusant."}
          </p>
          <a className="cta" href="#services">Découvrir nos services</a>
        </div>
        <div className="hero-image" role="img" aria-label="Illustration colorée de la garderie">
          🌈 🧸 🎨
        </div>
      </section>

      <section className="services" id="services">
        <h2>Nos services</h2>
        <p>Nous accompagnons les enfants dans leur développement.</p>
        <div className="service-grid">
          {(services || [
            { id: 1, nom: "Éveil éducatif", description: "Apprendre en s'amusant." },
            { id: 2, nom: "Repas équilibrés", description: "Des repas adaptés." },
            { id: 3, nom: "Jeux créatifs", description: "Créer et imaginer." }
          ]).map((service) => (
            <article className="service-card" key={service.id}>
              <h3>{service.nom}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact">
        {nom} · {garderie?.adresse || "Notre garderie"}
      </footer>
    </main>
  );
}
