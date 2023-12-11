import { useContext, useEffect, useState } from 'react';
import API from '../../services';
import { ThemeContext } from '../../context/ThemeContext/Index';

const NewCard = () => {

  const { bgColor, secondBgColor } = useContext(ThemeContext)

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState(false);
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [answer, setAnswer] = useState('');

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


  async function submitWithNewCategory() {
    await API.post('category', {
      category,
    })
    await API.post('cards', {
      title,
      question,
      category,
      answer
    })
  }
  async function submitWithoutNewCategory() {
    await API.post('cards', {
      title,
      question,
      category,
      answer
    })
  }


  const submitNewCard = () => {
    newCategory ?
      submitWithNewCategory()
      :
      submitWithoutNewCategory()
  }

  return (
    <>
      <div className={`w-full h-screen flex items-center justify-center ${bgColor}`}>
        <form
          className={`${secondBgColor} p-3 rounded-lg shadow-md space-y-2`}
          onSubmit={() => { submitNewCard }}
          onChange={() => console.log(title, question, category, answer)}>
          <div className=" flex flex-col">
            <label htmlFor='title'>Title:</label>
            <input
              required
              id='title'
              type='text'
              name='title'
              placeholder='Title'
              onChange={(e) => setTitle(e.target.value)}
              className={`p-1`} />
          </div>
          <div className=" flex flex-col">
            <label htmlFor='question'>Question:</label>
            <input
              required
              id='question'
              type='text'
              name='question'
              placeholder='Question'
              onChange={(e) => setQuestion(e.target.value)}
              className={`p-1`} />
          </div>
          <div>


            {
              newCategory ?
                <div className=" flex flex-col">
                  <label htmlFor='category'>Category:</label>
                  <input
                    required
                    id='category'
                    type='text'
                    name='category'
                    placeholder='New category'
                    onChange={(e) => setCategory(e.target.value)}
                    className={`p-1`} />
                </div>
                :
                <div className=" flex flex-col">
                  <label htmlFor='category'>Category:</label>
                  <select
                    className={``}
                    required
                    name='category'
                    id='category'
                    onChange={(e) => { setCategory(e.target.value) }}>
                    <option>Select an category</option>
                    {
                      categories.map(category => (
                        <option value={category.category} key={category.id}>{category.category}</option>
                      ))
                    }
                  </select>
                </div>
            }
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                onClick={() => setNewCategory(!newCategory)}
                className={`p-1`} />
              <p>New category?</p>
            </div>
          </div>
          <div className=" flex flex-col">
            <label htmlFor='Answer'>Answer:</label>
            <textarea
              required
              name='Answer'
              id='Answer'
              placeholder='Answer'
              onChange={(e) => { setAnswer(e.target.value) }}
              className={`p-1`}>
            </textarea>
          </div>
          <div className=" flex items-center justify-center">
            <button onClick={submitNewCard}
              className={`border-2 border-black`}>
              Create new card
            </button>
          </div>
        </form >
      </div >
    </>
  )
}

export default NewCard;
