import "../tailwind.css";

function Footer() {
  return (
    <footer className="w-full h-60 bg-black p-10">
        <div className="grid grid-cols-4 grid-rows-3">
            <h1 className="text-white">Testing</h1>
            <h1 className="text-white">Testing2</h1>
        </div>
        <hr className="bg-white h-1" />
        <div>
            <h1 className="text-white">tesssy</h1>
        </div>
    </footer>
  );
}

export default Footer;
