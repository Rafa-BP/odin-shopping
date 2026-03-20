import { useOutletContext } from "react-router-dom";
import type { product } from "../interfaces";

  type OutletContextType = [product[], product[], React.Dispatch<React.SetStateAction<product[]>>];

function Cart() {
  
  const [,cart] = useOutletContext<OutletContextType>();

  return (
    <div className="flex flex-col items-center justify-center gap-8 h-lvh w-full bg-gray-700 p-6">
      { cart.map(
        (item: product) => 
        <div key={item.id} className="bg-white rounded-sm p-2">
          <h1>{item.title}</h1>
          <h3>Quantity: {item.quantity}</h3>
          <h3>Price: {item.price}</h3>
        </div>)
      } 
      {
        (cart.length > 0)
        ? <button className="text-white rounded-sm p-2 bg-green-500">Checkout</button>
        : <h1 className="text-white text-lg">No Items in the Cart</h1>
      }
    </div>
  );
}

export default Cart;