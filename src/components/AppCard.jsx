import { Link } from "react-router";
import { formatCompact } from "../utility/logic";

const AppCard = ({ app }) => {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="rounded bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <img src={app.image} alt={app.title} className="h-44 w-full rounded object-cover" />
      <h3 className="mt-4 text-base font-medium text-[#001931] md:text-lg">{app.title}</h3>
      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="rounded bg-[#f1f5e8] px-2.5 py-1 text-sm font-medium text-[#00a067]">
          {formatCompact(app.downloads)}
        </span>
        <span className="rounded bg-[#fff0e1] px-2.5 py-1 text-sm font-medium text-[#ff8800]">
          {app.ratingAvg}
        </span>
      </div>
    </Link>
  );
};

export default AppCard;
