import React from 'react'
import { Card, Button, CardTitle, CardText, CardDeck } from 'reactstrap'

function MemberCard({ member }) {
  return (
    <Card body>
      <CardTitle>{member.name}</CardTitle>
      <CardText>{member.email}</CardText>
      <CardText>{member.role}</CardText>
    </Card>
  )
}

export default MemberCard
