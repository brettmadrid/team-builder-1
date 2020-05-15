import React from 'react'
import MemberCard from './MemberCard'

const Members = ({ members }) => {
  return (
    <div className='members-container'>
      {members.map(member => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  )
}

export default Members
