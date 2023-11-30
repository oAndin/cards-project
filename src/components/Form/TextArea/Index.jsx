// eslint-disable-next-line react/prop-types
const TextArea = ({ text, placeholder, name, handleOnChange, value }) => {
  return (
    <>
      <div className="border-2 border-black flex flex-col">
        <label htmlFor={name}>{text}:</label>
        <textarea
          required
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={handleOnChange}
          value={value}></textarea>
      </div>
    </>
  )
}

export default TextArea;