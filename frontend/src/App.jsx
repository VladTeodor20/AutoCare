import { useEffect, useState } from "react";
import { fetchMaintenanceTasks } from "./api";
import MaintenanceList from "./components/MaintenanceList.jsx";
import "./App.css";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [mentenante, setMentenante] = useState([]);
  const [tema, setTema] = useState(temaInitiala);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadMaintenanceTasks() {
      try {
        const data = await fetchMaintenanceTasks();

        if (!ignore) {
          setMentenante(data.map((task) => ({
            id: task.id,
            titlu: task.title,
            descriere: task.description,
            categorie: task.category,
            efectuata: task.completed
          })));
        }
      } catch (err) {
        if (!ignore) {
          setError(err instanceof Error ? err.message : "Nu s-au putut încărca intervențiile.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadMaintenanceTasks();

    return () => {
      ignore = true;
    };
  }, []);

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
          {loading && <p className="info" role="status">Se încarcă intervențiile...</p>}
          {error && (
            <p className="error" role="alert">
              Nu s-au putut încărca intervențiile: {error}. Verifică dacă API-ul rulează cu <code>npm run api</code>.
            </p>
          )}
          {!loading && !error && (
            <MaintenanceList
              mentenante={mentenante}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </>
  );
}