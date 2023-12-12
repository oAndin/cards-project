import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services";

const EditCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState()
  useEffect((id) => {
    API.get(`/cards/${id}`)
    const response = response.data;
    setCard(response)
  }, [])

  console.log(card);

  return (
    <>
      <h1>
        Edit Card: {id}
        {/* Edit Card: {id} */}
      </h1>
    </>
  )
}

export default EditCard;