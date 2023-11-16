import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext/Index";

const Header = () => {

  const { bgColor, textColor, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className={`flex items-center h-full w-full bg-${bgColor} text-${textColor} border-b-2`}>
        <span className="w-14 h-14 flex justify-center items-center rounded-full border-2">LOGO</span>
        <button
          className={`
          border-2 border-black rounded p-1 flex justify-center items-center bg-${textColor} text-${bgColor}
          `}
          onClick={toggleTheme}>
          Dark Mode
        </button >
      </div>
    </>
  );
};

export default Header;