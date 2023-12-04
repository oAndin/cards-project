import getCards from '../../hooks/useCards'

const EditCardsList = () => {

  const CardList = getCards();
  console.log(CardList);

  // console.log(CardList);

  // const cards = CardList.map(c => (
  //   <h1 key={c.id}>{c.category}</h1>
  // ));

  return (
    <>
      <h1>Edit Card List</h1>
      {/* {cards} */}
    </>
  )
}

export default EditCardsList;