import { Link } from "react-router-dom";
import "../tailwind.css";

interface Props {
  text: string,
  link: string
}

function NavButton(props: Props) {
  return (
    <Link
      to={props.link}
      className="text-lg text-white bg-blue-500 p-2 px-8 rounded-md cursor-pointer transition duration-300 hover:bg-blue-600"
    >
      {props.text}
    </Link>
  );
}

export default NavButton;
