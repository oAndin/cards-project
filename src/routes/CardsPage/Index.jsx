// import useCards frm "../../hooks/useCards";
import { MdArrowBackIos } from "react-icons/md";
import { useEffect } from "react";
import { useState } from "react";
import API from "../../services";

const CardsPage = () => {

  const [cards, setCards] = useState([]);
  const [showAnswer, setShowerAnswer] = useState(false);
  const [position, setPosition] = useState(0);

  const getCards = async () => {
    try {
      const response = await API.get('cards');
      const data = response.data;
      setCards(data);
    } catch (error) {
      console.log(error);
    }
  }

  const carouselCards = cards.map(card => (
    <div key={card.id}
      className="border-2 border-black p-5 m-5">
      <h1>{card.title}</h1>
      <h3>{card.question}</h3>
      <button
        className="border-2 border-black"
        onClick={() => setShowerAnswer(!showAnswer)}>
        {showAnswer ? 'Hide answer' : 'Show answer'}
      </button>
      {
        showAnswer ? <h5>{card.answer}</h5> : ''
      }
    </div>
  ));

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <div className="h-screen p-10 flex items-center justify-center">
        <div className="flex items-center justify-center">
          <MdArrowBackIos className="text-5xl hover:scale-125 duration-300 items-center"
            onClick={() => setPosition(position === 0 ? 0 : position - 1)} />
          {carouselCards[position]}
          <MdArrowBackIos className="rotate-180 text-5xl hover:scale-125 duration-300 items-center"
            onClick={() => setPosition(position + 1 === carouselCards.length ? position : position + 1)} />
        </div>
        {/* 
        {cards ? (
          cards.map(card => (
            <div key={card.id}
              className="border-2 border-black w-1/4 h-1/2 p-5 m-5">
              <h1>{card.title}</h1>
              <h3>{card.question}</h3>
              <h5>{card.answer}</h5>
            </div>
          ))
        ) : <h1>Create a new card</h1>}
         */}
        {/* <Swiper
          effect={'cards'}
          grabCursor={true}>
          <SwiperSlide>{carouselCards[0]}</SwiperSlide>
          <SwiperSlide>{carouselCards[1]}</SwiperSlide>
        </Swiper> */}
      </div>
    </>
  )
}

export default CardsPage;