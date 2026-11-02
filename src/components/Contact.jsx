import { useState } from "react";
import { profile } from "../data/portfolio.js";
import { GithubIcon, LinkedinIcon } from "./Logos.jsx";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard diblokir: pengunjung bisa menyalin teks manual */ }
  }

  // Tanpa server: form membuka aplikasi email pengunjung dengan isi yang sudah terisi.
  function submit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${form.name} (portfolio)`);
    const body = encodeURIComponent(`${form.message}\n\nNama: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="container" id="kontak">
      <h1 className="sec-title">Kontak</h1>
      <div className="contact-wrap">
        <div className="contact-info reveal">
          <p>Terbuka untuk posisi full-time, proyek, dan diskusi seputar chatbot AI, otomasi, dan web.</p>
          <p className="mail">
            <code>{profile.email}</code>
            <button type="button" className="btn" onClick={copy}>{copied ? "Tersalin ✓" : "Salin"}</button>
          </p>
          <span className="sr-only" role="status" aria-live="polite">{copied ? "Email tersalin" : ""}</span>
          <p className="contact-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={20} /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon size={20} /> GitHub</a>
            <a href={profile.ieee} target="_blank" rel="noreferrer">Publikasi IEEE ↗</a>
          </p>
        </div>
        <form className="contact-form reveal" onSubmit={submit}>
          <label>
            Nama
            <input required value={form.name} onChange={set("name")} autoComplete="name" />
          </label>
          <label>
            Email
            <input required type="email" value={form.email} onChange={set("email")} autoComplete="email" />
          </label>
          <label>
            Pesan
            <textarea required rows="5" value={form.message} onChange={set("message")} />
          </label>
          <button type="submit" className="btn send">Kirim lewat email</button>
        </form>
      </div>
      <footer>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </section>
  );
}
