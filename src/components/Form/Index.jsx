import { useState } from "react";
import Input from "./Input/Index";
import Select from "./Select/Index";
import SubmitButton from "./SubmitButton/Index";
import TextArea from "./TextArea/Index";

// eslint-disable-next-line react/prop-types
const Form = ({ btnText }) => {

  const [newCategory, setNewCategory] = useState(false);
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [answer, setAnswer] = useState('');
  // const [card, setCard] = useState({});

  // function createCard() {}
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <form action="">
          <Input
            type="text"
            text="Title"
            name="name"
            placeholder="Title"
            handleOnChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="text"
            text="Question"
            name="question"
            placeholder="Question"
            handleOnChange={(e) => setQuestion(e.target.value)}
          />
          {
            newCategory ?
              <Input
                type="text"
                text="new category"
                name="newCategory"
                placeholder="new category"
                handleOnChange={(e) => setCategory(e.target.value)}
              />
              :
              <Select
                name="category"
                text="category"
                handleOnChange={(e) => setCategory(e.target.value)}
              />
          }
          <div className="flex">
            <input type="checkbox" name="" id="" onClick={() => setNewCategory(!newCategory)} />
            <p>New category?</p>
          </div>
          <TextArea
            text="Answer"
            placeholder="Answer"
            name="answer"
            handleOnChange={(e) => setAnswer(e.target.value)} />
          <SubmitButton text={btnText}
          // onClick={() => createCard}
          />
        </form>
      </div>
    </>
  )
}

export default Form;