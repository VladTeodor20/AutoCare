export const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });

  if (!response.ok) {
    throw new Error(`Eroare server: ${response.status}`);
  }

  return response.status === 204 ? null : response.json();
}

export function fetchMaintenanceTasks() {
  return request("/maintenanceTasks");
}

export function fetchMaintenanceTask(id) {
  return request(`/maintenanceTasks/${id}`);
}

export function createMaintenanceTask(task) {
  return request("/maintenanceTasks", {
    method: "POST",
    body: JSON.stringify(task),
  });
}

export function updateMaintenanceTask(id, changes) {
  return request(`/maintenanceTasks/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteMaintenanceTask(id) {
  return request(`/maintenanceTasks/${id}`, { method: "DELETE" });
}