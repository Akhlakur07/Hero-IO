import { Link, useLoaderData } from "react-router";
import AppCard from "../components/AppCard";
import { formatCompact } from "../utility/logic";
import heroPreview from "../assets/hero.png";

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
    <path
      d="M2.8 2.4c-.4.4-.5 1-.5 2v15.2c0 1 .2 1.7.7 2.1L14.3 12 2.8 2.4z"
      fill="#00d390"
    />
    <path
      d="m17.9 15.6-3.6-3.6L3 21.3c.4.2.9.2 1.5-.2l13.4-5.5z"
      fill="#fbbf24"
    />
    <path
      d="M17.9 8.4 4.5 2.9c-.6-.2-1.1-.2-1.5 0l11.3 9.2 3.6-3.7z"
      fill="#60a5fa"
    />
    <path
      d="M21.4 10.8 17.9 8.4 14.3 12l3.6 3.6 3.5-2.4c.9-.6.9-1.8 0-2.4z"
      fill="#ef4444"
    />
  </svg>
);

const AppStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#3b82f6" />
    <path
      d="M8 16h8M9.2 13.8l5.4-9m-8.5 9 4.3-7.2m1.8 7.2-2.6-4.4"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

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
      <section className="relative flex flex-col items-center overflow-hidden max-w-4xl mx-auto pt-12 text-center md:pt-20">
        <h1 className="text-7xl font-bold leading-tight md:text-6xl">
          We Build
        </h1>
        <h1 className="text-7xl font-bold leading-tight md:text-6xl">
          <span className="bg-linear-to-r from-[#632EE3] to-[#9f62f2] bg-clip-text text-transparent">
            Productive
          </span>
          Apps
        </h1>
        <p className="mt-6 max-w-4xl text-lg text-[#627382] md:text-xl">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://play.google.com/store/games"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded border border-[#d2d2d2] bg-white px-6 py-3 font-semibold"
          >
            <GooglePlayIcon />
            Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded border border-[#d2d2d2] bg-white px-6 py-3 font-semibold"
          >
            <AppStoreIcon />
            App Store
          </a>
        </div>

        <div className="relative mt-10 flex w-full justify-center">
          <img
            src={heroPreview}
            alt="Hero app preview"
            className="w-[320px] max-w-full object-contain md:w-[440px] lg:w-[720px]"
          />
        </div>
      </section>

      <section className="rounded bg-linear-to-r from-[#632EE3] to-[#9f62f2] px-6 py-12 text-white md:px-10">
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Trusted by Millions, Built for You
        </h2>
        <div className="mt-8 grid gap-6 text-center md:grid-cols-3">
          <article>
            <p className="text-sm text-white/80">Total Downloads</p>
            <h3 className="mt-2 text-5xl font-extrabold">
              {formatCompact(totals.downloads)}
            </h3>
            <p className="mt-1 text-sm text-white/75">
              21% more than last month
            </p>
          </article>
          <article>
            <p className="text-sm text-white/80">Total Reviews</p>
            <h3 className="mt-2 text-5xl font-extrabold">
              {formatCompact(totals.reviews)}
            </h3>
            <p className="mt-1 text-sm text-white/75">
              46% more than last month
            </p>
          </article>
          <article>
            <p className="text-sm text-white/80">Active Apps</p>
            <h3 className="mt-2 text-5xl font-extrabold">{apps.length}+</h3>
            <p className="mt-1 text-sm text-white/75">More launching soon</p>
          </article>
        </div>
      </section>

      <section className="py-12 px-4 md:py-16 md:px-20">
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Trending Apps
        </h2>
        <p className="mt-3 text-center text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/apps"
            className="bg-linear-to-r from-[#632EE3] to-[#9f62f2] px-6 py-3 text-sm font-semibold text-white"
          >
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
