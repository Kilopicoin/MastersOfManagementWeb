import React, {useState} from 'react'
import { Newsletter } from '../utils/Images';
import Button from './Button';
import '../css/Newsltetter.scss';
import '../css/GlitchEffect2.scss';

const NewsletterSection = () => {
    const [inputValue, setInputValue] = useState('info@kilopi.net');
    
    const inputStyle = {
        textAlign: 'center', // Center the text horizontally
        lineHeight: '40px',   // Set the line height to match the input height for vertical centering
      };

      const orangeTextStyle = {
        color: 'orange',
        fontSize: 18,
      };

      const orangeTextStyleX = {
        color: 'orange',
        fontSize: 15,
      };

      const noMarginTopStyle = {
        marginTop: 0,
        marginBottom: 10,
        fontSize: 15,
      };

    function handleChange(e){
        setInputValue(e.target.value)
    }

    const button_info = {
        text: 'Send E-mail',
        price_text: '', 
        type: 'normal-button' 
    }
    return (
        <section className="newsletter-section" id="newsletter">
            
            <div className="newsletter-section__left">
                <img src={Newsletter} alt=""/>
            </div>
            <div className="newsletter-section__right">
                <h4 className="display-2">F.A.Q</h4>
                <h1 className="display-1 glitch-overlay" data-content="Please Ask">
                    <span>Please Ask</span>
                </h1>

                <p>
                    Every time you ask, we understand the project and the progress better. It helps us to develop better. So, please ask.
                </p>
                <p></p>
                <h4 className="display-2" style={orangeTextStyle}>What is Masters of Management</h4>
                <p style={noMarginTopStyle}>Being simple, masters of management is a web3-based strategy game that can be played on web browsers.</p>

                <h4 className="display-2" style={orangeTextStyle}>When can I play Masters of Management</h4>
                <p style={noMarginTopStyle}>Masters of Management is online! You can follow the PLAY link at the top of this page to start playing.</p>

                <h4 className="display-2" style={orangeTextStyle}>Which platforms will Masters of Management be available to play on</h4>
                <p style={noMarginTopStyle}>The game is available to play only on explorers on a laptop or desktop in the current Phase. Mobile support under Metamask will be added soon.</p>

                <h4 className="display-2" style={orangeTextStyle}>What is the role of the Kilopi [LOP] token in Masters of Management game</h4>
                <p style={noMarginTopStyle}>In these early phases of the game, 
                    LOP token is being airdropped to the players who finish the planets at top 10 of the leader board. 
                    Following the full release of the game, LOP tokens will have in game functionalities</p>

                <h4 className="display-2" style={orangeTextStyle}>Where can I get LOP tokens other than the in game airdrops</h4>
                <p style={noMarginTopStyle}>You can follow the exchanges link on the official webpage of the Kilopi project. &nbsp;
                <a href="https://kilopi.net/exchanges/" style={orangeTextStyleX} target="_blank" rel="noopener noreferrer">
                    Kilopi Exchanges
                </a>
                </p>

                <h4 className="display-2" style={orangeTextStyle}>What else can I do with LOP token</h4>
                <p style={noMarginTopStyle}>You can review the main website of LOP token and learn what else can be done with LOP tokens. &nbsp;
                <a href="https://kilopi.net/" style={orangeTextStyleX} target="_blank" rel="noopener noreferrer">
                    Official Kilopi Website
                </a>
                </p>

                <h4 className="display-2" style={orangeTextStyle}>Will the game resume being developed</h4>
                <p style={noMarginTopStyle}>Yes, the game will resume developing non-stop according to the D.A.O decisions</p>

                <h4 className="display-2" style={orangeTextStyle}>What is DAO and what is it used for</h4>
                <p style={noMarginTopStyle}>D.A.O represents Decentralized autonomous organization. Kilopi DAO consists of many elements. Telegram group, Youtube Channel, Twitter and 
                    Kilopi project's official D.A.O dApp, all of them can be considered as parts of D.A.O. Social links can be found at the bottom of the page and
                    D.A.O dApp link can be found here: &nbsp;
                <a href="https://kilopi.net/dao/" style={orangeTextStyleX} target="_blank" rel="noopener noreferrer">
                    Kilopi D.A.O dApp
                </a>
                </p>

                <h4 className="display-2" style={orangeTextStyle}>I have another question</h4>
                <p style={noMarginTopStyle}>You could see the official e-mail address below and social links at the bottom of the page. 
                    Click whichever you prefer and send a message to us. We will reply back as soon as possible.</p>
                

                <div className="input-group">
                    <div className="input-email">
                        <input type="email" onChange={handleChange} value={inputValue} id="email" placeholder="Your email address" style={inputStyle} readOnly/>

                    </div>
                    <a href="mailto:info@kilopi.net" target="_blank" rel="noopener noreferrer">
                    <Button {...button_info}/>
                </a>

                    
                </div>
            </div>
        </section>
    )
}

export default NewsletterSection
