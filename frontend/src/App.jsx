const maintenanceTasks = [
    {
        id: 1,
        name: "Oil change",
        completed: false,
        priority: "urgent",
        category: "Engine",
        owner: "Demo User",
        description: "Regular maintenance"
    },
    {
        id: 2,
        name: "Brake inspection",
        completed: true,
        priority: "normal",
        category: "Brakes",
        owner: "Demo User",
        description: "Safety check"
    },
    {
        id: 3,
        name: "Tire replacement",
        completed: false,
        priority: "low",
        category: "Tires",
        owner: "Demo User",
        description: "Seasonal maintenance"
    }
];  

export default function App() {
  const active = maintenanceTasks.filter((task) => !task.completed).length;
  return (
  <>
    <header className="app-header">
      <p className="eyebrow">YOUR CAR, WELL CARED FOR</p>

      <h1>AutoCare</h1>

      <p className="header-description">
        Keep track of your car maintenance and repairs.
      </p>

      <p className="app-count">
        {maintenanceTasks.length} maintenance tasks · {active} active
      </p>
    </header>
    <main className="container">
  <section className="panel">
    <h2>Maintenance tasks</h2>

    {/* Temporary: raw data displayed as JSON */}
    <pre>{JSON.stringify(maintenanceTasks, null, 2)}</pre>
  </section>
</main>
  </>
);
}

