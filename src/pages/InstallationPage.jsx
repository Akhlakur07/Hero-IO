import { Link, useLoaderData } from "react-router";
import { readInstalledApps, sortByDownloads } from "../utility/logic";
import { useMemo, useState } from "react";

const InstallationPage = () => {
  const apps = useLoaderData();
  const [sortType, setSortType] = useState("");
  const installedIds = readInstalledApps();

  const installedApps = useMemo(() => {
    const onlyInstalled = apps.filter((app) => installedIds.includes(app.id));
    return sortByDownloads(onlyInstalled, sortType);
  }, [apps, installedIds, sortType]);

  return (
    <section className="py-10 md:py-14">
      <h1 className="text-3xl font-bold md:text-5xl">Your Installed Apps</h1>
      <p className="mt-3 text-[#627382]">Explore all trending apps on the market developed by us.</p>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-lg font-semibold">{installedApps.length} Apps Found</p>
        <select className="select select-bordered w-full md:w-44" value={sortType} onChange={(event) => setSortType(event.target.value)}>
          <option value="">Sort by Downloads</option>
          <option value="high-low">High-Low</option>
          <option value="low-high">Low-High</option>
        </select>
      </div>

      {installedApps.length === 0 ? (
        <div className="mt-8 rounded bg-white p-8 text-center">
          <h2 className="text-2xl font-bold">No installed apps yet</h2>
          <p className="mt-2 text-[#627382]">Install apps from the details page to see them here.</p>
          <Link to="/apps" className="mt-4 inline-block rounded bg-gradient-to-r from-[#632EE3] to-[#9f62f2] px-6 py-3 text-sm font-semibold text-white">
            Explore Apps
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-3">
          {installedApps.map((app) => (
            <Link
              key={app.id}
              to={`/apps/${app.id}`}
              className="flex flex-col gap-4 rounded bg-white p-4 shadow-sm transition hover:shadow-md md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-4">
                <img src={app.image} alt={app.title} className="size-20 rounded object-cover" />
                <div>
                  <h3 className="text-lg font-semibold">{app.title}</h3>
                  <p className="text-sm text-[#627382]">{app.companyName}</p>
                </div>
              </div>
              <span className="rounded bg-[#f1f5e8] px-3 py-1 text-sm font-medium text-[#00a067]">Installed</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default InstallationPage;
