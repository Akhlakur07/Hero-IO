import { Link, useLoaderData } from "react-router";
import {
  formatCompact,
  readInstalledApps,
  sortByDownloads,
  uninstallApp,
} from "../utility/logic";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import downloads from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";

const handleUninstall = (id) => {
  uninstallApp(id);
  toast.success("App uninstalled");
  window.location.reload(); // simple way to refresh UI
};

const InstallationPage = () => {
  const apps = useLoaderData();
  const [sortType, setSortType] = useState("");
  const installedIds = readInstalledApps();

  const installedApps = useMemo(() => {
    const onlyInstalled = apps.filter((app) => installedIds.includes(app.id));
    return sortByDownloads(onlyInstalled, sortType);
  }, [apps, installedIds, sortType]);

  return (
    <section className="py-10 md:py-14 px-4 md:px-20">
      <h1 className="text-3xl font-bold md:text-5xl text-center">Your Installed Apps</h1>
      <p className="mt-3 text-[#627382] text-center">
        Explore all trending apps on the market developed by us.
      </p>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-lg font-semibold">
          {installedApps.length} Apps Found
        </p>
        <select
          className="select select-bordered w-full md:w-44"
          value={sortType}
          onChange={(event) => setSortType(event.target.value)}
        >
          <option value="">Sort by Downloads</option>
          <option value="high-low">High-Low</option>
          <option value="low-high">Low-High</option>
        </select>
      </div>

      {installedApps.length === 0 ? (
        <div className="mt-8 rounded bg-white p-8 text-center">
          <h2 className="text-2xl font-bold">No installed apps yet</h2>
          <p className="mt-2 text-[#627382]">
            Install apps from the details page to see them here.
          </p>
          <Link
            to="/apps"
            className="mt-4 inline-block rounded bg-linear-to-r from-[#632EE3] to-[#9f62f2] px-6 py-3 text-sm font-semibold text-white"
          >
            Explore Apps
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-3">
          {installedApps.map((app) => (
            <Link
              key={app.id}
              to={`/apps/${app.id}`}
              className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md md:flex-row md:items-center md:justify-between"
            >
              {/* LEFT SIDE */}
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-20 w-20 rounded-lg object-cover"
                />

                <div>
                  <h3 className="text-lg font-semibold">{app.title}</h3>

                  {/* INFO ROW */}
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-[#627382]">
                    {/* Downloads */}
                    <div className="flex items-center gap-1">
                      <img
                        src={downloads}
                        alt="Downloads"
                        className="h-4 w-4"
                      />
                      <span>{formatCompact(app.downloads)}</span>
                    </div>

                    {/* Ratings */}
                    <div className="flex items-center gap-1">
                      <img src={ratings} alt="Ratings" className="h-4 w-4" />
                      <span>{app.ratingAvg}</span>
                    </div>

                    {/* Size */}
                    <div>{app.size} MB</div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE BUTTON */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleUninstall(app.id);
                }}
                className="w-full rounded bg-[#00D390] px-4 py-2 text-sm font-semibold text-white transition md:w-auto"
              >
                Uninstall
              </button>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default InstallationPage;
