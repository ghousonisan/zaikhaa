import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
