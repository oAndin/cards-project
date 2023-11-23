import { useEffect, useState } from "react";

const CardsPage = () => {


  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http:localhost/5000/cards')
      .then((response) => response  .json())
      .then((data) => {
        setCards(data)
        console.log(data)
      })
      .catch((error) => console.log(error))
  }, [])

  // useEffect(() => {
  //   axios.get('http://localhost/5000/cards')
  //     .then(setCards(response))
  //     .catch((error) => console.log(error))
  // }, []);

  // const getCards = useCards();
  // axios({
  //   method: 'GET',
  //   url: "http://localhost/5000/cards",
  //   responseType: "json",
  // })
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //     setCards(response);
  //   })


  return (
    <>
      <div>
        {cards && (
          cards.map(card => (
            <div key={card.id}>
              <h1>{card.title}</h1>
              <h3>{card.question}</h3>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default CardsPage;