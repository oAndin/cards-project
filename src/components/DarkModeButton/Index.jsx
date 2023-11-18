import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext/Index"

const DarkModeButton = () => {

  const { toggleTheme, bgColor, textColor } = useContext(ThemeContext);


  return (
    <>
      <div onClick={() => {
        toggleTheme
        console.log(textColor, bgColor);
      }}
        className={`border-2 border-${textColor} p-1 rounded-full cursor-pointer flex`}>
        <span className={`w-11 h-5 p-1 flex rounded-full bg-${bgColor} items-center`}>
          <span
            className={`bg-${textColor} rounded-full w-3 h-3`}></span>
        </span>
      </div>
    </>
  )
}

export default DarkModeButton;