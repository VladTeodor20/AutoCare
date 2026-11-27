import { useEffect, useState } from "react";
import {
  createMaintenanceTask,
  deleteMaintenanceTask,
  fetchMaintenanceTasks,
  updateMaintenanceTask,
} from "../api.js";
import MaintenanceList from "../components/MaintenanceList.jsx";
import TaskForm from "../components/TaskForm.jsx";
import styles from "./TasksPage.module.css";

function adapteazaMentenanta(task) {
  return {
    id: task.id,
    titlu: task.title,
    descriere: task.description,
    categorie: task.category,
    efectuata: task.completed,
  };
}

export default function TasksPage() {
  const [mentenante, setMentenante] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let ignore = false;

    async function loadMaintenanceTasks() {
      try {
        const data = await fetchMaintenanceTasks();

        if (!ignore) {
          setMentenante(data.map(adapteazaMentenanta));
          setLoaded(true);
          setLoadError(false);
        }
      } catch (err) {
        if (!ignore) {
          setError(err instanceof Error ? err.message : "Nu s-au putut încărca intervențiile.");
          setLoadError(true);
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

  async function handleAdd(task) {
    const savedTask = await createMaintenanceTask(task);
    setMentenante((prev) => [...prev, adapteazaMentenanta(savedTask)]);
    setLoaded(true);
    setLoadError(false);
    setError("");
  }

  async function handleToggle(id) {
    const task = mentenante.find((item) => item.id === id);
    if (!task) return;

    try {
      const savedTask = await updateMaintenanceTask(id, {
        completed: !task.efectuata,
      });
      setMentenante((prev) =>
        prev.map((item) => (item.id === id ? adapteazaMentenanta(savedTask) : item))
      );
      setLoadError(false);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Intervenția nu a putut fi actualizată.");
    }
  }

  async function handleDelete(id) {
    try {
      await deleteMaintenanceTask(id);
      setMentenante((prev) => prev.filter((item) => item.id !== id));
      setLoadError(false);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Intervenția nu a putut fi ștearsă.");
    }
  }

  const active = mentenante.filter((item) => !item.efectuata).length;

  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Adaugă o intervenție</h2>
        <TaskForm onAdd={handleAdd} />
      </section>
      <section className="panel">
        <h2>Intervențiile mele</h2>
        <p className={styles.summary}>
          {mentenante.length} intervenții, dintre care {active} active
        </p>
        {loading && (
          <p className="info" role="status" data-testid="loading">
            Se încarcă intervențiile...
          </p>
        )}
        {error && (
          <p className="error" role="alert" data-testid="error">
            {loadError ? "Nu s-au putut încărca intervențiile" : "Nu s-a putut actualiza lista"}: {error}.
            {" "}Verifică dacă API-ul rulează cu <code>npm run api</code>.
          </p>
        )}
        {loaded && (
          <MaintenanceList
            mentenante={mentenante}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  );
}
