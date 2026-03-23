import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center py-10 text-center">
      <h1 className="text-5xl font-bold text-[#001931]">Oops, page not found!</h1>
      <p className="mt-3 text-[#627382]">The page you are looking for is not available.</p>
      <Link to="/" className="mt-6 rounded bg-gradient-to-r from-[#632EE3] to-[#9f62f2] px-6 py-3 font-semibold text-white">
        Back to Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
