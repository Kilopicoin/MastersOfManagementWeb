import React from 'react'
import '../css/Features.scss';
import '../css/GlitchEffect2.scss';

const Features = () => {

    const orangeTextStyle = {
        color: 'orange',
        fontWeight: 'bold', // Optionally, make the text bold
      }


    return (
        <section className="features-section" id="roadmap">
            <div className="features-section__content-margin-right"></div>
            <div className="features-section__content">
                <h4 className="display-2">Time, is an</h4>
                <h1 className="display-1 glitch-overlay" data-content="Illusion">
                    <span>Illusion</span>
                </h1>

                <div className="features-accordion">
                    <div className="item-1">
                        <div className="features-accordion-title">
                            <button className="option option-1 activeted"></button>
                            <h2>2022</h2>
                        </div>
                        <div className="features-accordion-content">
                            <p>
                            In 2022, we have developed the idea, researched to decide which blockchain to integrate and develop, created the infrastructure and
                            released the Core Alpha 1 version of the game.
                            </p>
                        </div>
                    </div>
                    <div className="item-2">
                        <div className="features-accordion-title">
                            <span className="option option-2"></span>
                            <h2>2023</h2>
                        </div>
                        <div className="features-accordion-content">
                            <p>
                            In 2023, we have released 5 more Alpha versions of the game, tested together with the organic community around 200 people. Following the feedback,
                            new ideas and new interface, we have released the first Beta version of the game. This legacy can be reviewed in here: &nbsp;
                            <a href="https://kilopi.net/mom/play.html" style={orangeTextStyle} target="_blank" rel="noopener noreferrer">
                     Legacy / 2023 / Alpha Versions of Masters of Management
                </a>
                            </p>
                        </div>
                    </div>
                    <div className="item-3">
                        <div className="features-accordion-title">
                            <span className="option option-3"></span>
                            <h2>2024</h2>
                        </div>
                        <div className="features-accordion-content">
                            <p>
                            In 2024, we will release 3 more Beta versions of the game and full version of the game.
                            </p>
                        </div>
                    </div>
                    <div className="item-4">
                        <div className="features-accordion-title">
                            <span className="option option-4"></span>
                            <h2>2025</h2>
                        </div>
                        <div className="features-accordion-content">
                            <p>
                            In 2025 and later, we will continue developing the game to expand versions with new ideas and technological infrastructure.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features
