// import useCards frm "../../hooks/useCards";
import { MdArrowBackIos } from "react-icons/md";
import { useContext, useEffect } from "react";
import { useState } from "react";
import API from "../../services";
import { ThemeContext } from "../../context/ThemeContext/Index";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const CardsPage = () => {

  const { bgColor, secondBgColor, borderColor, secondaryTextColor } = useContext(ThemeContext);
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

  function removeCard(id) {
    try {
      API.delete(`cards/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      setCards(cards.filter((card) => card.id !== id))
      setPosition(0)
    } catch (error) {
      console.log(error);
    }
  }

  const carouselCards = cards.map(card => (
    <div key={card.id}
      className={`relative border-2 border-black h-full max-w-lg p-5 m-5 ${secondBgColor} ${borderColor} ${secondaryTextColor}`} >
      <BsThreeDotsVertical
        className={`absolute right-0 top-0`} />
      <FaRegTrashCan
        className={`cursor-pointer`}
        onClick={() => removeCard(card.id)} />
      <Link to={`/edit_card/${card.id}`}>
        <MdOutlineModeEdit
          className={`cursor-pointer`}
        />
      </Link>
      <div
        className={`border-2 border-black`}>
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
    </div >
  ));

  useEffect(() => {
    getCards();
  }, []);
  return (
    <>
      <div className={`h-screen p-10 flex items-center justify-center ${bgColor}`}>
        <div className="flex items-center justify-center">
          {
            position > 0 && (
              <MdArrowBackIos
                acess-key='U+02192'
                className={`text-5xl hover:scale-125 duration-300 items-center `}
                onClick={() => setPosition(position === 0 ? 0 : position - 1)} />
            )
          }
          {carouselCards[position]}
          {
            position < cards.length - 1 && (
              <MdArrowBackIos
                aria-keyshortcuts="ArrowRight"
                className="rotate-180 text-5xl hover:scale-125 duration-300 items-center"
                onClick={() => setPosition(position + 1 === carouselCards.length ? position : position + 1)} />
            )
          }

        </div>
      </div>
    </>
  )
}

export default CardsPage;