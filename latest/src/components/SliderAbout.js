import React, { useContext, useRef, useEffect, useState } from 'react'
import { MouseContext } from "../context/mouse-context";
import { SliderImage1, SliderImage2, SliderImage3, SliderImage4, SliderImage5, SliderImage6, SliderImage7, SliderImage8 } from '../utils/Images';
import '../css/SlideAbout.scss';


const SliderAbout = () => {
    const { cursorChangeHandler } = useContext(MouseContext);
    const [ imageIndex, setImageIndex ] = useState(0);
    const Images = [
        SliderImage1,
        SliderImage2,
        SliderImage3,
        SliderImage4,
        SliderImage5,
        SliderImage6,
        SliderImage7,
        SliderImage8
    ];
    const controlContainerRef = useRef();
    const buttonSlider = useRef();
    const imageSliderRef = useRef();

    const orangeTextStyle = {
        color: 'orange',
        fontWeight: 'bold', // Optionally, make the text bold
      };


      const whiteTextStyle = {
        color: 'white',
      };


    function handleChangeImage(){
        if (imageIndex + 1 < 8){
            setImageIndex(imageIndex + 1);
            imageSliderRef.current.src = Images[imageIndex];

            removeAllActiveDot();

            [...controlContainerRef.current.children][imageIndex + 1].classList.add('active-slider');
        }
        else{
            setImageIndex(0);
            imageSliderRef.current.src = Images[imageIndex];

            removeAllActiveDot();

            [...controlContainerRef.current.children][0].classList.add('active-slider');
        }
    }

    

    function removeAllActiveDot() {
        [...controlContainerRef.current.children].forEach(cur => {
            cur.classList.remove('active-slider');
        });
    }
    


    function handleChangeImgaeById(id){
        setImageIndex(id);
        imageSliderRef.current.src = Images[id];
    }

    function handleChangeButtonState(){
        handleChangeImage();
    }


    useEffect(() => {
        const buttonSliderRef = buttonSlider.current;
        const controlContainerRefCurrent = controlContainerRef.current;
    
        const handleButtonClick = () => {
            handleChangeButtonState();
        };
    
        const handleDotClick = (cur) => {
            const id = Number(cur.getAttribute('data-slider-index')) - 1;
            handleChangeImgaeById(id);
            removeAllActiveDot();
            cur.classList.add('active-slider');
        };
    
        buttonSliderRef.addEventListener('click', handleButtonClick);
    
        Array.from(controlContainerRefCurrent.children).forEach(cur => {
            cur.addEventListener('click', () => {
                handleDotClick(cur);
            });
        });
    
        return () => {
            buttonSliderRef.removeEventListener('click', handleButtonClick);
    
            Array.from(controlContainerRefCurrent.children).forEach(cur => {
                cur.removeEventListener('click', () => {
                    removeAllActiveDot();
                    cur.classList.add('active-slider');
                });
            });
        };
    }); // Empty dependency array to ensure the effect runs only once
    

    return (
        <div className="container-slide">
        
            <div className="image-slider">

                {imageIndex === 0 && (
<>

<div className="image-text">
    <p style={orangeTextStyle}>The Assets</p>
<p style={whiteTextStyle}>
The game has many assets to manage and enjoy with. 
Players can; Have population, Have lands, Create buildings, 
Have resources, Have production lines, Make researches, Have diplomacy, 
Have land sea and air armies, Have spies, Have Castles, Have Kingdoms, 
Have trade strategies and many more…


</p>
</div>

</>
                )}


{imageIndex === 1 && (

<>

<div className="image-text">
    <p style={orangeTextStyle}>The Timeline</p>
<p style={whiteTextStyle}>
Every planet has its own life duration. 
There may be many planets alive simultaneously. 
Players can create as many realms as they prefer on a single or multiple planets. 
Time gets collected by planets, converted into the turns and players 
use turns to step forward in time. In this way, players are able 
to play the game according to their life schedule


</p>
</div>

</>


                )}


{imageIndex === 2 && (

<>

<div className="image-text">
    <p style={orangeTextStyle}>The Diplomacy</p>
<p style={whiteTextStyle}>
Is not the diplomacy, the main element of the strategy ? 
Players can make their enemies, allies, create kingdoms, 
open wars and many more by using the in game mechanics or not !


</p>
</div>

</>


                )}


{imageIndex === 3 && (

<>

<div className="image-text">
    <p style={orangeTextStyle}>The Wars</p>
<p style={whiteTextStyle}>
Defending your realm and Attacking to the others are the key features of a strategy game. 
Masters of Management offers an extremely detailed, 
unique fight system which enjoys the player even if he loses. 
Additionally, Masters of Management offers a large war system where 
multiple players can attack or defense other multiple players. 
This system raises the level of the enjoy of the game to a new high level.


</p>
</div>

</>


                )}


{imageIndex === 4 && (

<>

<div className="image-text">
    <p style={orangeTextStyle}>The Kingdoms</p>
<p style={whiteTextStyle}>
Kingdoms are made of multiple realms. 
Players can communicate and proceed together for common goals. 
Players can create Kingdoms to organize these collaborations better. 
Kingdoms have their own diplomacies between each other, 
besides the players realm based dilomacies.


</p>
</div>

</>


                )}

{imageIndex === 5 && (

<>

<div className="image-text">
    <p style={orangeTextStyle}>The Trade</p>
<p style={whiteTextStyle}>
Masters of Management offers a unique trading system where 
players can trade every resource type they have between each other with an open market. 
Trading brings new technology knowledge to the realms as well as it brings profits if succeed


</p>
</div>

</>


                )}

{imageIndex === 6 && (

<>

<div className="image-text">
    <p style={orangeTextStyle}>The Announcements</p>
<p style={whiteTextStyle}>
Masters of Management offers a unique announcement system where 
the large events are being announced automatically and 
player based announcements are made manually by players as realms or kingdoms. 
This announcement system brings a new understanding to gaming with a public place where 
players can announce their war/teasing messages and many other things to each other in front of the community.


</p>
</div>

</>


                )}

{imageIndex === 7 && (

<>

<div className="image-text">
    <p style={orangeTextStyle}>The Ranking</p>
<p style={whiteTextStyle}>
Masters of Management collects every single data of the realms and kingdoms automatically. 
The collected data gets calculated by the smart contract for each realm and kingdom. 
Calculation brings a points-based leader board for realms and kingdoms separately
 Staying in the top of this leader board is the main purpose of the game and it brings LOP token airdrops.


</p>
</div>

</>


                )}
            
                <div className="view-slider view-slider-1">
                    <img src={SliderImage1} alt=""/>
                    
                </div>
                <div className="view-slider view-slider-2">
                    <img src={SliderImage2} alt=""/>
                </div>
                <div className="view-slider view-slider-3">
                    <img src={SliderImage3} alt=""/>
                </div>
                <div className="view-slider view-slider-4" >
                    <img src={SliderImage4} alt=""/>
                </div>
                <div className="view-slider view-slider-5" >
                    <img src={SliderImage5} alt="" />
                </div>
                <div className="view-slider view-slider-6" >
                    <img src={SliderImage6} alt="" />
                </div>
                <div className="view-slider view-slider-7" >
                    <img src={SliderImage7} alt="" />
                </div>
                <div className="view-slider view-slider-8" >
                    <img src={SliderImage8} alt="" ref={imageSliderRef}/>
                </div>

                <div className="control-container" ref={controlContainerRef}>
                    <span className="slider-1 active-slider" data-slider-index="1"></span>
                    <span className="slider-2" data-slider-index="2"></span>
                    <span className="slider-3" data-slider-index="3"></span>
                    <span className="slider-4" data-slider-index="4"></span>
                    <span className="slider-5" data-slider-index="5"></span>
                    <span className="slider-6" data-slider-index="6"></span>
                    <span className="slider-7" data-slider-index="7"></span>
                    <span className="slider-8" data-slider-index="8"></span>
                </div>
            </div>
            <span 
                ref={buttonSlider}
                className="slider-next-btn"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                
                onMouseLeave={() => cursorChangeHandler("")}>
                <i className='bx bx-right-arrow'></i>
            </span>
        </div>
    )
}

export default SliderAbout
