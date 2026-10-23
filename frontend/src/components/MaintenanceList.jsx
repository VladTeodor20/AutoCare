
import MaintenanceCard from "./MaintenanceCard.jsx";

export default function MaintenanceList({ maintenanceTasks }) {
  if (maintenanceTasks.length === 0) {
    return <p className="empty">No maintenance tasks.</p>;
  }

  return (
    <ul className="item-list">
      {maintenanceTasks.map((task) => (
        <MaintenanceCard key={task.id} task={task} />
      ))}
    </ul>
  );
}

