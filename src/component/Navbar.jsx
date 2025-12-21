import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useState } from 'react'

const Navbar = () => {
    const { handleScroll } = useContext(AppContext)
    const [menu, setmenu] = useState(false)
    return (
        <div>
            <nav className='flex justify-between items-center text-white' >
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
                <div onClick={() => setmenu(true)} className='md:hidden flex flex-col gap-2' >
                    <div className='w-7 h-0.5 bg-white ' ></div>
                    <div className='w-7 h-0.5 bg-white ' ></div>
                    <div className='w-7 h-0.5 bg-white ' ></div>
                </div>

                <div className={`fixed  top-0 ${menu ? "right-[-0%]" : "right-[-15%]"} text-center  flex justify-center items-center z-20 bg-[#151825] transition-all duration-300 ease-in-out ${menu ? "w-full h-screen" : "w-0 h-screen"}`}>
                    <ul>
                        <li onClick={() => {
                            handleScroll("home");
                            setmenu(false)
                        }} className='text-2xl' >Home</li>
                        <li onClick={() => {
                            handleScroll("about");
                            setmenu(false)
                        }} className='text-2xl' >About</li>
                        <li onClick={() => {
                            handleScroll("services")
                            setmenu(false)
                        }} className='text-2xl' >Services</li>
                        <li onClick={() => {
                            handleScroll("projects")
                            setmenu(false)
                        }} className='text-2xl' >Projects</li>
                        <li onClick={() => {
                            handleScroll("contact")
                            setmenu(false)
                        }} className='text-2xl' >Contact us</li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar