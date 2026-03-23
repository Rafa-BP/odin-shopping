import { useOutletContext } from "react-router-dom";
import type { product } from "../interfaces";
import React from "react";

  type OutletContextType = [product[], product[], React.Dispatch<React.SetStateAction<product[]>>];

function Cart() {
  
  const [,cart, setCart] = useOutletContext<OutletContextType>();

  function HandleRemoveProduct(event: React.MouseEvent<HTMLButtonElement>) {
    setCart(cart.filter((item) => item.id != event.target.id));
  }

  function HandleProductQuantity(event: React.MouseEvent<HTMLButtonElement>): void {
    const item = cart.find((item) => item.id == event.target.id)

    if (item?.quantity == 1 && event.target.value == -1) {
      setCart(cart.filter((item) => item.id != event.target.id));
    } else {
      setCart(cart.map((item) => (item.id == event.target.id) 
      ? {...item, quantity: item.quantity + parseInt(event.target.value)}
      : item ));      
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 h-lvh w-full bg-gray-700 p-6 w-50">
      { cart.map(
        (item: product) => 
        <div key={item.id} className="bg-white rounded-sm p-2 gap-4">
          <h1>{item.title}</h1>
          <div className="flex gap-4">
            <h3>Quantity: {item.quantity}</h3>
            <button id={item.id} className="bg-green-400 text-white rounded-sm p-2 size-8" value={1}  onClick={HandleProductQuantity}>+</button>
            <button id={item.id} className="bg-green-400 text-white rounded-sm p-2 size-8" value={-1} onClick={HandleProductQuantity}>-</button>
          </div>
          <h3>Price: {item.price}</h3>
          <h3>Total: {item.price * item.quantity}</h3>
          <button id={item.id} onClick={HandleRemoveProduct} className="bg-red-400 text-white rounded-sm p-2">Remove</button>
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