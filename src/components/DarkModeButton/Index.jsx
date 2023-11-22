import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext/Index"
import { IoSunny } from "react-icons/io5";

import { IoMoonSharp } from "react-icons/io5";


const DarkModeButton = () => {

  const { toggleTheme, bgColor, darkMode, borderColor } = useContext(ThemeContext);
  const position = darkMode ? 'left-0' : 'left-full -translate-x-full';
  const darkBgColor = darkMode ? 'bg-gray-200' : 'bg-gray-300';
  // ${borderColor}
  return (
    <>
      <div className="flex items-center gap-1">
        <IoMoonSharp />
        <div onClick={() => {
          toggleTheme();
        }}
          className={`border-2 p-1 rounded-full cursor-pointer flex ${borderColor} ${darkBgColor} `}>
          <span className={`w-14 h-5 flex rounded-full items-center relative`}>
            <span
              className={`rounded-full absolute ${position} w-5 h-5 ${bgColor} duration-500`}></span>
          </span>
        </div>
        <IoSunny />
      </div>
    </>
  )
}

export default DarkModeButton;