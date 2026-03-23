import { Outlet, useNavigation } from "react-router";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const MainLayout = () => {
  const navigation = useNavigation();
  const routeLoading = navigation.state !== "idle";

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#001931] ">
      <Header />
      <main className="mx-auto w-full max-w-7xl">
        {routeLoading ? <LoadingSpinner text="Navigating..." /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
