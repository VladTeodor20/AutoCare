export default function MaintenanceCard({ mentenanta, onToggle, onDelete }) {
  return (
    <li
      className={mentenanta.efectuata ? "task-card done" : "task-card"}
      data-testid="item"
      data-id={mentenanta.id}
    >
      <label className="task-main">
        <input
          type="checkbox"
          checked={mentenanta.efectuata}
          onChange={() => onToggle(mentenanta.id)}
          data-testid="item-toggle"
        />
        <div>
          <h3 data-testid="item-title">{mentenanta.titlu}</h3>
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
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}