import React, { useState, useContext } from 'react';
import { MouseContext } from "../context/mouse-context";
import Scroll from 'react-scroll';
import '../css/Header.scss';
import { Logo56x56 } from '../utils/Images';
import '../css/Navbar.scss';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleMenuScroll, setToggleMenuScroll] = useState(false);
    const [toggleSkewMenu, settoggleSkewMenu] = useState(false);
    const { cursorChangeHandler } = useContext(MouseContext);
    const ScrollLink = Scroll.Link;
    const handleToggleMenu = () =>{
        setToggleMenu(!toggleMenu);
        settoggleSkewMenu(!toggleSkewMenu);
    };


    

    document.addEventListener('scroll', ()=>{
        if (window.scrollY > 600) {
            setToggleMenuScroll(true);
        }else{
            setToggleMenuScroll(false);
        }
    });

    return (
        <div className="nav-container m-auto">
            <nav className="navbar">
                <ScrollLink to="main" className="logo">
                    <img src={Logo56x56} alt="Logo" className="logo"/>
                </ScrollLink>
                <div className={`menu-toggle ${toggleMenu ? 'is-active':''} 
                ${toggleMenuScroll ? 'scrolled':''} ${toggleSkewMenu ? 'active':''}`} 
                id="mobile-menu" onClick={handleToggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-menu ${toggleMenu ? 'active showMenu':''}`}>
                    
                    <li >
                        <ScrollLink  
                            to="main" 
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={500}
                        >Play</ScrollLink>
                    </li>
                    
                    <li>
                        <ScrollLink 
                            to="story" 
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={500}
                        >
                        Story</ScrollLink>
                    </li>
                    <li>
                    <a href="https://kilopi.net/mom/files/Whitepaper_Kilopi_MastersOfManagement.pdf" className="nav-links" target="_blank" rel="noopener noreferrer">
                    Whitepaper
                </a>
                    </li>
                    <li>
                        <ScrollLink 
                            to="features" 
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={500}
                        >
                        Features</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="roadmap" 
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={1000}
                            >
                            Roadmap</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="concept" 
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={1000}
                            >
                            Concept</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="quotes" 
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={1000}
                            >
                            D.A.O</ScrollLink>
                    </li>
                    <li>
                    <a href="https://kilopi.net/mom/documentation/index.html" className="nav-links" target="_blank" rel="noopener noreferrer">
                    Docs
                </a>
                    </li>
                    <li>
                        <ScrollLink 
                            to="newsletter" 
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={1000}
                            >
                            FAQ</ScrollLink>
                    </li>

                    
                </ul>

            

            </nav>
        </div>
    );   
}

export default Navbar;