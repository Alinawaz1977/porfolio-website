import React, { useRef } from 'react'
import HeadingText from '../component/HeadingText'
import axios from 'axios'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Contact = ({ id }) => {
  const form = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.from(".contactHeading", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".contactHeading",
        start: "top 100%",
        scrub: 2,
        end: 'top 70%'
      }
    })
    gsap.from(".inputAni", {
        y: 100,
        opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".inputAni",
        start: "top 100%",
        scrub: 2,
        end: 'top 70%'
      }
  })
})


  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      await emailjs
        .sendForm(import.meta.env.VITE_SERVICEID, import.meta.env.VITE_TEMPLATEID, form.current, {
          publicKey: import.meta.env.VITE_PUBLICKEY,
        })
      form.current.reset()
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <form id={id} ref={form} onSubmit={handleSubmit(onSubmit)} className='min-h-screen flex flex-col justify-center items-center w-screen overflow-hidden bg-[#151825]' >
      <div className='text-center py-5' >
        <div className='contactHeading'>
          <HeadingText text1={'Contact'} text2={"Us"} />
        </div>
      </div>
      <div className='flex flex-col  gap-3' >
        <div className='flex flex-col md:flex-row gap-4' >
          <input name='user_name' required className='inputAni px-5 rounded-md bg-gray-700 w-full text-white md:w-[30vw] py-2' placeholder='Name' type="text" />
          <input name='user_email' className='inputAni px-5 rounded-md bg-gray-700 w-full text-white md:w-[30vw] py-2' placeholder='Email Address' type="email" required />
        </div>
        <div>
          <textarea name='message' className='inputAni text-white w-full md:w-[61.3vw] h-[40vh] bg-gray-700 rounded-md px-5 pt-2 outline-none' placeholder='Your Message'></textarea>
        </div>
      </div>
      {isSubmitting ? (
        <span className='text-white font-medium px-4 py-2 mt-3'>Submitting...</span>
      ) : (
        <button
          className='text-white font-medium px-4 py-2 rounded-sm cursor-pointer mt-3 shadow-[0_0_20px_5px_rgba(0,216,255,0.7)] duration-300 hover:shadow-[0_0_20px_0px_rgba(0,216,255,0.7)] bg-[#00d8ff]'
          type="submit"
        >
          Send Message
        </button>
      )}

    </form>
  )
}

export default Contact
