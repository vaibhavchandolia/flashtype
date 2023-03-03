import React from 'react'
import './ChallengeDetailsCard.css'

export default function ChallengeDetailsCard({cardName, cardValue}) {
  return (
    <div className="card-container">
        <div className="card-name">{cardName}</div>
        <div className="card-value">{cardValue}</div>
    </div>
  )
}
