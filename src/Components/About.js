import React from 'react'

import Image from "../assets/img/contact/animi.png"
function About() {
  return (
    <section id='about' className='section bg-secondary'>
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-24">
                <img className='object-cover h-full w-[566px] md:mx-auto
                 lg:mx-0 rounded-2xl' src={Image} alt="" />
                <div className="flex flex-col items-center 
                text-center lg:items-start lg:text-left">
                    <div className="flex flex-col">
                        <h2 className="text-3xl lg:text-4xl font-medium 
                        lg:font-extrabold mb-3 before:content-about relative
                         before:absolute before::opacity-40 before:top-[-1rem] 
                         before:hidden before:lg:block ">
                        Syed Dilawar Hussain
                        </h2>
                        <p className='mb4 text-accent mt-2'>I AM A MERN STACK DEVELOPER</p>
                        <hr className='mb-8 opacity-5' />
                        <p className='mb-8 text-justify'>
                        A passionate Full Stack Software Developer with huge knowledge and proficiency in Html / Css / JavaScript / ReactJs / NodeJs / React Native and some other cool libraries and frameworks,
all Skill Learn Saylani Mass IT Training Institute as well as strong skills.
                        </p>

                    </div>
                </div>
            </div>

        </div>
      {/* About Us */}
    </section>
  )
}

export default About
