import React from 'react'

//import component
import Project from "./Project"
function Portfolio() {
  return (
    <section id='portfolio' className='section bg-primary'>
      <div className='container mx-auto'>
        <div className="flex flex-col items-center text-center">
          <h2 className='section-title before:content-portfolio relative 
          before:absolute before:opacity-40 
          before:-top-[1rem] before:-left-[10rem]
          before:hidden before:lg:block' >MY LATEST WORK</h2>
          <p className="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus tempora culpa enim impedit et nam, debitis quaerat non praesentium soluta.</p>
        </div>
      </div>
      <Project />
    </section>
  )
}

export default Portfolio
