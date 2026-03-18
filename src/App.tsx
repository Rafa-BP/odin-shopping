import { useEffect, useState } from "react";
import "./tailwind.css";

import type { product } from "./interfaces";
import { Link, Outlet } from "react-router-dom";

function App() {

  const [products, setProducts] = useState<product[]>([]);
  // const [cart, setCart] = useState<product[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://fakestoreapi.com/products")

      if (response.status != 200) {
        console.error("Fetch failed.")
      };

      const data = await response.json();
      
      setProducts(data);
    };

    getData();
  }, []);

  return (
    <>
      <nav className="flex py-6 px-16 w-full items-center justify-between bg-gray-800 shadow-lg">
        <h1 className="text-4xl text-white">Fake Shop</h1>
        <div className="flex gap-4">
          <Link to={"home"} className="rounded-md bg-blue-500 text-white text-center p-2 w-24">Home</Link>
          <Link to={"shop"} className="rounded-md bg-blue-500 text-white text-center p-2 w-24">Shop</Link>
          <Link to={"cart"} className="rounded-md bg-blue-500 text-white text-center p-2 w-24">Cart</Link>
        </div>
      </nav>
      <Outlet context={[products]} />
      <Footer />
    </>
  );
}

function Footer() {
    return (
    <div className='grid grid-cols-4 gap-6 p-8 bg-black'>
      <h1 className="text-white text-lg">testing</h1>
    </div>
  );
}

export default App;