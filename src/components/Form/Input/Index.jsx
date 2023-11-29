
// eslint-disable-next-line react/prop-types
const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
  return (
    <>
      <div className="border-2 border-black flex flex-col">
        <label htmlFor={name}>{text}:</label>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleOnChange} />
      </div>
    </>
  )
}

export default Input