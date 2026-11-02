import { experience, education } from "../data/portfolio.js";
import { CompanyLogo, ChipList } from "./Logos.jsx";

function Record({ r }) {
  return (
    <article className="rec reveal">
      <div className="rec-head">
        {r.logo && <CompanyLogo slug={r.logo} size="md" />}
        <div>
          <h3>{r.title}</h3>
          {r.when && <p className="when">{r.when}</p>}
        </div>
      </div>
      <p>{r.text}</p>
      {r.tools && <ChipList names={r.tools} />}
      {r.link && (
        <p className="rec-link"><a href={r.link.href} target="_blank" rel="noreferrer">{r.link.label}</a></p>
      )}
    </article>
  );
}

export default function History() {
  return (
    <section className="container" id="riwayat">
      <h1 className="sec-title">Riwayat</h1>
      <ol className="timeline">
        {experience.map((x) => (
          <li className="tl-item reveal" key={x.title + x.org}>
            <span className="tl-icon"><CompanyLogo slug={x.logo} size="tl" /></span>
            <div className="tl-card">
              <h3>{x.title}</h3>
              <h4>{x.org}, {x.place}</h4>
              <ul className="tl-points">
                {x.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <ChipList names={x.tools} />
              <p className="tl-date">{x.when}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="sub-title">Pendidikan, publikasi, dan sertifikasi</h2>
      <div className="two-col">
        {[education.left, education.right].map((col) => (
          <div key={col.title}>
            <h3 className="col-title">{col.title}</h3>
            {col.records.map((r) => (
              <Record key={r.title} r={r} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
