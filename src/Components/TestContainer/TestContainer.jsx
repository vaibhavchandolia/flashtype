import React from 'react'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'
import './TestContainer.css'

export default function TestContainer({ selectedParagraph, words, characters, wpm, 
  timeRemaining, timerStarted, testInfo, onInputChange, startAgain }) {


  return (
    <div className="test-container">{
      timeRemaining>0 ? (
        <div className="typing-challenge-cont">
            <TypingChallengeContainer 
            selectedParagraph = {selectedParagraph}
            timeRemaining = {timeRemaining}
            timerStarted = {timerStarted}
            words={words} 
            characters={characters} 
            wpm={wpm}
            testInfo={testInfo}
            onInputChange = {onInputChange}
            />
        </div>
          ) :(
            <div className="try-again-con">
            <TryAgain words={words} characters={characters} wpm={wpm} startAgain ={startAgain}/>
        </div>
          )
    }
    </div>
  )
}
