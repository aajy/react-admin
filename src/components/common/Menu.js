import { forwardRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Menu = forwardRef((props, ref) =>{
  return (
    <div id="gnb">
      <h1>
        <Link to='/'>LOGO</Link>
      </h1>

      <ul>
        <li>
          <NavLink to='/table' className={({ isActive }) => (isActive ? 'isActive': '')}>
            Table
          </NavLink>
        </li>
        <li>
          <NavLink to='/input ' className={({ isActive }) => (isActive ? 'isActive': '')}>
            Input
          </NavLink>
        </li>
      </ul>   
    </div>
  )
}) 

export default Menu
