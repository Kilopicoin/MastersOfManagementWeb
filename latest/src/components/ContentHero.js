import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from './Button';
import '../css/ContentHero.scss';
import '../css/GlitchEffect2.scss';


const ContentHero = () => {
    const button_info = {
        text: 'PLAY NOW',
    }

    const containerStyle = {
        width: '80%',
      };


    useEffect(() =>{
        Aos.init();
    }, []);

    return (
        <div 
            data-aos="fade-up"
        > 
            <div className="hero-content">
                <h1 className="hero-content__title-1 glitch-overlay" data-content="MASTERS OF MANAGEMENT">
                    <span>
                    MASTERS OF MANAGEMENT
                    </span>
                </h1>
                {/* <h1 className="hero-content__title-1">
                    SURVIVE AT ALL COSTS
                </h1> */}
                <div style={containerStyle}>
                <h4 className="hero-content__title-2">A community driven strategy game that is being built via blockchain and web3 technologies where players can manage their realms in millions of possibilities</h4>
                </div>
                <a href="https://kilopi.net/mom/betax/index.html" target="_blank" rel="noopener noreferrer">
                    <Button {...button_info} />
                </a>
            </div>
        </div>
    )
}

export default ContentHero;
