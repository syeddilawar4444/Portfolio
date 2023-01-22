import React from 'react'

// import Brands form data.js
import {brands} from "../data"

function Brands() {
  return (
    <section className='bg-tertiary min-h-[110px] flex items-center'>
      <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {brands.map((item,index)=>{
            return(
                <div key={index}>
                    <img src={item.img} alt="" />
                </div>
            )
        })}
      </div>
    
    </section>


)
}

export default Brands
