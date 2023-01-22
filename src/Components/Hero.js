import React from 'react'

import Womanimg from "../assets/img/banner-woman2.webp"


export default function Hero() {
  return (
    <section id='home' className='lg:h-[85vh] flex items-center
     bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat 
     py-32 lg:py-0 overflow-hidden'>

        <div className="container mx-auto h-full">
          <div className="flex items-center h-full pt-8">
            {/* Left side */}
            <div className="flex-1 flex flex-col items-center lg:items-start">
              <p className='text-lg text-accent mb-6'>Hey, I'm Syed Dilawar Hussain</p>
              <h1 className='text-4xl leading-[44px] md:text-5xl
               md:leading-tight lg:text-7xl lg:leading-[1-2]
                font-bold md:tracking-[-2]'>I Build & Desing <br /> Web Interfaces</h1>
                <p className='text-lg pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-center lg:text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, infsdfsfsdf fs fsf.</p>
            

                <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                  Work With Me
                </button>
           
                
                
                            </div>
            {/* right side */}
            <div className="hidden lg:flex flex-1 justify-end items-end h-full">
              <img src={Womanimg} alt="" />
            </div>
          </div>
        </div>

    </section>
  )
}
