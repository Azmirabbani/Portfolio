import { certificateGroups } from "../data/portfolio.js";

function Cert({ c }) {
  const main = c.files[0].href;
  return (
    <article className="cert reveal">
      <a className="cert-thumb" href={main} target="_blank" rel="noreferrer" aria-label={`Buka sertifikat: ${c.title}`}>
        <img src={c.thumb} alt={c.alt} loading="lazy" />
      </a>
      <h3>{c.title}</h3>
      <p className="issuer">{c.issuer}</p>
      <p className="c-meta">
        <span>{c.when}</span>
        {c.id && <span>{c.id}</span>}
      </p>
      <p className="c-detail">{c.detail}</p>
      <p className="cert-links">
        {c.files.map((f) => (
          <a key={f.href} href={f.href} target="_blank" rel="noreferrer">{f.label} ↗</a>
        ))}
      </p>
    </article>
  );
}

export default function Certificates() {
  return (
    <section className="container" id="sertifikat">
      <h1 className="sec-title">Sertifikat</h1>
      {certificateGroups.map((g) => (
        <div className="pgroup" key={g.label}>
          <h2 className="group-label">{g.label}</h2>
          <div className="cert-grid">
            {g.items.map((c) => (
              <Cert key={c.title} c={c} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
