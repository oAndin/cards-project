// import useCards from "../../hooks/useCards";
import { useEffect } from "react";
import { useState } from "react";
// import API from "../../services";
import axios from "axios";

const CardsPage = () => {

  // const { response: cardsResponse } = useCards();

  const [cards, setCards] = useState();

  const getCards = async () => {
    try {
      const response = await axios.get('http://localhost:5000/cards');
      const data = response.data;
      setCards(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <div className="h-screen">
        {cards && (
          cards.map(card => (
            <div key={card.id}>
              <h1>{card.title}</h1>
              <h3>{card.question}</h3>
              <h5>{card.answer}</h5>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default CardsPage;