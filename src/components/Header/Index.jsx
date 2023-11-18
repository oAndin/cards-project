import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext/Index";
import DarkModeButton from "../DarkModeButton/Index";

const Header = () => {

  const { bgColor, textColor } = useContext(ThemeContext);

  return (
    <>
      <div className={`flex items-center h-full w-full bg-${bgColor} text-${textColor} border-b-2 p-5`}>
        <span className={`w-14 h-14 flex justify-center items-center rounded-full border-2 border-${bgColor}`}>LOGO</span>
        <DarkModeButton>

        </DarkModeButton>
      </div>
    </>
  );
};

export default Header;