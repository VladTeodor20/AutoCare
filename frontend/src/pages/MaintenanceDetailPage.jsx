import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMaintenanceTask } from "../api.js";
import styles from "./MaintenanceDetailPage.module.css";

export default function MaintenanceDetailPage() {
  const { id } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetchMaintenanceTask(id)
      .then((task) => {
        if (!ignore) setResult({ id, task, error: null });
      })
      .catch((err) => {
        if (!ignore) {
          setResult({
            id,
            task: null,
            error: err instanceof Error ? err.message : "Intervenția nu a putut fi încărcată.",
          });
        }
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (!result || result.id !== id) {
    return (
      <p className="info" role="status" data-testid="loading">
        Se încarcă intervenția...
      </p>
    );
  }

  if (result.error) {
    return (
      <section className="panel">
        <p className="error" role="alert" data-testid="error">
          Intervenția nu a putut fi încărcată: {result.error}
        </p>
        <Link to="/" className={styles.back}>Înapoi la intervenții</Link>
      </section>
    );
  }

  const { task } = result;

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>Înapoi la intervenții</Link>
      <h2 className={task.completed ? styles.completed : undefined} data-testid="detail-title">
        {task.title}
      </h2>
      <dl className={styles.fields}>
        <dt>Categorie</dt>
        <dd>{task.category || "Nespecificată"}</dd>
        <dt>Descriere</dt>
        <dd>{task.description || "Fără descriere."}</dd>
        <dt>Stare</dt>
        <dd>{task.completed ? "Efectuată" : "Activă"}</dd>
        <dt>ID</dt>
        <dd>{task.id}</dd>
      </dl>
    </section>
  );
}
