import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <ul>
    <li>
      <NavLink exact to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/signup">
        Signup
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/donate">
        Donate
      </NavLink>
    </li>
  </ul>
)

export default Nav