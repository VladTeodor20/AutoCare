
const PRIORITY_LABELS = {
  urgent: "Urgent",
  normal: "Normal",
  low: "Low",
};

export default function MaintenanceCard({ task }) {
  return (
    <li className={task.completed ? "item-card done" : "item-card"}>
      <div className="item-main">
        <div className="item-details">
          <h3>{task.name}</h3>

          <p>{task.category} · {task.description}</p>

          <p>Responsible: {task.owner}</p>

          <span className={`badge badge-${task.priority}`}>
            Priority: {PRIORITY_LABELS[task.priority]}
          </span>
        </div>
      </div>

      <span className={task.completed ? "status status-done" : "status status-active"}>
        {task.completed ? "Completed" : "Active"}
      </span>
    </li>
  );
}
