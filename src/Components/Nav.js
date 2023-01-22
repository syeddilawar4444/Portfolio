import React from 'react'

//import components
import { navigation } from "../data"
import { Link } from "react-scroll"



export default function Nav() {
    return (
        <nav>
            <ul className='flex space-x-8 capitalize text-[15px]'>
                {navigation.map((item, index) => {
                    return (
                        <li className='text-white hover:text-accent cursor-pointer' key={index}>
                            <Link className="transition-all duration-300" to={item.href} activeClass="active" spy={true} smooth={true} duration={500} offset={-70}
                            >
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
