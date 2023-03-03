import React from 'react'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'
import './TestContainer.css'

export default function TestContainer({words, characters, wpm}) {
  return (
    <div className="test-container">
        <div className="typing-challenge-cont">
            <TypingChallengeContainer words={words} characters={characters} wpm={wpm}/>
        </div>
        {/* <div className="try-again-con">
            <TryAgain words={words} characters={characters} wpm={wpm}/>
        </div> */}
    </div>
  )
}
