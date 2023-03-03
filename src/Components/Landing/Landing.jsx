import React from 'react'
import './Landing.css'
import flash from './../../Assets/hero.png'
import Typewriter from 'typewriter-effect'


export default function Landing() {
  return (
    <div className='landing-container'>
        <div data-aos="fade-right" className='landing-left'>
            <h1 className='landing-header'>Can you type..</h1>
            <div className="typerwriter-container">
            <Typewriter
              options={{
                strings: ['Fast?', 'Correct?', 'Quick?'],
                autoStart: true,
                loop: true,
              }}
            />
            </div>
        </div>
        <div data-aos="fade-left" className='landing-right'>
            <img className='flash-img' src={flash} alt="flash"/>
        </div>
    </div>
  )
}
