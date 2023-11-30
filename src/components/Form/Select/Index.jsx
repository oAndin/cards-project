import { useEffect, useState } from "react";
import API from "../../../services";

// eslint-disable-next-line react/prop-types
const Select = ({ text, name, handleOnChange, value }) => {

  const [categories, setCategories] = useState([]);

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
    getCategories();
  }, []);

  return (
    <>
      <div className="border-2 border-black flex flex-col">
        <label htmlFor={name}>{text}:</label>
        <select
          required
          name={name}
          id={name}
          onChange={handleOnChange}
          value={value}>
          <option>Select an category</option>
          {
            categories.map(category => (
              <option value={category.name} key={category.id}>{category.name}</option>
            ))
          }
        </select>
      </div>
    </>
  )
}

export default Select;