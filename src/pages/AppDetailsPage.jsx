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
      <section className="flex min-h-[60vh] flex-col items-center justify-center py-10 text-center px-4 md:px-20">
        <h1 className="text-4xl font-bold text-[#001931]">
          OPPS!! APP NOT FOUND
        </h1>
        <p className="mt-3 max-w-xl text-[#627382]">
          The app you are requesting is not found on our system. Please try
          another app.
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
      <div className="grid gap-8 rounded bg-white p-4 md:grid-cols-[350px_1fr] md:p-8">
        <img
          src={app.image}
          alt={app.title}
          className="h-[300px] w-full rounded object-cover md:h-[350px]"
        />
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">{app.title}</h1>
          <p className="mt-2 text-lg text-[#627382]">
            Developed by {app.companyName}
          </p>
          <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div>
              <img src={ratings} alt="ratingimg" />
              <p className="text-sm text-[#627382]">Average Ratings</p>
              <p className="text-xl font-semibold">{app.ratingAvg}</p>
            </div>
            <div>
              <img src={downloads} alt="downloadimg" />
              <p className="text-sm text-[#627382]">Downloads</p>
              <p className="text-xl font-semibold">
                {formatCompact(app.downloads)}
              </p>
            </div>
            <div>
              <img src={review} alt="reviewimg" />
              <p className="text-sm text-[#627382]">Reviews</p>
              <p className="text-xl font-semibold">
                {formatCompact(app.reviews)}
              </p>
            </div>
          </div>
          <button
            onClick={handleInstall}
            disabled={installed}
            className="mt-8 rounded bg-linear-to-r from-[#632EE3] to-[#9f62f2] px-8 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {installed ? "Installed" : "Install now"} ({app.size} MB)
          </button>
        </div>
      </div>

      <div className="mt-10 rounded bg-white p-4 md:p-8">
        <h2 className="text-2xl font-bold">Ratings</h2>
        <div className="mt-6 h-72 w-full md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ratingChartData}
              layout="vertical"
              margin={{ top: 0, right: 0, left: 0, bottom: 20 }}
              barCategoryGap={24}
            >
              <YAxis
                dataKey="name"
                type="category"
                width={60}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#627382", fontSize: 18 }}
              />
              <XAxis
                type="number"
                domain={[0, "datamax"]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#627382", fontSize: 16 }}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#ff8811" radius={0} barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-10 rounded bg-white p-4 md:p-8">
        <h2 className="text-2xl font-bold">Description</h2>
        <p className="mt-4 leading-8 text-[#4d5a66]">{app.description}</p>
      </div>
    </section>
  );
};

export default AppDetailsPage;
