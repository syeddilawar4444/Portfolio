import React from 'react'

import Image from "../assets/img/about.webp"
function About() {
  return (
    <section id='about' className='section bg-secondary'>
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-24">
                <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt="" />
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="flex flex-col">
                        <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 before:top-[2rem] before:hidden before:lg:block ">
                        Syed Dilawar Hussain
                        </h2>
                        <p className='mb4 text-accent'>I am A MERN STACK DEVELOPER</p>
                        <hr className='mb-8 opacity-5' />
                        <p className='mb-8 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis tenetur illum odit! Eaque odio quia enim magni!</p>

                    </div>
                </div>
            </div>

        </div>
      {/* About Us */}
    </section>
  )
}

export default About
