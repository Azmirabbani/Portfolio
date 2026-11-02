import { projectGroups } from "../data/portfolio.js";
import { ChipList, CompanyLogo } from "./Logos.jsx";

function images(item) {
  if (item.images) return item.images;
  if (item.image) return [{ src: item.image, alt: item.imageAlt }];
  return [];
}

function Project({ item }) {
  const imgs = images(item);
  const href = item.links?.[0]?.href;
  const Title = href ? (
    <a href={href} target="_blank" rel="noreferrer"><h2>{item.title}</h2></a>
  ) : (
    <h2>{item.title}</h2>
  );
  const Thumb = (
    <div className={`thumb ${item.mediaClass ?? ""}${imgs.length > 1 ? " multi" : ""}`}>
      {imgs.map((im) => (
        <img key={im.src} className="zoom" src={im.src} alt={im.alt} />
      ))}
    </div>
  );
  return (
    <article className={`project reveal${item.wide ? " wide" : ""}`}>
      {imgs.length > 0 && (href ? <a href={href} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">{Thumb}</a> : Thumb)}
      <p className="p-meta">{item.meta}</p>
      {Title}
      {item.flow && <p className="flowline">{item.flow}</p>}
      {item.summary && <p className="summary">{item.summary}</p>}
      <ChipList names={[...(item.tools ?? []), ...(item.extraChips ?? [])]} />
      <details>
        <summary>Lihat detail</summary>
        <ul className="points">
          {item.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        {item.links?.length > 0 && (
          <p className="proj-links">
            {item.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
            ))}
          </p>
        )}
      </details>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="container projects-container" id="proyek">
      <h1 className="sec-title">Proyek</h1>
      {projectGroups.map((g) => (
        <div className="pgroup" key={g.label}>
          <h2 className="group-label">
            {g.logo && <CompanyLogo slug={g.logo} size="sm" />}
            {g.label}
          </h2>
          {g.note && <p className="group-note">{g.note}</p>}
          <div className="projects-grid">
            {g.items.map((it) => (
              <Project key={it.title} item={it} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
