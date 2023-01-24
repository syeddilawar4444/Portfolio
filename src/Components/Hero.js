import React from 'react'
import Background from "../assets/img/background.gif"



export default function Hero() {
  return (
    <section id='home' className="lg:h-[85vh] flex items-center
     bg-primary lg:bg-cover lg:bg-center bg-no-repeat lg:bg-no-repeat 
     py-32 lg:py-0 overflow-hidden lg:bg-back md:bg-back bg-cover ">

        <div className="container mx-auto h-full">
          <div className="flex items-center h-full pt-8">
            {/* Left side */}
            <div className="flex-1 flex flex-col items-center lg:items-start">
              <p className=' text- mb-6 text-4xl text-center md:text-5xl font-script '>Hey, I'm Syed Dilawar Hussain</p>

              <h1 className='text-2xl text-center leading-[44px] md:text-4xl
               md:leading-tight lg:text-4xl lg:leading-[1-2] lg:text-start xl:text-5xl
                font-bold md:tracking-[-2]'>I Build Web <br /> And Mobile Applications </h1>
                <p className='text-lg pt-4 
                pb-8 md:pt-6 md:pb-12 max-w-[480px]
                 text-center lg:text-left font-Khula tracking-wider '>
                  A passionate MERN Stack Developer  having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
                  </p>
                <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                  Work With Me
                </button>
           
                
                
                            </div>
            {/* right side */}
            {/* <div className="hidden lg:flex flex-1 justify-end items-end h-full"> */}
              {/* <Womanimg /> */}
              {/* <img className='' src={Background} alt="" /> */}
            {/* </div> */}
          </div>
        </div>

    </section>
  )
}
