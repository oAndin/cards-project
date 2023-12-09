import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext/Index";

const Home = () => {
  const { bgColor, textColor } = useContext(ThemeContext);
  return (
    <>
      <div className={`w-full h-screen ${bgColor} ${textColor} duration-500`}>
        <h1>Home</h1>
        <h1>Hello World!</h1>
      </div>
    </>
  )
}

export default Home;