import { useParams } from "react-router-dom";

const EditCard = (id) => {
  useParams(id);
  return (
    <>
      <h1>
        Edit Card: { }
        {/* Edit Card: {id} */}
      </h1>
    </>
  )
}

export default EditCard;