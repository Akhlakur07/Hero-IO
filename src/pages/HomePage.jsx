import { Link, useLoaderData } from "react-router";
import AppCard from "../components/AppCard";
import { formatCompact } from "../utility/logic";

const HomePage = () => {
  const apps = useLoaderData();
  const topApps = apps.slice(0, 8);

  const totals = apps.reduce(
    (acc, app) => {
      acc.downloads += app.downloads;
      acc.reviews += app.reviews;
      return acc;
    },
    { downloads: 0, reviews: 0 },
  );

  return (
    <div>
      <section className="flex flex-col items-center py-12 text-center md:py-20">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          We Build <span className="bg-gradient-to-r from-[#632EE3] to-[#9f62f2] bg-clip-text text-transparent">Productive</span> Apps
        </h1>
        <p className="mt-6 max-w-4xl text-base text-[#627382] md:text-xl">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler,
          smarter, and more exciting.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" className="rounded border border-[#d2d2d2] bg-white px-6 py-3 font-semibold">
            App Store
          </a>
          <a href="https://play.google.com/store/games" target="_blank" rel="noreferrer" className="rounded border border-[#d2d2d2] bg-white px-6 py-3 font-semibold">
            Play Store
          </a>
        </div>
      </section>

      <section className="rounded bg-gradient-to-r from-[#632EE3] to-[#9f62f2] px-6 py-12 text-white md:px-10">
        <h2 className="text-center text-3xl font-bold md:text-5xl">Trusted by Millions, Built for You</h2>
        <div className="mt-8 grid gap-6 text-center md:grid-cols-3">
          <article>
            <p className="text-sm text-white/80">Total Downloads</p>
            <h3 className="mt-2 text-5xl font-extrabold">{formatCompact(totals.downloads)}</h3>
            <p className="mt-1 text-sm text-white/75">21% more than last month</p>
          </article>
          <article>
            <p className="text-sm text-white/80">Total Reviews</p>
            <h3 className="mt-2 text-5xl font-extrabold">{formatCompact(totals.reviews)}</h3>
            <p className="mt-1 text-sm text-white/75">46% more than last month</p>
          </article>
          <article>
            <p className="text-sm text-white/80">Active Apps</p>
            <h3 className="mt-2 text-5xl font-extrabold">{apps.length}+</h3>
            <p className="mt-1 text-sm text-white/75">More launching soon</p>
          </article>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <h2 className="text-center text-3xl font-bold md:text-5xl">Trending Apps</h2>
        <p className="mt-3 text-center text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/apps" className="rounded bg-gradient-to-r from-[#632EE3] to-[#9f62f2] px-6 py-3 text-sm font-semibold text-white">
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
