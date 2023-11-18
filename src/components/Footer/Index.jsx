import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext/Index";

const Footer = () => {

  const { bgColor, textColor } = useContext(ThemeContext);

  return (
    <>
      <div className={`bg-${bgColor} text-${textColor}`}>
        <h1>Footer</h1>
      </div>
    </>
  );
};

export default Footer;