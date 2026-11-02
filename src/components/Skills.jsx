import { expertise } from "../data/portfolio.js";
import { ChipList } from "./Logos.jsx";

const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
const ICONS = {
  chat: <><path d="M4 5h16v11H9l-5 4z" {...P} /><path d="M8 9.5h8M8 12.5h5" {...P} /></>,
  code: <><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" {...P} /></>,
  braces: <><path d="M9 4C6.5 4 7 7 7 8.5S6.5 12 4 12c2.5 0 3 2 3 3.5S6.500 20 9 20M15 4c2.500 0 2 3 2 4.500S17.500 12 20 12c-2.500 0-3 2-3 3.500S17.500 20 15 20" {...P} /></>,
  chart: <><path d="M4 20V4M4 20h16" {...P} /><path d="M8 16v-4M12 16V8M16 16v-6" {...P} /></>,
  flow: <><rect x="3" y="4" width="6" height="5" rx="1.200" {...P} /><rect x="15" y="4" width="6" height="5" rx="1.200" {...P} /><rect x="9" y="15" width="6" height="5" rx="1.200" {...P} /><path d="M6 9v2.500h12V9M12 11.500V15" {...P} /></>,
  database: <><ellipse cx="12" cy="6" rx="7" ry="3" {...P} /><path d="M5 6v6c0 1.700 3.100 3 7 3s7-1.300 7-3V6M5 12v6c0 1.700 3.100 3 7 3s7-1.300 7-3v-6" {...P} /></>,
};

export default function Skills() {
  return (
    <section className="container" id="keahlian">
      <h1 className="sec-title">Keahlian</h1>
      <div className="expertise">
        {expertise.map((g) => (
          <article className="exp-block reveal" key={g.title}>
            <svg viewBox="0 0 24 24" width="52" height="52" aria-hidden="true">{ICONS[g.icon]}</svg>
            <h2>{g.title}</h2>
            <p>{g.desc}</p>
            <div className="flex-chips">
              <span className="chip-title">Tools:</span>
              <ChipList names={g.items} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
