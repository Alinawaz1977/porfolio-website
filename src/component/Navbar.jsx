import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
    const { handleScroll } = useContext(AppContext)
    const [menu, setmenu] = useState(false)

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(".leftNav", {
            y: -100,
            opacity: 0,
            duration: .5
        })

        gsap.from(".menu", {
            y: -50,
            opacity: 0,
            stagger: .1,
            duration: 1,
            ease: "power2.out"
        })
    })
    return (
        <div className='' >
            <nav className='flex justify-between items-center text-white' >
                <div className='leftNav' >
                    <h1 className='uppercase text-3xl font-medium text-white' >ALI Nawaz</h1>
                </div>
                <div className='hidden md:flex gap-10 font-medium' >
                    <button className='navLinks cursor-pointer' onClick={() => handleScroll("home")}>Home</button>
                    <button className='navLinks cursor-pointer' onClick={() => handleScroll("about")}>About</button>
                    <button className='navLinks cursor-pointer' onClick={() => handleScroll("services")}>Services</button>
                    <button className='navLinks cursor-pointer' onClick={() => handleScroll("projects")}>Projects</button>
                    <button className='navLinks cursor-pointer' onClick={() => handleScroll("contact")}>Contact</button>
                </div>
                <div onClick={() => {
                    
                    gsap.from(".navLinks", {
                        y: -50,
                        opacity: 0,
                        stagger: .1,
                        duration: 1,
                        ease: "power2.out"
                    })
                    setmenu(true)
                }} className='md:hidden menu flex flex-col gap-2' >
                    <div className='w-7 h-0.5 bg-white ' ></div>
                    <div className='w-7 h-0.5 bg-white ' ></div>
                    <div className='w-7 h-0.5 bg-white ' ></div>
                </div>

                <div className={`fixed  top-0 ${menu ? "right-[-0%]" : "right-[-20%]"} text-center  flex justify-center items-center z-20 bg-[#151825] transition-all duration-300 ease-in-out ${menu ? "w-full h-screen" : "w-0 h-screen"}`}>
                    <ul className=''>
                        <li onClick={() => {
                            handleScroll("home");
                            setmenu(false)
                        }} className='navLinks text-2xl' >Home</li>
                        <li onClick={() => {
                            handleScroll("about");
                            setmenu(false)
                        }} className='navLinks text-2xl' >About</li>
                        <li onClick={() => {
                            handleScroll("services")
                            setmenu(false)
                        }} className='navLinks text-2xl' >Services</li>
                        <li onClick={() => {
                            handleScroll("projects")
                            setmenu(false)
                        }} className='navLinks text-2xl' >Projects</li>
                        <li onClick={() => {
                            handleScroll("contact")
                            setmenu(false)
                        }} className='navLinks text-2xl' >Contact us</li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
