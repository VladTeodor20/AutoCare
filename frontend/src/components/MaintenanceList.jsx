import MaintenanceCard from "./MaintenanceCard.jsx";

export default function MaintenanceList({ mentenante, onToggle, onDelete }) {
  if (mentenante.length === 0) {
    return <p className="empty">Nu există nicio intervenție înregistrată.</p>;
  }

  return (
    <ul className="task-list">
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