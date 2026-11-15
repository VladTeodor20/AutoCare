export const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchMaintenanceTasks() {
  const response = await fetch(`${API_URL}/maintenanceTasks`);

  if (!response.ok) {
    throw new Error(`Eroare server: ${response.status}`);
  }

  return response.json();
}