import { useOutletContext } from "react-router-dom";
import type { product } from "../interfaces";

type OutletContextType = [product[], product[], React.Dispatch<React.SetStateAction<product[]>>];

function Shop() { 
  const [products, cart, setCart] = useOutletContext<OutletContextType>();

  function HandleAddToCart(event: React.SubmitEvent<HTMLFormElement>): void {
    event.preventDefault();

    const quantity: number = (event.target.quantity.value > 0) ? parseInt(event.target.quantity.value) : 1;
    const exists = cart.find((item) => item.id == event.target.id);

    if (exists != undefined) {
      setCart(cart.map((item) => (item.id == event.target.id) ? {...item, quantity: item.quantity + quantity} : item ));
    } else {
      setCart([...cart, {...products[event.target.id - 1], id: event.target.id ,quantity: quantity}])
    }
  };
  
  return (
    <div className='grid grid-cols-6 gap-8 h-vh w-full bg-gray-700 p-6'>
      {(Array.isArray(products)) 
      ? products.map((item: product) => 
      <div key={item.id} className="flex flex-col items-center gap-1 justify-between  bg-white rounded-md p-2">
        <img className="size-50 p-2" src={item.image} alt={item.description} />
        <h3 className="text-md px-4 text-pretty">{item.title}</h3>
        <h5 className="text-md">${item.price}</h5>
        <form id={item.id} method="post" onSubmit={HandleAddToCart} className="flex items-center gap-2 rounded-sm text-white bg-gray-500 p-2">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" className="w-12 border-solid-black" min='1'/>
          <input type="submit" className="bg-green-400 text-white rounded-sm p-2 hover:cursor-pointer hover:bg-green-600" value={"Add to Cart"} id={item.id.toString()}  />
        </form>
      </div>) 
      : <h1 className="text-white text-lg">Loading...</h1>}
    </div>
  );
}

export default Shop;