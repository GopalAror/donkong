import React, { useState } from 'react'
import logo from "../assets/image/logo.png";
import twitr from "../assets/image/twitr.png";
import open from "../assets/image/opensea.svg";
import diamond from "../assets/image/daimond.svg";
import discord from "../assets/image/discord.svg";
import mlogo from "../assets/image/m-logo.svg";
import telegram from "../assets/image/cib_telegram.svg";
const Nav = () => {
  const [modal, setmodal] = useState(false);
  function Mymodal() {
    setmodal(!modal);
  }
  return (
    <div>
      <div
        className={` ${modal ? "block" : "hidden"
          } w-full h-full fixed bg-[#000000a3]  z-40 `}
      ></div>
      <div className="flex justify-center">
        <div
          className={` ${modal ? "top-0 m-10" : "top-[-100%] m-0"
            } fixed top-0 w-[250px] h-[200px] rounded-[20px] duration-300 bg-[#FDDA60] z-[60] mx-auto flex-col flex justify-center items-center`}
        >
          <p className="text-base text-black hover:text-white font-AzoSans font-normal duration-300">
            It is a Modal
          </p>
          <button
            onClick={Mymodal}
            className="text-base text-white hover:text-[#000] font-AzoSans font-normal duration-300 mt-4 hover:bg-white bg-[#000] border border-black px-3 py-2 rounded-[8px] "
          >
            Back
          </button>
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto px-3 relative">
        <div className="flex sm:justify-center items-center">
          <img src={logo} className='max-w-[116px]' alt="#" />
          <button onClick={Mymodal} className="absolute right-0 me-3 after:bg-white after:content-[''] after:h-[250%] after:right-[-75px] after:opacity-100 after:absolute after:top-[-50px] after:rotate-[320deg] after:shadow-[0px_14px_56px_rgb(255,255,255,5)] after:hover:animate-bright after:w-1 after:z-0 overflow-hidden after:shadow-[white] top-[15px] flex py-[16px] px-[10px] sm:px-[24px] justify-center items-center border border-transparent rounded-[4px] bg-[#FDDA60] duration-500 shadow-[0px_9px_29px_0px_rgba(253,218,96,0.50)] text-[16px] font-normal font-azo text-black mb-0 leading-[108%] mt-1">
            Connect Wallet
          </button>
        </div>
        <div className="flex justify-center items-center pt-[19px] w-full gap-6">
          <a href="https://twitter.com/i/flow/login" target='_blank'><img className='hover:-translate-y-1 duration-500' src={twitr} alt="#" /></a>
          <a href="https://opensea.io/" target='_blank'><img className='hover:-translate-y-1 duration-500' src={open} alt="#" /></a>
          <a href="#"><img className='hover:-translate-y-1 duration-500' src={diamond} alt="#" /></a>
          <a href="https://discord.com/" target='_blank'><img className='hover:-translate-y-1 duration-500' src={discord} alt="#" /></a>
          <a href="#"><img className='hover:-translate-y-1 duration-500' src={mlogo} alt="#" /></a>
          <a href="https://web.telegram.org/k/" target='_blank'><img className='hover:-translate-y-1 duration-500' src={telegram} alt="#" /></a>
        </div>
      </div>
    </div>
  )
}

export default Nav
