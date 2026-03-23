import { useMemo, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import toast from "react-hot-toast";
import { formatCompact, installApp, isAppInstalled } from "../utility/logic";

import downloads from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import apperror from "../assets/App-Error.png";

const AppDetailsPage = () => {
  const apps = useLoaderData();
  const { id } = useParams();

  const app = useMemo(
    () => apps.find((item) => item.id === Number(id)),
    [apps, id],
  );

  const [justInstalled, setJustInstalled] = useState(false);

  if (!app) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
        <img src={apperror} alt="AppNotFound"/>
        <h1 className="text-4xl font-bold text-[#001931]">
          OPPS!! APP NOT FOUND
        </h1>
        <p className="mt-3 max-w-xl text-[#627382]">
          The app you are requesting is not found on our system.
        </p>
        <Link
          to="/apps"
          className="mt-6 rounded bg-linear-to-r from-[#632EE3] to-[#9f62f2] px-6 py-3 font-semibold text-white"
        >
          Browse Apps
        </Link>
      </section>
    );
  }

  const installed = justInstalled || isAppInstalled(app.id);

  const ratingChartData = [...app.ratings].sort(
    (a, b) => Number(b.name.split(" ")[0]) - Number(a.name.split(" ")[0]),
  );

  const handleInstall = () => {
    installApp(app.id);
    setJustInstalled(true);
    toast.success(`${app.title} installed successfully`);
  };

  return (
    <section className="py-10 md:py-14 px-4 md:px-20">
      {/* TOP SECTION */}
      <div className="grid gap-8 rounded-lg bg-white p-6 shadow-sm md:grid-cols-[320px_1fr]">
        <img
          src={app.image}
          alt={app.title}
          className="h-65 w-full rounded-lg object-cover md:h-80"
        />

        <div>
          <h1 className="text-3xl font-bold md:text-4xl">{app.title}</h1>

          <p className="mt-2 text-lg text-[#627382] border-b border-[#e0e0e0] pb-4">
            Developed by{" "}
            <span className="text-[#632EE3]">{app.companyName}</span>
          </p>

          {/* STATS */}
          <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3">
            <div>
              <img src={downloads} />
              <p className="text-[#627382]">Downloads</p>
              <p className="font-extrabold text-[40px]">{formatCompact(app.downloads)}</p>
            </div>

            <div>
              <img src={ratings}/>
              <p className="text-[#627382]">Average Ratings</p>
              <p className="font-extrabold text-[40px]">{app.ratingAvg}</p>
            </div>

            <div>
              <img src={review}/>
              <p className="text-[#627382]">Reviews</p>
              <p className="font-extrabold text-[40px]">{formatCompact(app.reviews)}</p>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className="mt-8 w-full md:w-auto rounded bg-[#00d390] px-8 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {installed ? "Installed" : "Install Now"} ({app.size} MB)
          </button>
        </div>
      </div>

      {/* CHART */}
      <div className="mt-10 rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Ratings Overview</h2>

        <div className="mt-6 h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ratingChartData}
              layout="vertical"
              barCategoryGap={20}
            >
              <YAxis
                dataKey="name"
                type="category"
                width={70}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#627382", fontSize: 14 }}
              />

              <XAxis
                type="number"
                domain={[0, "dataMax"]} // FIXED
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

              <Bar
                dataKey="count"
                fill="#ff8811"
                radius={[0, 6, 6, 0]}
                barSize={28}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-10 rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Description</h2>
        <p className="mt-4 leading-7 text-[#4d5a66]">{app.description}</p>
      </div>
    </section>
  );
};

export default AppDetailsPage;
