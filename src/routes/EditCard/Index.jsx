import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services";

const EditCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState()
  const [title, setTitle] = useState();

  const getCard = async (id) => {
    try {
      const response = await API.get(`cards/${id}`);
      const data = response.data;
      setCard(data)
        ;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCard(id);
  }, [id])

  console.log(card);

  return (
    <>
      <h1>
        {{ card } &&
          <div>
            Edit Card: {id}
            {title}
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