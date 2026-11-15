export default function MaintenanceCard({ mentenanta, onToggle, onDelete }) {
  return (
    <li className={mentenanta.efectuata ? "task-card done" : "task-card"}>
      <label className="task-main">
        <input
          type="checkbox"
          checked={mentenanta.efectuata}
          onChange={() => onToggle(mentenanta.id)}
        />
        <div>
          <h3>{mentenanta.titlu}</h3>
          {mentenanta.descriere && <p className="info">{mentenanta.descriere}</p>}
          {mentenanta.categorie && (
            <span className="badge badge-category">{mentenanta.categorie}</span>
          )}
        </div>
      </label>
      <button
        className="btn-danger"
        onClick={() => onDelete(mentenanta.id)}
        aria-label={`Șterge ${mentenanta.titlu}`}
      >
        Șterge
      </button>
    </li>
  );
}