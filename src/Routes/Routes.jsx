import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import AppsPage from "../pages/AppsPage";
import InstallationPage from "../pages/InstallationPage";
import AppDetailsPage from "../pages/AppDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";

const appsLoader = async () => {
  const response = await fetch("/data.json");
  if (!response.ok) throw new Error("Failed to load app data");
  return response.json();
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, loader: appsLoader, Component: HomePage },
      { path: "apps", loader: appsLoader, Component: AppsPage },
      { path: "apps/:id", loader: appsLoader, Component: AppDetailsPage },
      { path: "installation", loader: appsLoader, Component: InstallationPage },
    ],
  },
  { path: "*", Component: NotFoundPage },
]);