
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

const PRIORITIES = ["urgent", "normal", "low"];
const CATEGORIES = ["Engine", "Brakes", "Tires", "General"];

function listTaskNames(tasks) {
    return tasks.map((task) => task.name);
}

function countActive(tasks) {
    return tasks.filter((task) => !task.completed).length;
}

function searchTasks(tasks, text) {
    const searchText = text.trim().toLowerCase();

    return tasks.filter((task) =>
        [
            task.name,
            task.priority,
            task.category,
            task.owner,
            task.description
        ].some((value) =>
            value.toLowerCase().includes(searchText)
        )
    );
}

function findTaskById(tasks, id) {
    return tasks.find((task) => task.id === id);
}

function nextId(tasks) {
        return tasks.reduce(
        (max, task) => Math.max(max, task.id),
        0
    ) + 1;
}
    
function addTask(
    tasks,
    name,
    priority = "normal",
    category = "General",
    owner = "Demo User",
    description = ""
) {
    if (typeof name !== "string" || name.trim() === "") {
        console.log("Eroare: numele operațiunii nu poate fi gol.");
        return tasks;
    }

    const cleanName = name.trim();

    if (cleanName.length > 100) {
        console.log("Eroare: numele poate avea maximum 100 de caractere.");
        return tasks;
    }

    if (!PRIORITIES.includes(priority)) {
        console.log("Eroare: prioritate invalidă.");
        return tasks;
    }

    if (!CATEGORIES.includes(category)) {
        console.log("Eroare: categorie invalidă.");
        return tasks;
    }

    if (typeof owner !== "string" || owner.trim() === "") {
        console.log("Eroare: proprietarul nu poate fi gol.");
        return tasks;
    }

    if (typeof description !== "string" || description.length > 150) {
        console.log("Eroare: descrierea trebuie să aibă maximum 150 de caractere.");
        return tasks;
    }

    const newTask = {
        id: nextId(tasks),
        name: cleanName,
        completed: false,
        priority: priority,
        category: category,
        owner: owner.trim(),
        description: description.trim()
    };

    return [...tasks, newTask];
}


function toggleCompleted(tasks, id) {
    return tasks.map((task) =>
        task.id === id
            ? { ...task, completed: !task.completed }
            : task
    );
}

function deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
}

console.log("--- Citire ---");
console.log("Operațiuni:", listTaskNames(maintenanceTasks).join(", "));
console.log("Active:", countActive(maintenanceTasks));
console.log("Căutare 'OIL':", listTaskNames(searchTasks(maintenanceTasks, "OIL")).join(", "));
console.log("Căutare 'Brakes':", listTaskNames(searchTasks(maintenanceTasks, "Brakes")).join(", "));
console.log("După id 2:", findTaskById(maintenanceTasks, 2).name);

console.log("--- Adăugare ---");
let currentTasks = addTask(
    maintenanceTasks,
    "Battery check",
    "normal",
    "General",
    "Demo User",
    "Electrical system"
);

console.log("Lista nouă:", currentTasks.length, "operațiuni");
console.log("ID-ul nou:", currentTasks[currentTasks.length - 1].id);
console.log("Originalul a rămas cu:", maintenanceTasks.length, "operațiuni");

console.log("--- Modificare și ștergere ---");
currentTasks = toggleCompleted(currentTasks, 1);
console.log("După finalizarea operațiunii cu id 1, active:", countActive(currentTasks));

currentTasks = deleteTask(currentTasks, 3);
console.log("După ștergerea id 3:", listTaskNames(currentTasks).join(", "));

console.log("--- Validare ---");
addTask(currentTasks, "   ");
addTask(currentTasks, "New task", "critical");

