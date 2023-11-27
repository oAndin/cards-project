// import useCards frm "../../hooks/useCards";
import { MdArrowBackIos } from "react-icons/md";
import { useEffect } from "react";
import { useState } from "react";
import API from "../../services";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-cards';

const CardsPage = () => {

  const [cards, setCards] = useState([]);

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
      className="border-2 border-black w-1/4 h-1/2 p-5 m-5">
      <h1>{card.title}</h1>
      <h3>{card.question}</h3>
      <h5>{card.answer}</h5>
    </div>
  ));

  useEffect(() => {
    getCards();
  }, []);

  console.log(cards);
  return (
    <>
      <div className="h-screen p-10 flex items-center justify-center">
        {/* <MdArrowBackIos className="text-5xl hover:scale-125 duration-300 items-center" />
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
        <MdArrowBackIos className="rotate-180 text-5xl hover:scale-125 duration-300 items-center" /> */}
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