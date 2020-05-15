import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Members from './components/Members'
import AddMember from './components/AddMember'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Hannah',
      email: 'hannah28@gmail.com',
      role: 'front-end',
    },
    {
      id: 2,
      name: 'Brett',
      email: 'brettmadrid9@gmail.com',
      role: 'back-end',
    },
    {
      id: 3,
      name: 'Ashley',
      email: 'ashley@gmail.com',
      role: 'front-end',
    },
  ])

  const addMembers = newMember => {
    const newId = members[members.length - 1].id + 1
    newMember['id'] = newId
    setMembers([...members, newMember])
  }

  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/register' component={Register} />
        <Route path='/members'>
          <Members members={members} />
        </Route>
        <Route path='/addMember'>
          <AddMember addMembers={addMembers} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
