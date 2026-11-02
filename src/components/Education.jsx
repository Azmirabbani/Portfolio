import { education } from "../data/portfolio.js";
import { CompanyLogo, ChipList } from "./Logos.jsx";

function Record({ r }) {
  return (
    <article className="rec">
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

export default function Education() {
  return (
    <section className="block" id="pendidikan">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Pendidikan</p>
          <h2>Kuliah, publikasi, dan sertifikasi</h2>
        </div>
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
      </div>
    </section>
  );
}
