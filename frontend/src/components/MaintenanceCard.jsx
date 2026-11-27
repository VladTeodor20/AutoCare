import { Link } from "react-router-dom";
import styles from "./MaintenanceCard.module.css";

export default function MaintenanceCard({ mentenanta, onToggle, onDelete }) {
  return (
    <li
      className={`${styles.card} ${mentenanta.efectuata ? styles.done : ""}`}
      data-testid="item"
      data-id={mentenanta.id}
    >
      <div className={styles.main}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={mentenanta.efectuata}
          onChange={() => onToggle(mentenanta.id)}
          aria-label={`Marchează ${mentenanta.titlu} ca efectuată`}
          data-testid="item-toggle"
        />
        <div>
          <Link
            className={styles.title}
            to={`/maintenanceTasks/${mentenanta.id}`}
            data-testid="item-link"
          >
            {mentenanta.titlu}
          </Link>
          {mentenanta.descriere && <p className={styles.description}>{mentenanta.descriere}</p>}
          {mentenanta.categorie && (
            <span className="badge">{mentenanta.categorie}</span>
          )}
        </div>
      </div>
      <button
        className="btn-danger"
        onClick={() => onDelete(mentenanta.id)}
        aria-label={`Șterge ${mentenanta.titlu}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}