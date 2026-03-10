import "./tailwind.css";
import { Outlet } from "react-router";

import NavButton from "./components/NavButton";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <nav className="flex py-6 px-16 w-full items-center justify-between bg-gray-800 shadow-lg">
        <h1 className="text-4xl text-white">Fake Shop</h1>
        <div className="flex gap-4">
          <NavButton text="Home" link="home" />
          <NavButton text="Shop" link="shop" />
          <NavButton text="Cart" link="cart" />
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
