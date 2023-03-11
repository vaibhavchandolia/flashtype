import React from 'react'
import "./TestLetter.css"


export default function TestLetter({individualLetter}) {
    const {status} = individualLetter;

    const statusClass = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted"
    }[status]

    return (
    <span className={`test-letter ${statusClass}`}>{individualLetter.testLetter}</span>
  )
}
