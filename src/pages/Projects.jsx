import React from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Projects = ({id}) => {
    const navigate = useNavigate(null)
    return (
        <div id={id} className='overflow-hidden min-h-screen  w-screen flex flex-col justify-center  items-center bg-[#313849]' >
            <h1 className='text-3xl text-white md:text-[4vw] font-bold text-center py-10' >Our <span className='text-center text-[#00d8ff]' >Projects</span></h1>
            <div className='flex flex-wrap flex-col mx-5 md:mx-0 md:flex-row gap-5' >
                <div onClick={() => navigate('https://foreverfrontend-phi.vercel.app/')} className="w-[90vw] group relative mx-auto h-[25vh] md:w-[30vw] md:h-[30vh] text-white rounded-md overflow-hidden">
                    <img
                        className="w-full h-full object-cover object-top rounded-md transition-transform duration-200 group-hover:scale-105 cursor-pointer"
                        src={assets.project1}
                        alt=""
                    />
                    <div
                        className="
                        absolute inset-0
                        flex flex-col justify-center
                        p-5
                        bg-linear-to-b from-[#006071] to-[#00d9ff51]
                        opacity-0
                        translate-y-full
                        transition-all duration-300
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        pointer-events-none
                        "
                    >
                        <h1 className="text-center text-2xl">E-commerce website</h1>
                        <h1 className="text-center">Full stack e-commerce website</h1>
                        <div className='flex justify-center' >
                            <a className='bg-red-600 pointer-events-auto px-5 py-1 rounded-md mt-5' target='_blank' href="https://foreverfrontend-phi.vercel.app/">open it </a>
                        </div>
                    </div>

                </div>
                <div onClick={() => navigate('https://doctorfrontend-eight.vercel.app/')} className="w-[90vw] group relative mx-auto h-[25vh] md:w-[30vw] md:h-[30vh] text-white rounded-md overflow-hidden">

                    <img
                        className="w-full h-full object-cover object-top rounded-md transition-transform duration-200 group-hover:scale-105 cursor-pointer"
                        src={assets.project2}
                        alt=""
                    />

                    <div
                        className="
      absolute inset-0
      flex flex-col justify-center
      p-5
      bg-linear-to-b from-[#006071] to-[#00d9ff51]
      opacity-0
      translate-y-full
      transition-all duration-300
      group-hover:opacity-100
      group-hover:translate-y-0
      pointer-events-none
    "
                    >
                        <h1 className="text-center text-2xl">Doctor Appointment Booking App</h1>
                        <h1 className="text-center">A web app for booking appointments of doctors</h1>
                         <div className='flex justify-center' >
                            <a className='bg-red-600 pointer-events-auto px-5 py-1 rounded-md mt-5' target='_blank' href="https://doctorfrontend-eight.vercel.app/">open it </a>
                        </div>
                    </div>

                </div>
                <div onClick={() => navigate('https://blog-application-six-rust.vercel.app/')} className="w-[90vw]  group relative mx-auto h-[25vh] md:w-[30vw] md:h-[30vh] text-white rounded-md overflow-hidden">

                    <img
                        className="w-full h-full object-cover object-top rounded-md transition-transform duration-200 group-hover:scale-105 cursor-pointer"
                        src={assets.project3}
                        alt=""
                    />

                    <div
                        className="
      absolute inset-0
      flex flex-col justify-center
      p-5
      bg-linear-to-b from-[#006071] to-[#00d9ff51]
      opacity-0
      translate-y-full
      transition-all duration-300
      group-hover:opacity-100
      group-hover:translate-y-0
      pointer-events-none
    "
                    >
                        <h1 className="text-center text-2xl">Blog Application</h1>
                        <h1 className="text-center">A Blog application</h1>
                         <div className='flex justify-center' >
                            <a className='bg-red-600 pointer-events-auto px-5 py-1 rounded-md mt-5' target='_blank' href="https://blog-application-six-rust.vercel.app/">open it </a>
                        </div>
                    </div>
                </div>
                <div onClick={() => navigate('https://agencywebsite-five.vercel.app/')} className="w-[90vw]  group relative mx-auto h-[25vh] md:w-[30vw] md:h-[30vh] text-white rounded-md overflow-hidden">

                    <img
                        className="w-full h-full object-cover object-top rounded-md transition-transform duration-200 group-hover:scale-105 cursor-pointer"
                        src={assets.project4}
                        alt=""
                    />

                    <div
                        className="
      absolute inset-0
      flex flex-col justify-center
      p-5
      bg-linear-to-b from-[#006071] to-[#00d9ff51]
      opacity-0
      translate-y-full
      transition-all duration-300
      group-hover:opacity-100
      group-hover:translate-y-0
      pointer-events-none
    "
                    >
                        <h1 className="text-center text-2xl">Blog Application</h1>
                        <h1 className="text-center">A Blog application</h1>
                         <div className='flex justify-center' >
                            <a className='bg-red-600 pointer-events-auto px-5 py-1 rounded-md mt-5' target='_blank' href="https://blog-application-six-rust.vercel.app/">open it </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
