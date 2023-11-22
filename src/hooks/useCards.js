import axios from "axios";

const useCards = async () => {
  try {
    const response = await axios.get('http://localhost/5000/cards');
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default useCards;