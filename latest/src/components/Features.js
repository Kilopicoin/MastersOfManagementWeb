import React from 'react'
import SliderAbout from './SliderAbout';
import '../css/FeaturesX.scss';
import '../css/GlitchEffect2.scss';


const About = () => {
    return (
        <section className="featuresX-section" id="features">
            <div className="featuresX-section__left">
                <h4 className="display-2">KEY FEATURES</h4>
                <h1 className="display-1 glitch-overlay" data-content="WAR IN GAME">
                    <span>WAR IN GAME</span>
                </h1>
                <h1 className="display-1 glitch-overlay" data-content="PEACE IN LIFE">
                    <span>PEACE IN LIFE</span>
                </h1>
                <hr className="line-separator"/>
                <div className="text-container">
                    <p className="about-text-info">
                    <span className="underline">Masters of Management</span> is a Massively Multiplayer Strategy game where 
                    the players are the managers of their realms which are placed on the planets. 
                    The planets have lifetimes of their own, from their birth to their death. 
                    Once a planet borns, humankind starts to grow on it. Then they bring the Realms and Kingdoms. 
                    In Masters of Management, players create their Realms on the Planets. 
                    Players manage their realms until the death of the planets. 
                    Every planet has a specific smart contract that is controlling the rules of the specific planet. 
                    Every time a planet dies, it leaves a Scoreboard behind and this scoreboard gets recorded on Harmony Blockchain. 
                    The main purpose of the game for the players, 
                    is to finalize the planets with a good score after having a unique fun with lots of strategical dynamics. 
                    Every time a Planet dies, <span className="underline">players earn LOP tokens</span> depending on their scores on that planet.
                    </p>
                </div>
            </div>
            <div className="featuresX-section__right">
                <SliderAbout/>
            </div>
        </section>
    )
}

export default About
