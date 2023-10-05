import { forwardRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Menu = forwardRef((props, ref) =>{
  return (
    <div id="gnb">
      <ul>
        <li>
          <Link to='/'>
            홈
          </Link>
        </li>
        <li>
          <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'isActive': '')}>
            대시보드
          </NavLink>
        </li>
        <li>
          <NavLink to='/notice ' className={({ isActive }) => (isActive ? 'isActive': '')}>
            공지사항
          </NavLink>
        </li>
      </ul>   
    </div>
  )
}) 

export default Menu
