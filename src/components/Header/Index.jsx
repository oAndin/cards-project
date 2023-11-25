import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext/Index";
import DarkModeButton from "../DarkModeButton/Index";
import Navbar from "../Navbar/Index";
import { Link } from "react-router-dom";

const Header = () => {

  const { bgColor, textColor, borderColor } = useContext(ThemeContext);

  return (
    <>
      <div className={`flex items-center justify-between h-full w-full border-b-2 p-5 ${bgColor} ${textColor} duration-500`}>
        <div className="flex gap-2">
          <span id="logo" className={`w-14 h-14 flex justify-center items-center rounded-full border-2 ${borderColor} ${bgColor} ${textColor} duration-300 hover:text-purple-300 hover:bg-purple-500 hover:border-purple-300 cursor-pointer`}>
            <Link to="/">
              LOGO
            </Link>
          </span>
          <Navbar />
        </div>
        <DarkModeButton />
      </div >
    </>
  );
};

export default Header; 0