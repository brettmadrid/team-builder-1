import React, { useState } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Members from './components/Members'
import './App.css'

function App() {
  const [member, setMember] = useState([
    {
      name: 'Hannah',
      email: 'hannah28@gmail.com',
      role: 'front-end',
    },
  ])

  return (
    <div className='App'>
      <div className='nav-container'>
        <ul className='navbar'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/members'>Team</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/members' component={Members} />
      </Switch>
    </div>
  )
}

export default App
