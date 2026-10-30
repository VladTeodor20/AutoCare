import { useState } from "react";
import MaintenanceList from "./components/MaintenanceList.jsx";
import "./App.css";

// Adaptează array-ul cu datele tale din Etapa 4
const MENTENANTE_INITIALE = [
  { id: 1, titlu: "Schimb ulei și filtre", efectuata: false, prioritate: "mare" },
  { id: 2, titlu: "Verificare plăcuțe frână", efectuata: true, prioritate: "medie" },
  { id: 3, titlu: "Înlocuire lichid de parbriz", efectuata: false, prioritate: "mica" }
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [mentenante, setMentenante] = useState(MENTENANTE_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  function handleToggle(id) {
    setMentenante((prev) =>
      prev.map((m) => (m.id === id ? { ...m, efectuata: !m.efectuata } : m))
    );
  }

  function handleDelete(id) {
    setMentenante((prev) => prev.filter((m) => m.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const active = mentenante.filter((m) => !m.efectuata).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>AutoCare</h1>
        <p>Jurnal de mentenanță pentru Golf 6.</p>
        <p className="app-count">
          {mentenante.length} intervenții, dintre care {active} active
        </p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>Intervențiile mele</h2>
          <MaintenanceList
            mentenante={mentenante}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}