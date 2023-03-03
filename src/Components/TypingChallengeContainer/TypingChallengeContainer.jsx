import React from 'react'
import './TypingChallengeContainer.css'

export default function TypingChallengeContainer({words, characters, wpm}) {
  return (
    <div className="typing-challenge-container">
        {/* Details Section */}
        <div className="details-container">
            {/* Words typed */}
            <p>1</p>
            {/* characters types */}
            <p>2</p>
            {/* speed */}
            <p>3</p>
        </div>
        <div className='typewriter-container'>
            <p>This is the real Challenge!</p>
        </div>
        {/* The real challenge */}
    </div>
  )
}
