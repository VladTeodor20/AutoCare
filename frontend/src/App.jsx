import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import MaintenanceDetailPage from "./pages/MaintenanceDetailPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import TasksPage from "./pages/TasksPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TasksPage />} />
        <Route path="/maintenanceTasks/:id" element={<MaintenanceDetailPage />} />
        <Route path="/despre" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}