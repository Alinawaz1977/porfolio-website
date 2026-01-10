import React from 'react'
import assets from '../assets/assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
const About = ({ id }) => {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline()
        gsap.from(".aboutLeft", {
            y: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".aboutLeft",
                scrub: 2,
                end:"top 60%",
                start: "top 80%"
            }
        }, "ali")
        gsap.from(".aboutRight", {
            y: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".aboutLeft",
                scrub: 2,
                end: "top 50%",
                start: "top 70%"
            }
        }, "ali")
        gsap.from(".aboutRightp", {
            y: 500,
            opacity: 0,
            duration: 1,
            // stagger: .4,
            // rotate:20,
            scrollTrigger: {
                trigger: ".aboutLeft",
                scrub: 2,
                end:"top 50%",
                start: "top 70%"
            }
        }, "ali")
    })

    return (
        <div id={id} className='overflow-hidden w-screen min-h-screen flex justify-center items-center bg-[#313849]' >
            <div className='flex flex-col gap-10 2xl:gap-20  md:flex-row w-full  h-fit justify-center items-center' >
                <div className='h-1/2 w-fit aboutLeft bg-[#313849] flex justify-center items-center' >
                    <div className='md:h-[25vw] h-50 md:w-[26vw] w-50 relative border-8 md:border-12 border-[#00d8ff] shadow-[0_0_40px_10px_rgba(0,216,255,0.7)] shadow-[#00d8ff] rounded-full' >
                        <img loading='lazy' className=' md:w-[34vw] md:h-[23vw] h-41 w-65 top-4  2xl md:-top-[0.01vw] object-cover absolute  rounded-full' src={assets.myImage} alt="myImage" />
                    </div>
                </div>
                <div className='h-1/2 w-full  md:w-[40vw] ' >
                    <div className='h-fit overflow-hidden' >
                        <h1 className='aboutRight text-center md:text-start font-bold text-3xl md:text-[3vw] text-white md:leading-[3vw]' >About <span className='text-[#00d8ff]' >Me</span></h1>
                    </div>
                    <div className='h-fit overflow-hidden' >
                        <h1 className='aboutRight text-center md:text-start font-bold text-2xl md:text-[2vw]  md:leading-[3vw] text-white' >Full Stack Web Developer</h1>
                    </div>
                    <div className='overflow-hidden h-fit' >
                        <div className='overflow-hidden' >
                            <p className='aboutRightp mt-7  text-white px-5 md:px-0' >Hi, I’m Ali Nawaz, a passionate Web Developer dedicated </p>
                        </div>
                        <div className='overflow-hidden' >
                            <p className='text-white aboutRightp pl-5 md:pl-0' >to helping businesses and individuals establish a strong online </p>
                        </div>
                        <div className='overflow-hidden' >
                            <p className='text-white aboutRightp pl-5 md:pl-0' >presence. I specialize in custom website development, creating </p>
                        </div>
                        <div className='overflow-hidden' >
                            <p className='text-white aboutRightp pl-5 md:pl-0' >sites that are not only visually appealing but also fast,</p>
                        </div>
                        <div className='overflow-hidden' >
                            <p className='text-white aboutRightp pl-5 md:pl-0' > responsive, and SEO-friendly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
