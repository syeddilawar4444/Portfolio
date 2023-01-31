import React from 'react'

//import component
import Projects from "./Projects"

function Portfolio() {
  return (
    <section id='portfolio' className='section bg-primary'>
      {/* Project section top Heading  */}
      <div className='container mx-auto'>
        <div className="flex flex-col items-center text-center">
          <h2 className='section-title before:content-portfolio relative 
          before:absolute before:opacity-40 
          before:-top-[1rem] before:-left-[10rem]
          before:hidden before:lg:block' >MY WORK</h2>
          <p className="subtitle font-Khula text-xl tracking-wider">I am Build realy awesome Web application and build cool Mobile application</p>
        </div>
      </div>
                 {/* project component render the projects */}
      <Projects />
    </section>
  )
}

export default Portfolio
