import React from 'react'
import '../css/Story.scss';
import '../css/GlitchEffect2.scss';


const About = () => {
    return (
        <section className="about-section" id="story">
            <div className="about-section__left">
                
                <div className="text-container">
                    <p className="about-text-info">
                    Before the final sustainable system beyond the universe, before the end of the life we know, 
                    there was a time range that the humans were evolving by discovering new technologies. 
                    Every new technological discovery brought humankind an option to choose.
                        <br/><br/> 
                        <span className="underline">Peace was harder to choose.</span> Many chose the war. But there were still some who were struggling hard and insisting on Peace.
                    </p>
                </div>
            </div>
            <div className="about-section__right">
                <h1 className="display-1 glitch-overlay" data-content="THE STORY">
                    <span>THE STORY</span>
                </h1>
                <h1 className="display-1 glitch-overlay" data-content="Tech and Human">
                    <span>Tech and Human</span>
                </h1>
                <h1 className="display-1 glitch-overlay" data-content="War or Peace">
                    <span>War or Peace</span>
                </h1>
                <hr className="line-separator"/>
            </div>
        </section>
    )
}

export default About
