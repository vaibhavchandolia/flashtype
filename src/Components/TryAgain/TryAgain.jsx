import React from 'react'
import './TryAgain.css'

export default function TryAgain({words, characters, wpm}) {
  return (
    <div className="try-again-container">
        <h1>Test result</h1>
        <div className="result-container">
            <p>
                <b>Characters:</b>{characters}
            </p>
            <p>
                <b>Words:</b>{words}
            </p>
            <p>
                <b>Speed:</b>{wpm}
            </p>
        </div>
        <div>
            <button className='end-button retry'>Re-try</button>
            <button 
                onClick={() => {
                    window.open("https://www.facebook.com/sharer/sharer.php?u=checkitout", 
                    "facebook-share-dailog", 
                    "width=800, height=600")
                }}
                className='end-button share-btn'>
                Share
            </button>
            <button 
                onClick={() => {
                    window.open("https://www.twitter.com/intent/tweet?text=checkitout", 
                    "Twitter", 
                    "width=800, height=600")
                }}
                className='end-button twt-btn'>
                Tweet
            </button>
        </div>
    </div>
  )
}
