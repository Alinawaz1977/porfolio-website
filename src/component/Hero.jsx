import React, { useContext } from 'react'
import Navbar from './Navbar'
import assets from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {
    const { handleScroll } = useContext(AppContext)
    return (
        <div className='w-full overflow-hidden p-5 md:p-10 md:px-15 bg-[#151825] h-screen' >
            <Navbar />
            <div className='h-full w-full flex-col md:flex-row text-center md:text-start flex md:gap-10 items-center' >
                <div className='w-[60vw] flex flex-col justify-center items-center md:items-start md:justify-normal h-1/2 ' >
                    <h1 className=' text-2xl md:text-[2vw] font-bold md:leading-[4vw] text-white' >Hello It's Me</h1>
                    <h1 className='uppercase text-3xl md:text-xl md:text-[4vw] font-bold md:leading-[4vw] text-white' >ali nawaz</h1>
                    <h1 className=' md:text-[2vw] tracking-tight leading-[4vw] font-bold text-white' >And I'm Full <span className='text-[#00d8ff]' >Stack Web Developer</span></h1>
                    <p className='text-white hidden md:block md:text-[1vw] pt-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, sapiente quisquam modi earum, reiciendis aliquid sequi, minima ea illum commodi esse animi facere doloribus magni debitis. Accusamus et tempora laborum.</p>
                    <div className='flex gap-5 mt-5' >
                        <svg className='h-7 w-7 md:w-[2vw] md:h-[2vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round">
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
                            <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" />
                            <path d="M17.5078 6.5L17.4988 6.5" />
                        </svg>
                        <svg className='h-7 w-7 md:w-[2vw] md:h-[2vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M7 10V17" />
                            <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" />
                            <path d="M7.00801 7L6.99902 7" />
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
                        </svg>
                        <svg className='h-7 w-7 md:w-[2vw] md:h-[2vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round">
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
                            <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" />
                            <path d="M17.5078 6.5L17.4988 6.5" />
                        </svg>
                        <svg className='h-7 w-7 md:w-[2vw] md:h-[2vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round">
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
                            <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" />
                            <path d="M17.5078 6.5L17.4988 6.5" />
                        </svg>
                    </div>
                    <button onClick={() => handleScroll("contact")} className='w-50 md:w-fit cursor-pointer hover:shadow-[0_0_20px_5px_rgba(0,216,255,0.7)] duration-300  bg-[#00d8ff] md:px-10 py-3 font-[poppins] text-2xl md:text-[1.5vw] shadow-[0_0_40px_10px_rgba(0,216,255,0.7)]  rounded-md text-white font-medium mt-10' >Contact Me</button>
                </div>
                <div className='md:w-[40vw] items-center h-1/2 flex justify-center ' >
                    <div className='md:h-[25vw] h-60 md:w-[26vw] w-60 relative bg-[#00d8ff] shadow-[0_0_40px_10px_rgba(0,216,255,0.7)] shadow-[#00d8ff] rounded-full' >
                        <img className='md:w-[36vw]  md:h-[33vw] h-80 w-80 -top-20 md:-top-[7.5vw] object-cover absolute  rounded-full ' src={assets.myImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero