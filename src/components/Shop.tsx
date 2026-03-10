import "../tailwind.css";

import type { product } from "../interfaces";

import React, { useState, useEffect } from "react";

function Shop() {

  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://fakestoreapi.com/products');
      if (response.status != 200) {
        console.log("error");
      }
      const data = await response.json();

      console.log(data);

      setProducts(data);
    }
  getData();

  }, []);

  function HandleAddCart(event) {
    console.log(event.target.parentElement.id);
  };

  return (
    <main className="grid grid-cols-5 gap-6 px-24 py-16 bg-gray-700">
      {
        products.map(
          (item: product) => {
            return (
            <div key={item.id} id={item.id.toString()} className="bg-white flex items-center flex-col rounded-lg gap-4 p-4">
              <h2 className="text-lg">{item.title}</h2>
              <img src={item.image} alt={item.description} className="size-20"/>
              <button className="rounded-sm bg-green-500 text-white" onClick={HandleAddCart}>Add to Cart</button>
            </div>
            )
          }
        )
      }
    </main>
  );
}

export default Shop;
