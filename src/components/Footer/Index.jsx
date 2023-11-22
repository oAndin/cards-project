import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext/Index";

const Footer = () => {

  const { bgColor, textColor, borderColor } = useContext(ThemeContext);

  return (
    <>
      <div className={`flex items-center justify-between h-full w-full border-t-2 p-5 ${borderColor} ${bgColor} ${textColor} duration-500`}>
        <h1>Footer</h1>
      </div>
    </>
  );
};

export default Footer;