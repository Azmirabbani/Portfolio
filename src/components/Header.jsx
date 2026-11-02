import { useEffect, useState } from "react";

const LINKS = [
  ["#keahlian", "Keahlian"],
  ["#riwayat", "Riwayat"],
  ["#proyek", "Proyek"],
  ["#kontak", "Kontak"],
];

export default function Header() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => setTheme(document.documentElement.getAttribute("data-theme") || "dark"), []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch { /* mode privat: abaikan */ }
    setTheme(next);
  }

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <button className="theme-btn" type="button" onClick={toggle} aria-label={theme === "dark" ? "Pakai tema terang" : "Pakai tema gelap"} title="Ganti tema">
          {theme === "dark" ? (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="currentColor"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2L6 6M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8"/></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
          )}
        </button>
        <nav className="nav" aria-label="Navigasi utama">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
