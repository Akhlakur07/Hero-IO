import { useMemo, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import toast from "react-hot-toast";
import { formatCompact, installApp, isAppInstalled } from "../utility/logic";

const AppDetailsPage = () => {
  const apps = useLoaderData();
  const { id } = useParams();
  const app = useMemo(() => apps.find((item) => item.id === Number(id)), [apps, id]);
  const [justInstalled, setJustInstalled] = useState(false);

  if (!app) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center py-10 text-center">
        <h1 className="text-4xl font-bold text-[#001931]">OPPS!! APP NOT FOUND</h1>
        <p className="mt-3 max-w-xl text-[#627382]">
          The app you are requesting is not found on our system. Please try another app.
        </p>
        <Link to="/apps" className="mt-6 rounded bg-gradient-to-r from-[#632EE3] to-[#9f62f2] px-6 py-3 font-semibold text-white">
          Browse Apps
        </Link>
      </section>
    );
  }

  const installed = justInstalled || isAppInstalled(app.id);

  const handleInstall = () => {
    installApp(app.id);
    setJustInstalled(true);
    toast.success(`${app.title} installed successfully`);
  };

  return (
    <section className="py-10 md:py-14">
      <div className="grid gap-8 rounded bg-white p-4 md:grid-cols-[350px_1fr] md:p-8">
        <img src={app.image} alt={app.title} className="h-[300px] w-full rounded object-cover md:h-[350px]" />
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">{app.title}</h1>
          <p className="mt-2 text-lg text-[#627382]">Developed by {app.companyName}</p>
          <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div>
              <p className="text-sm text-[#627382]">Rating</p>
              <p className="text-xl font-semibold">{app.ratingAvg}</p>
            </div>
            <div>
              <p className="text-sm text-[#627382]">Downloads</p>
              <p className="text-xl font-semibold">{formatCompact(app.downloads)}</p>
            </div>
            <div>
              <p className="text-sm text-[#627382]">Reviews</p>
              <p className="text-xl font-semibold">{formatCompact(app.reviews)}</p>
            </div>
            <div>
              <p className="text-sm text-[#627382]">Size</p>
              <p className="text-xl font-semibold">{app.size} MB</p>
            </div>
          </div>
          <button
            onClick={handleInstall}
            disabled={installed}
            className="mt-8 rounded bg-gradient-to-r from-[#632EE3] to-[#9f62f2] px-8 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      <div className="mt-10 rounded bg-white p-4 md:p-8">
        <h2 className="text-2xl font-bold">Ratings</h2>
        <div className="mt-6 h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={app.ratings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#632EE3" radius={[4, 4, 0, 0]} />
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
