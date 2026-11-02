import { profile, companyStrip } from "../data/portfolio.js";
import { CompanyLogo, GithubIcon, LinkedinIcon } from "./Logos.jsx";
import Wave from "./Wave.jsx";

export default function Hero() {
  return (
    <section className="about-section" id="atas">
      <Wave />
      <div className="content">
        <img className="avatar" src={profile.portrait} alt="Potret Azmi Rizqullah Rabbani" width="195" height="195" />
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <div className="social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          {profile.cvUrl && <a className="cv-link" href={profile.cvUrl} target="_blank" rel="noreferrer">Unduh CV ↗</a>}
        </div>
        <p className="intro">
          {profile.intro.map((part, i) =>
            typeof part === "string" ? <span key={i}>{part}</span> : <strong key={i}>{part.strong}</strong>
          )}
        </p>
        <dl className="facts">
          {profile.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.value}</dt>
              <dd>{f.label}</dd>
            </div>
          ))}
        </dl>
        <div className="company-strip" aria-label="Tempat saya pernah belajar dan bekerja">
          {companyStrip.map((slug) => (
            <CompanyLogo key={slug} slug={slug} showName />
          ))}
        </div>
      </div>
    </section>
  );
}
