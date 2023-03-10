import React from 'react'
import {skills} from "../data"
function Skill() {
  return (
    <section className='bg-tertiary py-12'>
        <div className="container mx-auto">
            <div className='grid grid-cols-8 md:grid-flow-row'>
            {skills.map((item,index)=>{
                return(
                    <div key={index} className='flex items-center justify-center' >
                        <img className='w-[96px]' src={item.image} alt="" />
                    </div>
                    )
            })}
            </div>
        </div>
      
    </section>
  )
}

export default Skill
