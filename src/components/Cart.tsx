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
    <div className="flex flex-col items-center justify-center gap-8 min-h-lvh h-vh w-full bg-gray-700 p-6 w-50">
      <h1 className="text-white text-2xl">Your Cart</h1>
      { cart.map(
        (item: product) => 
        <div key={item.id} className="flex justify-around items-center bg-white rounded-sm p-2 gap-4 w-1/2">
          <img src={item.image} alt={item.description} className="size-40" />
          <div className="flex flex-col gap-2 w-1/3">
            <h1>{item.title}</h1>
            <h3 className="w-1/7">Quantity: {item.quantity}</h3>
            <div className="flex gap-2"> 
              <button id={item.id} className="bg-green-400 text-white rounded-sm size-8 text-lg hover:cursor-pointer hover:bg-green-600" value={1}  onClick={HandleProductQuantity}>+</button>
              <button id={item.id} className="bg-green-400 text-white rounded-sm size-8 text-lg hover:cursor-pointer hover:bg-green-600" value={-1} onClick={HandleProductQuantity}>-</button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3>Price: ${item.price}</h3>
            <h3>Total: ${(item.price * item.quantity).toFixed(2)}</h3>
          </div>
          <button id={item.id} onClick={HandleRemoveProduct} className="bg-red-400 text-white rounded-sm p-1 hover:cursor-pointer hover:bg-red-600">Remove</button>
        </div>)
      } 
      {
        (cart.length > 0)
        ? <button className="text-white rounded-sm p-2 bg-green-500 hover:cursor-pointer hover:bg-green-700">Checkout</button>
        : <h1 className="text-white text-2xl">No Items in the Cart</h1>
      }
    </div>
  );
}

export default Cart;