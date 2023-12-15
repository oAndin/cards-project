import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services";

const EditCard = () => {
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

  console.log(card);

  return (
    <>
      <h1>
        {!isLoading &&
          <div>
            Edit Card: {id}
            {card.title}
            {/* {card.title ?
              <h1>Title: { }</h1>
              :
              'Loading'
            } */}
            {/* <h1>Title: { }</h1> */}
            {/* <h1>Title: {card.title}</h1> */}
          </div>}

      </h1>
    </>
  )
}

export default EditCard;