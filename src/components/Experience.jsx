import { experience } from "../data/portfolio.js";
import { CompanyLogo, ChipList } from "./Logos.jsx";

export default function Experience() {
  return (
    <section className="block" id="pengalaman">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Pengalaman</p>
          <h2>Dari chatbot klien sampai antarmuka internal</h2>
        </div>
        <div className="xp">
          {experience.map((x) => (
            <article className="xp-item" key={x.title + x.org}>
              <div className="xp-when">
                <strong>{x.when}</strong>
                {x.place}
              </div>
              <div>
                <div className="xp-head">
                  <CompanyLogo slug={x.logo} size="lg" />
                  <div>
                    <h3>{x.title}</h3>
                    <p className="org">{x.org}</p>
                  </div>
                </div>
                <ul className="xp-list">
                  {x.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <ChipList names={x.tools} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
