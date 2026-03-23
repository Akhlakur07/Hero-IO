import { useDeferredValue, useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../components/AppCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { filterByTitle, sortByDownloads } from "../utility/logic";
import toast from "react-hot-toast";

const AppsPage = () => {
  const apps = useLoaderData();
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState("");

  const deferredQuery = useDeferredValue(query);
  const searchLoading = query !== deferredQuery;

  const filteredApps = useMemo(() => {
    const searched = filterByTitle(apps, deferredQuery);
    return sortByDownloads(searched, sortType);
  }, [apps, deferredQuery, sortType]);

  const handleSort = (event) => {
    setSortType(event.target.value);
    toast.success("Apps sorted by downloads");
  };

  return (
    <section className="py-10 md:py-14 px-4 md:px-20">
      
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold md:text-5xl">
          Our All Applications
        </h1>
        <p className="mt-3 text-[#627382] md:text-lg">
          Explore all apps on the market developed by us. We code for millions.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="mt-10 flex flex-col gap-4 rounded-lg bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        
        <p className="text-lg font-semibold text-[#001931]">
          {filteredApps.length} Apps Found
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          
          <select
            className="select select-bordered w-full md:w-44"
            value={sortType}
            onChange={handleSort}
          >
            <option value="">Sort by downloads</option>
            <option value="high-low">High → Low</option>
            <option value="low-high">Low → High</option>
          </select>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search apps..."
            className="input input-bordered w-full md:w-72"
          />
        </div>
      </div>

      {/* CONTENT */}
      {searchLoading ? (
        <LoadingSpinner text="Searching apps..." />
      ) : filteredApps.length === 0 ? (
        <p className="mt-10 rounded-lg bg-white p-6 text-center text-lg font-semibold text-[#627382] shadow-sm">
          No App Found
        </p>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AppsPage;