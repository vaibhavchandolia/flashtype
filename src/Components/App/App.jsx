import React from 'react'
import Landing from '../Landing/Landing'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./App.css"
import ChallengeSection from '../ChallengeSection/ChallengeSection'

class App extends React.Component{
    render(){
        return (
            <div className='app'>
                {/* Navbar */}
                <Navbar />

                {/* Landing */}
                <Landing />

                {/* Chanllenge */}
                <ChallengeSection />

                {/* Footer */}
                <Footer />
            </div>
        )
    }
}

export default App