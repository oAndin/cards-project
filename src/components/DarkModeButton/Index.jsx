import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext/Index"

const DarkModeButton = () => {

  const { toggleTheme, darkMode } = useContext(ThemeContext);


  return (
    <>
      <div onClick={() => {
        toggleTheme
        console.log(darkMode);
      }}
        className="border-2 border-black p-1 rounded-full cursor-pointer flex">
        <span className="w-11 h-5 p-1 flex rounded-full bg-black items-center">
          <span
            className="bg-white rounded-full w-3 h-3"></span>
        </span>
      </div>
    </>
  )
}

export default DarkModeButton;