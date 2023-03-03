import React from 'react'
import logo from './../../Assets/logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='nav-container'>
        <div className='nav-left'>
            <img className='flash-logo' src={logo} alt="logo" />
            <p className="flash-logo-text">FlashType</p>
        </div>
        <div className='nav-right'>
            <a 
                className='nav-link'
                target= "_blank"
                href='https://github.com/vaibhavchandolia'
                rel='noreferrer'
                >Built By</a>
        </div>
    </div>
  )
}
