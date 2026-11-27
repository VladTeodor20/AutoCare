import MaintenanceCard from "./MaintenanceCard.jsx";
import styles from "./MaintenanceList.module.css";

export default function MaintenanceList({ mentenante, onToggle, onDelete }) {
  if (mentenante.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu există nicio intervenție înregistrată.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {mentenante.map((mentenanta) => (
        <MaintenanceCard
          key={mentenanta.id}
          mentenanta={mentenanta}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}