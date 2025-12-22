import React from 'react'
import assets from '../assets/assets'
const About = ({id}) => {
    return (
        <div id={id} className='overflow-hidden w-screen min-h-screen flex justify-center items-center bg-[#313849]' >
            <div className='flex flex-col gap-10 2xl:gap-20  md:flex-row w-full  h-fit justify-center items-center' >
                <div className='h-1/2 w-fit  bg-[#313849] flex justify-center items-center' >
                    <div className='md:h-[25vw] h-50 md:w-[26vw] w-50 relative border-8 md:border-12 border-[#00d8ff] shadow-[0_0_40px_10px_rgba(0,216,255,0.7)] shadow-[#00d8ff] rounded-full' >
                        <img loading='lazy' className='md:w-[34vw]  md:h-[30vw] h-65 w-65 -top-20 md:-top-[7vw] 2xl:-top-[6vw] object-cover absolute  rounded-full' src={assets.myImage} alt="myImage" />
                    </div>
                </div>
                <div className='h-1/2 w-full  md:w-[40vw] ' >
                    <h1 className='text-center md:text-start font-bold text-3xl md:text-[3vw] text-white md:leading-[3vw]' >About <span className='text-[#00d8ff]' >Me</span></h1>
                    <h1 className='text-center md:text-start font-bold text-2xl md:text-[2vw]  md:leading-[3vw] text-white' >Full Stack Web Developer</h1>
                    <p className='mt-7 text-lg text-white px-5 md:px-0' >Hi, I’m Ali Nawaz, a passionate Web Developer dedicated to helping businesses and individuals establish a strong online presence. I specialize in custom website development, creating sites that are not only visually appealing but also fast, responsive, and SEO-friendly.</p>
                </div>
            </div>
        </div>
    )
}

export default About
