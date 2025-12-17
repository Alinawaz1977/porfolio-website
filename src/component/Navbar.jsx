import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    const { handleScroll } = useContext(AppContext)
    return (
        <nav className='flex justify-between text-white' >
            <div>
                <h1 className='uppercase text-3xl font-medium text-white' >ALI Nawaz</h1>
            </div>
            <div className='hidden md:flex gap-10 font-medium' >
                <button className='cursor-pointer' onClick={() => handleScroll("home")}>Home</button>
                <button className='cursor-pointer' onClick={() => handleScroll("about")}>About</button>
                <button className='cursor-pointer' onClick={() => handleScroll("services")}>Services</button>
                <button className='cursor-pointer' onClick={() => handleScroll("projects")}>Projects</button>
                <button className='cursor-pointer' onClick={() => handleScroll("contact")}>Contact</button>
            </div>
        </nav>
    )
}

export default Navbar