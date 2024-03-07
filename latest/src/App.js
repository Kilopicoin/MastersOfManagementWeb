import { useContext, useEffect } from "react";
import { MouseContext } from "./context/mouse-context";
import { BrowserRouter as Router } from 'react-router-dom';
import Aos from 'aos';
import Header from './components/Header';
import Features from './components/Features';
import Story from './components/Story';
import Roadmap from './components/Roadmap';
import Requirement from './components/Requirement';
import Quotes from './components/Quotes';
import NewsletterSection from './components/Newsletter';
import Footer from './components/Footer';
import './css/App.scss';

function App() {
  const { cursorChangeHandler } = useContext(MouseContext);

  useEffect(() =>{
      Aos.init({
          duration: 2000,
          easing: 'ease-in-out-back'
      });
  }, []);

  return (
    <>
      <div className="app" onClick={() => {
        cursorChangeHandler("expand")
        setTimeout(() =>{
          cursorChangeHandler("")
        }, 500)
      }}>
        <Router>
          <Header
            ata-aos="fade-left"
            data-aos-anchor="#trigger-right"/>
            <Story/>  
          <Features data-aos="fade-right"/>  
          <Roadmap/>
          <Requirement/>
          <Quotes/>
          <NewsletterSection/>
          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;
