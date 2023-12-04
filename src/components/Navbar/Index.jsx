import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
      <ul className="flex text-lg gap-2 items-center">
        <li className="duration-300 hover:text-purple-500">
          <Link to='/'>Home</Link>
        </li>
        <li className="duration-300 hover:text-purple-500">
          <Link to='/cards'>Cards</Link>
        </li>
        <li className="duration-300 hover:text-purple-500">
          <Link to='/new-cards'>New Card</Link>
        </li>
        <li className="duration-300 hover:text-purple-500">
          <Link to='/edit-card'>Edit Card</Link>
        </li>
        <li className="duration-300 hover:text-purple-500">
          <Link to='/edit-list'>Edit List</Link>
        </li>
      </ul>
    </>
  )
}

export default Navbar