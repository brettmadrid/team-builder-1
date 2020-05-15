import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './AddMember.css'

const AddMember = props => {
  const history = useHistory()
  const { addMembers } = props
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  })

  const handleSubmit = e => {
    e.preventDefault()
    addMembers(formData)
    history.push('/members')
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
        <h1>Enter New Team Member</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className='name'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              placeholder='name'
              name='name'
              onChange={handleChange}
            />
          </div>
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='email'
              name='email'
              onChange={handleChange}
            />
          </div>
          <div className='role'>
            <label htmlFor='role'>Role</label>
            <select type='text' name='role' onChange={handleChange}>
              <option />
              <option>Frontend</option>
              <option>Backend</option>
            </select>
          </div>
          <div className='createAccount'>
            <button type='submit'>Add Member</button>
            <small></small>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddMember
