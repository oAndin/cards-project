import { NavLink } from "react-router-dom"

const active = 'text-purple-500'

const Navbar = () => {
  return (
    <>
      <ul className="flex ml-2 text-lg gap-4 items-center">
        <li className={`duration-300 hover:text-purple-500 ${active}`}>
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/'>Home</NavLink>
        </li>
        <li className={`duration-300 hover:text-purple-500 ${active}`}>
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/cards'>Cards</NavLink>
        </li>
        <li className={`duration-300 hover:text-purple-500 ${active}`}>
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/new_cards'>New Card</NavLink>
        </li>
        {/* <li className="duration-300 hover:text-purple-500">
          <NavLink to='/edit_card'>Edit Card</NavLink>
        </li> */}
        <li className={`duration-300 hover:text-purple-500 ${active}`}>
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/edit_list'>Edit List</NavLink>
        </li>
      </ul>
    </>
  )
}

export default Navbar