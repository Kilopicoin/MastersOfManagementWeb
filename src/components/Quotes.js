import React from 'react'
import Button from './Button';
import CardTestimonial from './CardTestimonial';
import { Testimonial_1, Testimonial_2, Testimonial_3 } from '../utils/Images';
import '../css/Quotes.scss';
import '../css/GlitchEffect2.scss';

const Quotes = () => {
    const button_info = {
        text: 'Official Kilopi Project Website'
    }


    return (
        <section className="quotes-section" id="quotes">
            <div className="quotes-section__left">
                <h4 className="display-2">What people think?</h4>
                
                <h1 className="display-1 glitch-overlay" data-content="A TRUE D.A.O">
                    <span>A TRUE D.A.O</span>
                </h1>
                <div className="text">
                    <p>
                    Masters of Management web3 strategy game is being developed in an open way. 
                    Players, community and the team can contribute to the development of the game by their ideas and feedback. 
                    The ideas and feedback are being collected from many channels. 
                    These are the game-itself, DAO app and the social media channels of the project. 
                    In the game, there is a feedback option, 
                    the social media channels can be found at the bottom of this page and 
                    the DAO application can be found on the offical webpage of Kilopi project
                    </p>
                </div>
                <a href="https://kilopi.net" target="_blank" rel="noopener noreferrer">
                    <Button {...button_info} />
                </a>
            </div>
            <div className="quotes-section__right">
                <CardTestimonial testimonial={{
                    img_src: Testimonial_1,
                    img_name: 'evan img',
                    name: 'Rico',
                    code_name: 'Crypto Investor, Gamer, Runner',
                    content: 'A true strategy, management game which forces you to think carefully',
                    date: '',
                    lilink: 'https://twitter.com/Rico_lollipop'
                }}/>
                <CardTestimonial testimonial={{
                    img_src: Testimonial_2,
                    img_name: 'jada img',
                    name: 'BAYRAM',
                    code_name: 'Crypto Investor, Community Manager, Teacher',
                    content: 'A promising web3 strategy game to be one of the top crypto games',
                    date: '',
                    lilink: 'https://twitter.com/Tobefamous07'
                }}/>
                <CardTestimonial testimonial={{
                    img_src: Testimonial_3,
                    img_name: 'aaron img',
                    name: 'KriptoLan',
                    code_name: 'Crypto Investor, Content Creator, Fabric Specialist',
                    content: 'A unique successful strategy game which has one of the best tokenomics in the crypto industry',
                    date: '',
                    lilink: 'https://twitter.com/unalozturk55'
                }}/>
                
            </div>
        </section>
    )
}

export default Quotes
