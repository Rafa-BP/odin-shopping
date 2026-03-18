import { useOutletContext } from "react-router-dom";
import type { product } from "../interfaces";

function Shop() { 
  const [products] = useOutletContext<product[]>();

  return (
    <div className='grid grid-cols-4 gap-6 h-lvh w-full bg-gray-700 p-6'>
      {
        products.map()
      }
    </div>
  );
}

export default Shop;