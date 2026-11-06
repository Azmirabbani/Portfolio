import { useState } from "react";
import { profile } from "../data/portfolio.js";
import { GithubIcon, LinkedinIcon, MailIcon, PinIcon, IeeeIcon } from "./Logos.jsx";

function Item({ icon, label, value, href, children }) {
  const body = (
    <>
      <span className="c-icon">{icon}</span>
      <span className="c-text">
        <span className="c-label">{label}</span>
        <span className="c-value">{value}</span>
      </span>
    </>
  );
  return (
    <li className="c-item">
      {href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{body}</a>
      ) : (
        <div className="c-body">{body}</div>
      )}
      {children}
    </li>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard diblokir: pengunjung bisa menyalin teks manual */ }
  }

  const handle = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  return (
    <section className="container" id="kontak">
      <h1 className="sec-title">Kontak</h1>
      <ul className="contact-grid reveal">
        <Item icon={<MailIcon />} label="Email" value={profile.email} href={`mailto:${profile.email}`}>
          <button type="button" className="btn" onClick={copy}>{copied ? "Tersalin ✓" : "Salin"}</button>
        </Item>
        <Item icon={<LinkedinIcon size={22} />} label="LinkedIn" value="Azmi Rizqullah Rabbani" href={profile.linkedin} />
        <Item icon={<GithubIcon size={22} />} label="GitHub" value={handle(profile.github).replace("github.com/", "@")} href={profile.github} />
        <Item icon={<IeeeIcon />} label="Publikasi" value="IEEE Xplore ISRITI 2025" href={profile.ieee} />
        <Item icon={<PinIcon />} label="Lokasi" value={profile.location} />
      </ul>
      <span className="sr-only" role="status" aria-live="polite">{copied ? "Email tersalin" : ""}</span>
      <footer>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Dibuat dengan React dan Vite</span>
      </footer>
    </section>
  );
}
