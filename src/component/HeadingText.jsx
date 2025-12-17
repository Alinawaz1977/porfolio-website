import React from 'react'

const HeadingText = ({ text1, text2 }) => {
    return (
        <div className='' >
            <div className='text-3xl font-bold md:text-[4vw] text-white' >
                {text1} <span className='text-[#00d8ff]' >{text2}</span>
            </div>
        </div>
    )
}

export default HeadingText
