import React, { useContext } from 'react'
import Navbar from './Navbar'
import assets from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
    const { handleScroll } = useContext(AppContext)

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(".leftHero", {
            x: -100,
            opacity: 0,
            duration: 1
        },"ali")
        tl.from(".rightHero", {
            x: 100,
            opacity: 0,
            duration: 1
        },"ali")
    })

    return (
        <div className='w-full overflow-hidden p-5 md:p-10 md:px-15 bg-[#151825] h-screen' >
            <Navbar />
            <div className='h-full w-full flex-col md:flex-row text-center md:text-start flex md:gap-10 items-center' >
                <div className='w-[60vw] leftHero flex flex-col justify-center items-center md:items-start md:justify-normal h-1/2 ' >
                    <h1 className=' text-2xl md:text-[2vw] font-bold md:leading-[4vw] text-white' >Hello It's Me</h1>
                    <h1 className='uppercase text-3xl md:text-xl md:text-[4vw] font-bold md:leading-[4vw] text-white' >ali nawaz</h1>
                    <h1 className=' md:text-[2vw] tracking-tight leading-[4vw] font-bold text-white' >And I'm Full <span className='text-[#00d8ff]' >Stack Web Developer</span></h1>
                    <p className='text-white hidden md:block md:text-[1vw] pt-5' >Hi! I’m Ali Nawaz, a professional web developer specializing in creating custom, high-performance websites that help businesses grow online.</p>
                    <button onClick={() => handleScroll("contact")} className='w-50 md:w-fit cursor-pointer hover:shadow-[0_0_20px_5px_rgba(0,216,255,0.7)] duration-300  bg-[#00d8ff] md:px-10 py-3 font-[poppins] text-2xl md:text-[1.5vw] shadow-[0_0_40px_10px_rgba(0,216,255,0.7)]  rounded-md text-white font-medium mt-10' >Contact Me</button>
                </div>
                <div className='md:w-[40vw] rightHero items-center h-1/2 flex justify-center ' >
                    <div className='md:h-[25vw] h-60 md:w-[26vw] w-60 relative bg-[#00d8ff] shadow-[0_0_40px_10px_rgba(0,216,255,0.7)] shadow-[#00d8ff] rounded-full' >
                        <img loading="lazy" className='md:w-[36vw]   md:h-[25vw] h-60 w-80 md:top-0 object-cover absolute  rounded-full ' src={assets.myImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
