import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Service = ({ id }) => {
    const {handleScroll}=useContext(AppContext)
    return (
        <div id={id} className=' overflow-hidden min-h-screen w-screen flex flex-col justify-center items-center bg-[#151925]' >
            <h1 className='text-3xl text-white md:text-[4vw] font-bold text-center py-10' >Our <span className='text-center text-[#00d8ff]' >Services</span></h1>
            <div className='flex flex-col mx-5 md:mx-0 md:flex-row gap-5' >
                <div className='w-full md:w-[30vw] text-white rounded-md bg-[#313849] p-5 ' >
                    <svg className='mx-auto' width="120" height="60" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">

                        <path d="M38 8 L18 30 L38 52" stroke="#23c9e4" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />

                        <path d="M82 8 L102 30 L82 52" stroke="#23c9e4" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />

                        <line x1="52" y1="48" x2="68" y2="12" stroke="#23c9e4" stroke-width="4" stroke-linecap="round" />
                    </svg>

                    <h1 className='text-center font-medium text-3xl' >Frontend</h1>
                    <h1 className='text-center' >
                        I create visually appealing, responsive, and user-friendly interfaces that make websites easy and enjoyable to navigate. Every button, animation, and layout is designed to engage users and bring ideas to life on the screen.
                    </h1>
                    <div className='w-full text-center ' >
                        <button onClick={()=>handleScroll("projects")} className='text-white font-medium shadow-[0_0_10px_4px_rgba(0,216,255,0.7)] px-4 py-1 my-2  rounded-sm hover:shadow-none duration-250 cursor-pointer bg-[#00d8ff]' >Learn more</button>
                    </div>
                </div>
                <div className='w-full  md:w-[30vw] text-white rounded-md bg-[#313849] p-5 ' >
                    <svg className='mx-auto' width="120" height="60" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
                        <rect
                            x="18"
                            y="12"
                            width="84"
                            height="36"
                            rx="6"
                            fill="none"
                            stroke="#23c9e4"
                            stroke-width="4"
                        />

                        <line x1="30" y1="24" x2="90" y2="24" stroke="#23c9e4" stroke-width="4" stroke-linecap="round" />
                        <line x1="30" y1="36" x2="70" y2="36" stroke="#23c9e4" stroke-width="4" stroke-linecap="round" />

                        <circle cx="84" cy="36" r="3" fill="#23c9e4" />
                    </svg>

                    <h1 className='text-center font-medium text-3xl' >Backend</h1>
                    <h1 className='text-center' >
                        I develop robust server-side systems that handle data, logic, and business rules efficiently. Your website’s backend is secure, scalable, and optimized for performance, ensuring smooth operation under any traffic load.
                    </h1>
                    <div className='w-full text-center ' >
                        <button onClick={()=>handleScroll("projects")} className='text-white font-medium shadow-[0_0_10px_4px_rgba(0,216,255,0.7)] px-4 py-1 my-2  rounded-sm hover:shadow-none duration-250 cursor-pointer bg-[#00d8ff]' >Learn more</button>
                    </div>
                </div>
                <div className='w-full  md:w-[30vw] text-white rounded-md bg-[#313849] p-5 ' >
                    <svg className='mx-auto' width="120" height="60" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M38 42
       H78
       C88 42 94 36 94 28
       C94 20 88 16 82 16
       C80 10 74 6 66 6
       C58 6 52 10 50 16
       C44 16 38 20 38 28
       C30 28 26 32 26 36
       C26 40 30 42 38 42 Z"
                            fill="none"
                            stroke="#23c9e4"
                            stroke-width="4"
                            stroke-linejoin="round"
                        />

                        <line x1="60" y1="36" x2="60" y2="22" stroke="#23c9e4" stroke-width="4" stroke-linecap="round" />
                        <polyline
                            points="54,28 60,22 66,28"
                            fill="none"
                            stroke="#23c9e4"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>

                    <h1 className='text-center font-medium text-3xl' >Deployment</h1>
                    <h1 className='text-center' >
                        I take care of deploying your website to live servers with performance tuning, security measures, and scalability in mind. This ensures your site is fast, reliable, and ready to grow with your audience.
                    </h1>
                    <div className='w-full text-center ' >
                        <button onClick={()=>handleScroll("contact")} className='text-white font-medium shadow-[0_0_10px_4px_rgba(0,216,255,0.7)] px-4 py-1 my-2  rounded-sm hover:shadow-none duration-250 cursor-pointer bg-[#00d8ff]' >Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service