import { useContext, useEffect, useState } from 'react';
import API from '../../services';
import { ThemeContext } from '../../context/ThemeContext/Index';

const NewCard = () => {

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState(false);
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [answer, setAnswer] = useState('');

  const { bgColor } = useContext(ThemeContext);

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
      <div
        className={`flex w-full h-screen justify-center items-center ${bgColor}`}>
        <div
          className={`${bgColor} w-1/2 border-2 border-white p-3`}>
          <form
            className={`flex flex-col`}
            onSubmit={() => { submitNewCard }}>
            <div className="border-2 border-black flex flex-col w-full">
              <label htmlFor='title'>Title:</label>
              <input
                required
                id='title'
                type='text'
                name='title'
                placeholder='Title'
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="border-2 border-black flex flex-col w-full">
              <label htmlFor='question'>Question:</label>
              <input
                required
                id='question'
                type='text'
                name='question'
                placeholder='Question'
                onChange={(e) => setQuestion(e.target.value)} />
            </div>
            {
              newCategory ?
                <div className="border-2 border-black flex flex-col">
                  <label htmlFor='category'>category:</label>
                  <input
                    required
                    id='category'
                    type='text'
                    name='category'
                    placeholder='New category'
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                :
                <div className="border-2 border-black flex flex-col">
                  <label htmlFor='category'>Category:</label>
                  <select
                    required
                    name='category'
                    id='category'
                    onChange={(e) => { setCategory(e.target.value) }}>
                    <option>Select an category</option>
                    {
                      categories.map(category => (
                        <option value={category.name} key={category.id}>{category.name}</option>
                      ))
                    }
                  </select>
                </div>
            }
            <div className="flex">
              <input type="checkbox" name="" id="" onClick={() => setNewCategory(!newCategory)} />
              <p>New category?</p>
            </div>
            <div className="border-2 border-black flex flex-col">
              <label htmlFor='Answer'>Answer:</label>
              <textarea
                required
                name='Answer'
                id='Answer'
                placeholder='Answer'
                onChange={(e) => { setAnswer(e.target.value) }}>
              </textarea>
            </div>
            <div className="border-2 border-black flex items-center justify-center">
              <button onClick={submitNewCard}>Create new card</button>
            </div>
          </form >
        </div >
      </div>
    </>
  )
}

export default NewCard;