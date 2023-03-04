import React from 'react'
import ChallengeDetailsCard from '../ChallengeDetailsCards/ChallengeDetailsCard'
import './TypingChallengeContainer.css'

export default function TypingChallengeContainer({words, characters, wpm}) {
  return (
    <div className="typing-challenge-container">
        {/* Details Section */}
        <div className="details-container">
            {/* Words typed */}
            <ChallengeDetailsCard cardName="Words" cardValue={words}/>
            {/* characters types */}
            <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
            {/* speed */}
            <ChallengeDetailsCard cardName="Speed" cardValue={wpm}/>
        </div>
        <div className='typewriter-container'>
            <p>This is the realest Challenge!</p>
        </div>
        {/* The real challenge */}
    </div>
  )
}
