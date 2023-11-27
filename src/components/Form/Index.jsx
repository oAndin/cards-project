const Form = () => {
  return (
    <>
      <form action="">
        <div className="border-2 border-black flex flex-col">
          <label htmlFor="title">Title text</label>
          <input type="text" id="title" placeholder="Title" />
        </div>
        <div className="border-2 border-black flex flex-col">
          <label htmlFor="question">Question text</label>
          <input type="text" id="question" placeholder=""/>
        </div>
      </form>
    </>
  )
}

export default Form;