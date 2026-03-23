import fakeclothes from "../assets/fakeclothes.jpg"

function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-lvh w-full bg-gray-700 p-6 gap-4'>
      <h1 className="text-white text-2xl">Welcome to the Fake Store!</h1>
      <img src={fakeclothes} alt="Clothing store" className="rounded-xl text-white"/>
    </div>
  );
}

export default Home;