import { useParams } from "react-router-dom";

const EditCard = () => {
  const { id } = useParams();
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