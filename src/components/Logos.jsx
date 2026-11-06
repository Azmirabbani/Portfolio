import {
  siGitbook, siNextdotjs, siTailwindcss, siShadcnui, siGooglesheets, siTypescript, siSupabase,
  siVercel, siReact, siVite, siReactrouter, siN8n, siGmail, siGoogleappsscript, siJavascript,
  siPython, siPytorch, siUltralytics, siNvidia, siPandas, siNumpy, siPlotly, siVuedotjs,
  siNodedotjs, siExpress, siConvex, siIeee, siLaravel, siPhp, siPostgresql, siMysql, siGit,
  siGithub, siPostman, siWireshark, siHtml5, siCss,
} from "simple-icons";
import { companies } from "../data/portfolio.js";

// Nama yang dipakai di data -> ikon simple-icons. Nama tanpa ikon tampil sebagai teks saja.
const ICONS = {
  "GitBook": siGitbook, "Next.js": siNextdotjs, "Tailwind CSS": siTailwindcss, "shadcn/ui": siShadcnui,
  "Google Sheets": siGooglesheets, "TypeScript": siTypescript, "Supabase": siSupabase, "Vercel": siVercel,
  "React": siReact, "Vite": siVite, "React Router": siReactrouter, "n8n": siN8n, "Gmail": siGmail,
  "Google Apps Script": siGoogleappsscript, "JavaScript": siJavascript, "Python": siPython,
  "PyTorch": siPytorch, "Ultralytics": siUltralytics, "NVIDIA": siNvidia, "Pandas": siPandas,
  "NumPy": siNumpy, "Plotly": siPlotly, "Vue.js": siVuedotjs, "Node.js": siNodedotjs, "Express": siExpress,
  "Convex": siConvex, "IEEE": siIeee, "Laravel": siLaravel, "PHP": siPhp, "PostgreSQL": siPostgresql,
  "MySQL": siMysql, "Git": siGit, "GitHub": siGithub, "Postman": siPostman, "Wireshark": siWireshark,
  "HTML": siHtml5, "CSS": siCss,
};

function Glyph({ icon, size = 14 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={`#${icon.hex}`} aria-hidden="true" focusable="false">
      <path d={icon.path} />
    </svg>
  );
}

// Chip kecil: ikon (jika ada) + nama.
// Tool tanpa ikon di simple-icons bisa memakai file di src/assets/logos (nama -> nama file tanpa ekstensi).
const IMG_ICONS = { "Mekari Qontak": "qontak" };

export function ToolChip({ name }) {
  const icon = ICONS[name];
  const imgSrc = !icon && bySlug[IMG_ICONS[name]];
  return (
    <li className="chip">
      {(icon || imgSrc) && (
        <span className="ti" aria-hidden="true">
          {icon ? <Glyph icon={icon} /> : <img src={imgSrc} alt="" width="15" height="15" />}
        </span>
      )}
      {name}
    </li>
  );
}

export function ChipList({ names = [] }) {
  if (!names.length) return null;
  return (
    <ul className="chips" aria-label="Teknologi">
      {names.map((n) => (
        <ToolChip key={n} name={n} />
      ))}
    </ul>
  );
}

export function GithubIcon({ size = 28 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" focusable="false">
      <path d={siGithub.path} />
    </svg>
  );
}

// LinkedIn tidak ada di simple-icons, jadi dipakai kotak "in" sederhana.
export function LinkedinIcon({ size = 28 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M7.5 10.5v6M7.5 7.6v.1M11.5 16.5v-6M11.5 13c0-1.7 1-2.6 2.4-2.6s2.1 1 2.1 2.6v3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7.5l8.5 6 8.5-6" />
    </svg>
  );
}

export function PinIcon({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.500C5 14.800 12 21 12 21z" />
      <circle cx="12" cy="9.500" r="2.500" />
    </svg>
  );
}

export function IeeeIcon({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" focusable="false">
      <path d={siIeee.path} />
    </svg>
  );
}

// Logo perusahaan dari src/assets/logos/<slug>.*, atau monogram bila file belum ada.
const files = import.meta.glob("../assets/logos/*.{png,jpg,jpeg,svg,webp}", { eager: true, import: "default" });
const bySlug = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split("/").pop().replace(/\.[^.]+$/, ""), url])
);

function initials(name) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function CompanyLogo({ slug, size = "md", showName = false }) {
  const name = companies[slug] ?? slug;
  const src = bySlug[slug];
  return (
    <span className={`clogo ${size}`} title={name}>
      <span className={`clogo-mark${src ? " has-img" : ""}`}>
        {src ? <img src={src} alt={showName ? "" : `Logo ${name}`} loading="lazy" /> : <b aria-hidden="true">{initials(name)}</b>}
      </span>
      {showName && <span className="clogo-name">{name}</span>}
    </span>
  );
}
