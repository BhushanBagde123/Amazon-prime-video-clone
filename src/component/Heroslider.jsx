
import React, { useState, useCallback, useRef, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeroSlider.css';
import { PiSpeakerSimpleLowLight, PiSpeakerSimpleSlash } from "react-icons/pi";
import ArrowButton from './ArrowButton';


const HeroSlider = () => {
  const [hover, setHover] = useState(null);
  const [voice, setVoice] = useState(true);
  const slider =useRef();
  const videoref =useRef();

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
  
  const heroItems = [
    {
      id: 1,
      imageUrl: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Kalki2898AD/af72b514-d97a-4038-90ee-a97e85980a31._UR3840,1440_SX2160_FMwebp_.jpeg", 
      vediourl:"https://avodmp4s3ww-a.akamaihd.net/ww_iad/9a3e/6405/bdca/4fc5-8bff-3879b3b7b969/04fad959-8c6f-426b-b2a7-322d523bba81_video_720p_2500kbps_audio_aaclc_128kbps.mp4",
      title: "Movie 1",
    },
    {
      id: 2,
      imageUrl: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_FuriosaAMadMaxSaga_149/568e9862-0023-4dbd-a82f-01808f626b20._UR3840,1440_SX1440_FMwebp_.jpeg",
      vediourl:"https://avodmp4s3ww-a.akamaihd.net/ww_iad/c027/4297/5206/481e-a487-900471f74227/da275537-db1f-4a51-8eb9-9ac66d15d4b7_video_720p_2500kbps_audio_aaclc_128kbps.mp4",
      title: "Movie 2",
    },
    {
      id: 3,
      imageUrl: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheMinistryofUngentlemanlyWarfare/ea7c2163-0bd5-4a93-9237-d21a546c811e._UR3840,1440_SX2160_FMwebp_.jpeg",
      vediourl:"https://avodmp4s3ww-a.akamaihd.net/ww_iad/b691/fb0b/0ed1/498d-b7b9-aeac1ffc6098/16050941-69c9-4268-a1b3-cc5ec8c7dbb9_video_720p_2500kbps_audio_aaclc_128kbps.mp4",
      title: "Movie 3",
    },
    {
      id: 4,
      imageUrl: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_TheWatchers_PriceRev149/3d8e164e-c4cb-4677-9370-bdf299e5783f._UR3840,1440_SX2160_FMwebp_.jpeg",
      vediourl:"https://avodmp4s3ww-a.akamaihd.net/ww_iad/b691/fb0b/0ed1/498d-b7b9-aeac1ffc6098/16050941-69c9-4268-a1b3-cc5ec8c7dbb9_video_720p_2500kbps_audio_aaclc_128kbps.mp4",
      title: "Movie 4",
    },
    {
      id: 5,
      imageUrl: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Raayan/6648f9f2-33c9-4c1e-96b0-8734e54a0032._UR3840,1440_SX2160_FMwebp_.jpeg",
      vediourl:"https://avodmp4s3ww-a.akamaihd.net/ww_iad/b691/fb0b/0ed1/498d-b7b9-aeac1ffc6098/16050941-69c9-4268-a1b3-cc5ec8c7dbb9_video_720p_2500kbps_audio_aaclc_128kbps.mp4",
      title: "Movie 5",
    },
    {
      id:6,
      imageUrl:"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Yodha_Remaster/6afc94b6-14db-45dd-bb9d-829cc6cd13e7._UR3840,1440_SX2160_FMwebp_.jpeg",
      vediourl:"https://avodmp4s3ww-a.akamaihd.net/ww_iad/aeab/d1a4/b38c/4651-bddf-0d39e9dff60e/d37a2121-1484-4d74-b3c5-7f0c215c38e4_video_720p_2500kbps_audio_aaclc_128kbps.mp4",
      title: "Movie 6"
    }
  ];
  

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
        {heroItems.map((item) => (
          <div 
            key={item.id} 
            className="relative" 
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handelMouseLeave} 
           
          >
            <div
              className="lg:h-[550px] h-[200px] bg-cover bg-center"
              style={{ backgroundImage: `url(${item.imageUrl})` }}>
              {hover === item.id && (
                <video ref={videoref}
                  src={item.vediourl}
                  className="absolute hidden lg:block inset-0 object-cover w-full h-full linergreed"
                  autoPlay
                  muted={voice}
                  onEnded={handleVedioEnd} />
              )}
              <img className='w-full h-full lg:hidden' src={`${item.imageUrl}`} alt="" />
              <div className="absolute inset-0 bg-black linergreed"></div>
              {hover && (
                <button 
                  onClick={controller} 
                  className="absolute left-[90%] hidden lg:flex justify-center items-center rounded-full top-24 w-12 h-12 bg-black opacity-40 "
                >
                  {voice ? <PiSpeakerSimpleSlash size={24}  /> : <PiSpeakerSimpleLowLight size={24}/>}
                </button>
              )}
              <div className="absolute bottom-0 p-8">
                <h2 className="text-white lg:text-3xl text-xl font-bold">{item.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
