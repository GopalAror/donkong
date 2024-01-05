import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className={`uppercase  py-[16px] px-[15px] sm:px-[24px] border border-transparent rounded-[4px] after:bg-white after:content-[''] after:h-[250%] after:right-[-75px] after:opacity-100 after:absolute after:top-[-50px] after:rotate-[320deg] after:shadow-[0px_14px_56px_rgb(255,255,255,5)] after:hover:animate-bright after:w-1 after:z-0 overflow-hidden after:shadow-[white] bg-[#FDDA60] duration-500 shadow-[0px_9px_29px_0px_rgba(253,218,96,0.50)] text-[16px] font-normal font-azo text-black mb-0 leading-[108%] relative ${props.className}` }>{props.text}</button>
    </div>
  )
}

export default Button