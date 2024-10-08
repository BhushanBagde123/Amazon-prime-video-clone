
import React, { useState, useCallback, useRef, useContext } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeroSlider.css';
import { PiSpeakerSimpleLowLight, PiSpeakerSimpleSlash } from "react-icons/pi";
import ArrowButton from './ArrowButton';
import Mycontext from '../context/Mycontext'
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [hover, setHover] = useState(null);
  const [voice, setVoice] = useState(true);
  const slider =useRef();
  const videoref =useRef();
  const context =useContext(Mycontext);
  const {getAllProducts}=context
  const trending =getAllProducts.filter((p)=>p.year ==2024);


  const controller = () => {
    setVoice(!voice);
  };

  const handleMouseEnter = useCallback((id) => {
    setHover(id);
  }, []);
  const handelMouseLeave =()=>{
    setHover(null);
  }

  const handleVedioEnd =()=>{
   
    if (slider.current) {
      slider.current.slickNext(); // Move to next slide
    }
  }
 
   
  
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <ArrowButton direction="next"/>, 
    prevArrow: <ArrowButton direction="prev"/>, 
  };

  return (
    <div className="relative w-full lg:h-[600px] h-[300px] overflow-hidden cursor-pointer">
      <Slider {...settings} ref={slider}>
        {trending.slice(0,6).map((item) => (
          
      <div 
            key={item.id} 
            className="relative" 
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handelMouseLeave} 
           
          >
           
           <div
              className="lg:h-[560px] h-[200px] bg-cover bg-center"
              style={{ backgroundImage: `url(${item.coverImg})` }}>
              {hover === item.id && (
                <video ref={videoref}
                className="absolute hidden lg:block inset-0 object-cover w-full h-full linergreed"
                  autoPlay
                  muted={voice}
                 
                  onEnded={handleVedioEnd} >
                    <source src={item.video}/>
                  </video>
                
                
              )}
              <img className='w-full h-full lg:hidden' src={`${item.coverImg}`} alt="" />
              <div className="absolute inset-0 bg-black linergreed"></div>
              {hover && (
                <button 
                  onClick={controller} 
                  className="absolute left-[90%] hidden z-20 lg:flex justify-center items-center rounded-full top-24 w-12 h-12 bg-black opacity-40 "
                >
                  {voice ? <PiSpeakerSimpleSlash size={24}  /> : <PiSpeakerSimpleLowLight size={24}/>}
                </button>
              )}
              <div className="absolute bottom-0 p-8">
              <Link to={`/detail/${item.id}`}>  <h2 className="text-white lg:text-5xl capitalize text-xl font-bold">{item.name}</h2> </Link>
              </div>
            </div>
           

          </div>
           
        ))}
        
      </Slider>
    </div>
  );
};

export default HeroSlider;
