import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext/Index"

const DarkModeButton = () => {

  const { toggleTheme, bgColor, textColor, borderColor, darkMode } = useContext(ThemeContext);


  return (
    <>
      <div onClick={() => {
        toggleTheme
        console.log(textColor, bgColor, borderColor);
      }}
        className={`border-2 ${borderColor} p-1 rounded-full cursor-pointer flex`}>
        <span className={`w-11 h-5 p-1 flex rounded-full ${bgColor} ${borderColor} items-center`}>
          {/* <span className={`${textColor} ${borderColor} rounded-full w-3 h-3`}></span> */}
          {darkMode ? 'White Mode' : 'Dark Mode'}
        </span>
      </div>
    </>
  )
}

export default DarkModeButton;