import React from 'react'
import Header from '../components/home-sections/Header'
import Main from '../components/home-sections/Main'
import {Wave1} from "../images/imageList"

function Home() {
    return (
        <div className="home">
            <Header/>
            <Main/>

            <div className="wave-1">
                <img src={Wave1} alt="wave1"></img>
            </div>
            <section id="features" className="features-container">

            </section>
            <div className="wave-2">
                <img src={Wave1} alt="wave2"></img>
            </div>
        </div>
    )
}

export default Home
