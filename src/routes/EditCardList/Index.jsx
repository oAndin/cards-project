// import getCards from '../../hooks/useCards'

import { useEffect, useState } from "react";
import API from "../../services";
import { Link } from "react-router-dom";

const EditCardsList = () => {

  // const CardList = getCards();
  // console.log(CardList);

  // console.log(CardList);

  // const cards = CardList.map(c => (
  //   <h1 key={c.id}>{c.category}</h1>
  // ));

  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    try {
      const response = await API.get('category');
      const data = response.data;
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <div className="flex">
        {categories.map((c) =>
          <div
            className="border-2 border-black w-full"
            key={c.id}>
            <h1 key={c.id}>{c.category}</h1>
            <button className="border-2 border-black"><Link to={`/categories/${c.category}`} />{c.category}</button>
          </div>
        )}
      </div>
    </>
  )
}

export default EditCardsList;