import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext/Index";
import DarkModeButton from "../DarkModeButton/Index";

const Header = () => {

  const { bgColor, textColor, darkMode, borderColor } = useContext(ThemeContext);

  return (
    <>
      <div className={`flex items-center h-full w-full border-b-2 p-5 ${bgColor} ${textColor}`}>
        <span className={`w-14 h-14 flex justify-center items-center rounded-full border-2 ${borderColor}`}>LOGO</span>
        <DarkModeButton>

        </DarkModeButton>
      </div>
    </>
  );
};

export default Header;