import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services";
import { ThemeContext } from "../../context/ThemeContext/Index";

const EditCard = () => {
  const { bgColor, textColor } = useContext(ThemeContext)
  const { id } = useParams();
  const [card, setCard] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // const [title, setTitle] = useState(); // Case a variable is needed 

  const getCard = async (id) => {
    try {
      const response = await API.get(`cards/${id}`);
      const data = response.data;
      setCard(data);
    } catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getCard(id);
  }, [id])

  return (
    <>
      <div
        className={`h-screen p-10 flex items-center justify-center ${bgColor} ${textColor}`}>
        {!isLoading &&
          <div
            className={``}>
            {card.title}

          </div>}
      </div>
    </>
  )
}

export default EditCard;