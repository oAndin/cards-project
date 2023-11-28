import { useState } from "react";
import Input from "./Input/Index";

const Form = () => {

  const [newCategory, setNewCategory] = useState(false);

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <form action="" className="border-2 border-black flex flex-col gap-2 w-1/3 p-4  bg-grey-500">
          <div className="border-2 border-black flex flex-col">
            <label htmlFor="title">Title text</label>
            <input type="text" id="title" placeholder="Title" />
          </div>
          <div className="border-2 border-black flex flex-col">
            <label htmlFor="question">Question text</label>
            <input type="text" id="question" placeholder="Question" />
          </div>
          <div id="category?">
            {
              newCategory ?
                <div className="flex flex-col border-2 border-black">
                  <label htmlFor="newCategory">New category?</label>
                  <input type="text" id="newCategory" placeholder="New category" />
                </div>
                :
                <div className="flex flex-col border-2 border-black">
                  <label htmlFor="category">Category</label>
                  <select name="" id="category">
                    <option value="test">Test</option>
                  </select>
                </div>
            }
            <div className="flex">
              <input type="checkbox" name="" id="" onClick={() => setNewCategory(!newCategory)} />
              <p>New category?</p>
            </div>
            <div>
              <label htmlFor="answer">Answer</label>
              <textarea name="answer" id="answer" className="flex w-full" cols="30" rows="5"></textarea>
            </div>
          </div>
          <button onClick={() => console.log("created")}
            className="border-2 border-black">
            Create new card
          </button>
        </form>
        <form action="">
          <Input
            type="text"
            text="Title"
            name="name"
            placeholder="Title"
          />
        </form>
      </div>
    </>
  )
}

export default Form;