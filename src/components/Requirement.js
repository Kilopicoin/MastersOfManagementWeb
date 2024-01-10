import React from 'react'
import '../css/Requirements.scss';
import '../css/GlitchEffect2.scss';

const Requirement = () => {
    return (
        <section className="system-requirement-section" id="concept">
            <div className="titles">
                <h4 className="display-2">A True Decentralized Game</h4>
                <h1 className="display-1 glitch-overlay" data-content="The Concept">
                    <span>The Concept</span>
                </h1>
            </div>
            
        
            <div className="system-requirement-container">
                <div className="requirement-content cel-1">
                    <h4 className="system-name">JOY</h4>
                    <p className="system-info">
                    Masters of Management game commits that every update will contain enjoying and learning features. 
                    Enjoying is one of the key concepts of the game. 
                    The team is aware that the players should have the joy while playing and it is a must for the game.
                    </p>
                </div>
 
                <div className="requirement-content cel-3">
                    <h4 className="system-name">COMPETITION</h4>
                    <p className="system-info">
                    Masters of Management game commits that every update will contain new content for gentle competition. 
                    Competition is one of the key concepts of the game. 
                    The team is aware that the players should compete each other while playing and it is a must for the game.
                    </p>
                </div>

                <div className="requirement-content cel-5">
                    <h4 className="system-name">SUSTAINABILITY</h4>
                    <p className="system-info">
                    Masters of Management game commits that every update will be applied following the sustainability conditions. 
                    Sustainability is one of the key concepts of the game.
                     The team is aware that the game must be developed in a sustainable way for future updates.
                    </p>
                </div>
                
            </div>
        </section>
    )
}

export default Requirement
