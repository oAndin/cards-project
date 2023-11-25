// import useCards frm "../../hooks/useCards";
import { MdArrowBackIos } from "react-icons/md";
import { useEffect } from "react";
import { useState } from "react";
import API from "../../services";

const CardsPage = () => {

  // const { response: cardsResponse } = useCards();

  const [cards, setCards] = useState();

  const getCards = async () => {
    try {
      const response = await API.get('/cards');
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
      <div className="h-screen p-10 flex items-center justify-center">
        <MdArrowBackIos className="text-5xl hover:scale-125 duration-300 items-center" />
        {cards ? (
          cards.map(card => (
            <div key={card.id}
              className="border-2 border-black w-1/2 h-1/2 p-5 m-5">
              <h1>{card.title}</h1>
              <h3>{card.question}</h3>
              <h5>{card.answer}</h5>
            </div>
          ))
        ) : <h1>Create a new card</h1>}
        <MdArrowBackIos className="rotate-180 text-5xl hover:scale-125 duration-300 items-center" />
      </div>
    </>
  )
}

export default CardsPage;