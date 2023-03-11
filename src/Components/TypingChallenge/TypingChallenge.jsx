import React from 'react'
import './TypingChallenge.css'
import TestLetter from '../TestLetter/TestLetter'

export default function TypingChallenge({timeRemaining, timerStarted, testInfo, onInputChange}) {
    console.log(testInfo)
  return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}` }</p>
                <p className="timer-info">
                    {!timerStarted && "Start typing to start the test"}
                    </p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea text-paragraph">
                        {/* {selectedParagraph} */}
                        {testInfo.map((individualLetter, index) => {
                            return <TestLetter 
                                key={index}
                                individualLetter={individualLetter}
                            />
                        })}
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea
                        onChange={(e) => onInputChange(e.target.value)}
                        className="textarea"
                        placeholder='start typing here'
                    ></textarea>
                </div>
            </div>
        </div>
  )
}
