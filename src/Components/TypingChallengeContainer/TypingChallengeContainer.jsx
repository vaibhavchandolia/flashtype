import React from 'react'
import ChallengeDetailsCard from '../ChallengeDetailsCards/ChallengeDetailsCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
import './TypingChallengeContainer.css'

export default function TypingChallengeContainer({selectedParagraph, words, characters, wpm, 
  timeRemaining, timerStarted, testInfo, onInputChange}) {
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
        {/* The real challenge */}
        <div className='typewriter-container'>
          
            <TypingChallenge 
            timeRemaining = {timeRemaining} timerStarted = {timerStarted} 
            selectedParagraph = {selectedParagraph} testInfo ={testInfo}
            onInputChange={onInputChange}/>
        </div>
    </div>
  )
}
