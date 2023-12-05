// import { useEffect, useState } from "react";
// import API from "../services";

// const GetCards = () => {

//   const [cards, setCards] = useState([]);

//   async function getCards() {
//     try {
//       const response = await API.get('cards');
//       console.log(response.data);
//       // const data = response.data;
//       setCards(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     getCards();
//   }, [])
// }

// export default GetCards;

// const getCards = () => {
//   const [cards, setCards] = useState([]);

//   const getCards = async () => {
//     try {
//       const response = await API.get('cards')
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//     // finally {
//     // }
//   }

//   useEffect(() => {
//     getCards();
//   }, [])
// }
// export default getCards;