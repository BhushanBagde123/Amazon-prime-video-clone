import React, { useState } from 'react'

function Topcontainer({show,movies}) {
    const topTenMovies =[
        {img:"https://m.media-amazon.com/images/S/pv-target-images/44fdfa89027925e2da404b733bd5d1e7015eb2de0028e62108de0ce81f9fa84e._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,808,263,156_SX720_FMwebp_.jpg",
        coverImg:"https://m.media-amazon.com/images/S/pv-target-images/39863c76dceaa3209db1d6b18e3839402e959af74518cff806ba9db95cc84ea4._UR1920,1080_SX1920_FMwebp_.jpg",
         id:0
        },
        {img:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b8f824f39888e41d0f3f8e1a2de943ae71930852445195cca97d6fcdec1de480._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,808,263,156_SX480_FMwebp_.jpg",
        coverImg:"https://m.media-amazon.com/images/S/pv-target-images/364c3c2357a7e55d862fcb2179eaa3f4f13c6036913791bae0f881e0d0ea8acb._UR1920,1080_SX1920_FMwebp_.jpg",
         id:1
        },
        {img:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b8f824f39888e41d0f3f8e1a2de943ae71930852445195cca97d6fcdec1de480._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,808,263,156_SX480_FMwebp_.jpg",
        coverImg:"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Raayan/6648f9f2-33c9-4c1e-96b0-8734e54a0032._UR3840,1440_SX2160_FMwebp_.jpeg",
          id:2  
        },
        {img:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b8f824f39888e41d0f3f8e1a2de943ae71930852445195cca97d6fcdec1de480._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,808,263,156_SX480_FMwebp_.jpg",
        coverImg:"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Raayan/6648f9f2-33c9-4c1e-96b0-8734e54a0032._UR3840,1440_SX2160_FMwebp_.jpeg",
        id:3
        },
        {img:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b8f824f39888e41d0f3f8e1a2de943ae71930852445195cca97d6fcdec1de480._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,808,263,156_SX480_FMwebp_.jpg",
         coverImg:"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Raayan/6648f9f2-33c9-4c1e-96b0-8734e54a0032._UR3840,1440_SX2160_FMwebp_.jpeg",
         id:4
        },
        {img:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b8f824f39888e41d0f3f8e1a2de943ae71930852445195cca97d6fcdec1de480._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,808,263,156_SX480_FMwebp_.jpg",
        coverImg:"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Raayan/6648f9f2-33c9-4c1e-96b0-8734e54a0032._UR3840,1440_SX2160_FMwebp_.jpeg",
         id:5  
        },
        {img:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b8f824f39888e41d0f3f8e1a2de943ae71930852445195cca97d6fcdec1de480._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,808,263,156_SX480_FMwebp_.jpg",
        coverImg:"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Raayan/6648f9f2-33c9-4c1e-96b0-8734e54a0032._UR3840,1440_SX2160_FMwebp_.jpeg",
        id:6
        },
        {img:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b8f824f39888e41d0f3f8e1a2de943ae71930852445195cca97d6fcdec1de480._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,808,263,156_SX480_FMwebp_.jpg",
        coverImg:"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Raayan/6648f9f2-33c9-4c1e-96b0-8734e54a0032._UR3840,1440_SX2160_FMwebp_.jpeg",
        id:7
        },
        {img:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b8f824f39888e41d0f3f8e1a2de943ae71930852445195cca97d6fcdec1de480._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,808,263,156_SX480_FMwebp_.jpg",
        coverImg:"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Raayan/6648f9f2-33c9-4c1e-96b0-8734e54a0032._UR3840,1440_SX2160_FMwebp_.jpeg",
        id:8  
        },
        {img:"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b8f824f39888e41d0f3f8e1a2de943ae71930852445195cca97d6fcdec1de480._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,808,263,156_SX480_FMwebp_.jpg",
        coverImg:"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Raayan/6648f9f2-33c9-4c1e-96b0-8734e54a0032._UR3840,1440_SX2160_FMwebp_.jpeg",
        id:9  
          },
   
    ]
    const [coverImage,setBackgroundImage]=useState(topTenMovies[0].coverImg);
    const [color,setColor]=useState(0)
    const handelBackgroundImage =(Img,index)=>{
        setBackgroundImage(Img);
        setColor(index)
        
    }
  return (
    <div className='w-full h-850px'>
       <h1 className='text-3xl font-bold p-4 capitalize text-white'>top 10 {show||movies}</h1>
    <div className='w-full lg:h-[800px]  relative'>
        <div className=" w-full h-full bg-cover bg-center"style={{backgroundImage:`url(${coverImage})`}} ></div>
        <div className='absolute inset-0 bg-black linergreed'></div>
        <div className="absolute top-[20%] px-8 capitalize  w-[40%] h-[70%]">
            <h1 className='text-5xl font-bold'>raayan</h1>
        </div>
       
        <div className='w-full h-44 flex gap-10 overflow-auto overflow-y-hidden scrollWidth absolute bottom-0 items-center px-6 '>
            {topTenMovies.map((item,index)=>{
                return (
                    <div key={item.id} className='flex w-80 h-full'>
                        <div className={`w-auto text-center flex items-center justify-center text-6xl font-extrabold shrink-0 ${color===index?"text-white":"opacity-50"}`}>{index+1}</div>
                <div  onClick={()=>handelBackgroundImage(item.coverImg,index)} className={`w-72 h-[100%] shrink-0 cursor-pointer rounded-md `}
              style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                
              </div>
                    </div>
                )
            })}

        </div>
    </div>
    </div>
  )
}

export default Topcontainer