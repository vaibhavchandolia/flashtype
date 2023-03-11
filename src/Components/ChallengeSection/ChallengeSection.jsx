import React from 'react'
import TestContainer from '../TestContainer/TestContainer'
import './ChallengeSection.css'

export default function ChallengeSection({ selectedParagraph, words, characters, wpm, 
  timeRemaining, timerStarted, testInfo, onInputChange, startAgain}) {
  return (
    <div className='challenge-section-container'>
        <h1 data-aos="fade-down" className="challenge-section-header">
            Take a speed test now !
            
        </h1>
        <TestContainer 
          selectedParagraph={selectedParagraph} 
          timerStarted={timerStarted} 
          timeRemaining={timeRemaining} 
          words={words} 
          characters={characters} 
          testInfo={testInfo} wpm={wpm}
          onInputChange = {onInputChange}
          startAgain= {startAgain}/>
    </div>
  )
}
