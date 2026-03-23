import { Link } from "react-router";
import error404 from "../assets/error-404.png";

const NotFoundPage = () => {
  return (
    <section className="flex min-h-[calc(100vh-270px)] flex-col items-center justify-center px-4 py-16 text-center">
      <img
        src={error404}
        alt="404 illustration"
        className="w-full max-w-[320px] object-contain md:max-w-125"
      />
      <h1 className="mt-6 text-4xl font-semibold tracking-[-0.02em] text-[#001931] md:text-6xl">
        Oops, page not found!
      </h1>
      <p className="mt-2 text-base text-[#627382] md:text-[20px]">
        The page you are looking for is not available.
      </p>
      <Link
        to="/"
        className="mt-6 rounded bg-linear-to-r from-[#632EE3] to-[#9f62f2] px-8 py-3 text-sm font-semibold text-white"
      >
        Go Back!
      </Link>
    </section>
  );
};

export default NotFoundPage;
