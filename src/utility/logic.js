const INSTALLED_APPS_KEY = "heroio-installed-apps";

export const formatCompact = (value) =>
  new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);

export const readInstalledApps = () => {
  const saved = localStorage.getItem(INSTALLED_APPS_KEY);
  if (!saved) return [];
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const isAppInstalled = (id) => readInstalledApps().includes(id);

export const installApp = (id) => {
  const installed = new Set(readInstalledApps());
  installed.add(id);
  localStorage.setItem(INSTALLED_APPS_KEY, JSON.stringify([...installed]));
};

export const sortByDownloads = (apps, sort) => {
  const copied = [...apps];
  if (sort === "high-low") return copied.sort((a, b) => b.downloads - a.downloads);
  if (sort === "low-high") return copied.sort((a, b) => a.downloads - b.downloads);
  return copied;
};

export const filterByTitle = (apps, query) => {
  if (!query.trim()) return apps;
  return apps.filter((app) => app.title.toLowerCase().includes(query.toLowerCase()));
};
