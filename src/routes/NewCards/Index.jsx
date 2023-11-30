import Form from "../../components/Form/Index";

const NewCards = () => {

  const postCards = async (e) => {
    e.preventDefault();
  }

  return (
    <>
      <h1>New Cards</h1>
      <Form
        btnText="Create Card"
        handleSubmit={(e) => postCards(e)} />
    </>
  )
}

export default NewCards;