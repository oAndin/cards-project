import { useState } from "react";
import Input from "./Input/Index";
import Select from "./Select/Index";
import SubmitButton from "./SubmitButton/Index";
import TextArea from "./TextArea/Index";
import API from "../../services";

// eslint-disable-next-line react/prop-types
const Form = ({ btnText, handleOnSubmit }) => {

  const [newCategory, setNewCategory] = useState(false);
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [answer, setAnswer] = useState('');

  // function submit(e) {
  //   e.preventDefault();
  //   API.post('/cards', {
  //     title,
  //     category,
  //     question,
  //     answer,
  //     // newCategory ? post new category
  //     //   { newCategory ? 
  //     //   API.post('/category',{
  //     //     category
  //     //   })
  //     //   :
  //     //   category
  //     // }, 
  //   },
  //     {
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //     }
  //   )
  // }
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <form
          onSubmit={() => { handleOnSubmit }}>
          <Input
            type="text"
            text="Title"
            name="name"
            placeholder="Title"
            onBlur={title}
            // value={card.title ? card.title : ''}
            handleOnChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="text"
            text="Question"
            name="question"
            placeholder="Question"
            // value={}
            handleOnChange={(e) => setQuestion(e.target.value)}
          />
          {
            newCategory ?
              <Input
                type="text"
                text="new category"
                name="newCategory"
                placeholder="New category"
                // value={}
                handleOnChange={(e) => setCategory(e.target.value)}
              />
              :
              <Select
                name="category"
                text="Category"
                // value={}
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
            // value={}
            handleOnChange={(e) => setAnswer(e.target.value)} />
          <SubmitButton text={btnText} />
        </form>
      </div>
    </>
  )
}

export default Form;