// eslint-disable-next-line react/prop-types
const SubmitButton = ({ text }) => {
  return (
    <>
      <div className="border-2 border-black flex items-center justify-center">
        <button>{text}</button>
      </div>
    </>
  )
}

export default SubmitButton;