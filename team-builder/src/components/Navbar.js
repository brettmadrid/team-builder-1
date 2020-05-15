import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <ul className='navbar'>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/register'>Register</Link>
    </li>
    <li>
      <Link to='/members'>Team Members</Link>
    </li>
    <li>
      <Link to='/addMember'>Add Team Member</Link>
    </li>
  </ul>
)

export default Navigation
