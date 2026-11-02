import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import History from "./components/History.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { useReveal } from "./hooks.js";

export default function App() {
  useReveal();
  return (
    <div className="main-container">
      <Header />
      <main>
        <Hero />
        <Skills />
        <History />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
