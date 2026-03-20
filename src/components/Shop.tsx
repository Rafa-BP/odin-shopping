import { useOutletContext } from "react-router-dom";
import type { product } from "../interfaces";

type OutletContextType = [product[], product[], React.Dispatch<React.SetStateAction<product[]>>];

function Shop() { 
  const [products, cart, setCart] = useOutletContext<OutletContextType>();

  function HandleAddToCart(event: React.SubmitEvent<HTMLFormElement>): void {
    event.preventDefault();
    const exists = cart.find((item) => item.id === event.target.id);

    if (exists) {
      setCart(cart.map((item) => (item.id == exists.id) ? {...item} : item ));
    } else {
      setCart([...cart, products[event.target.id]])
    }
  };

  return (
    <div className='grid grid-cols-5 gap-8 h-vh w-full bg-gray-700 p-6'>
      {(Array.isArray(products)) 
      ? products.map((item: product) => 
      <div key={item.id} className="flex flex-col items-center gap-4 justify-between  bg-white rounded-md p-2">
        <h3 className="text-md">{item.title}</h3>
        <img className="size-20" src={item.image} alt={item.description} />
        <form id={item.id} method="post" onSubmit={HandleAddToCart} className="flex items-center gap-2 rounded-sm text-white bg-gray-500 p-4">
          <label htmlFor="quantity">How Many</label>
          <input type="number" id="quantity" name="quantity" className="w-12 border-solid-black"/>
          <input type="submit" className="bg-green-400 text-white rounded-sm p-2" value={"Add to Cart"} id={item.id.toString()}  />
        </form>
      </div>) 
      : <h1 className="text-white text-lg">Loading...</h1>}
    </div>
  );
}

export default Shop;