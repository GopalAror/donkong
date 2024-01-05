import React, { useState } from 'react'
import Button from './Button'


const Header = () => {
 
  
    return (
        <div>
    
            <div className='relative z-[2]'>
                <div className="max-w-[1140px] px-3 mx-auto flex items-center justify-center flex-col">
                    <h1 className=' text-[35px] sm:text-[50px] md:text-[64px] font-normal leading-[108%]  text-white font-azo text-center pt-[39px]' data-aos="fade-up">WELCOME <br />TO <span className='text-[#F1C85D] relative after:absolute after:bottom-0 after:w-full after:h-[5px] after:bg-[#F1C85D] after:left-0'>DomPKong</span> </h1>
                    <p className='text-white max-w-[565px] text-center text-[16px] font-normal leading-[160%] pt-[14px]' data-aos="fade-up">Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vita</p>
                    <div className=" flex-wrap flex items-center justify-center gap-3 sm:gap-8 pt-[35px]" data-aos="fade-down">
                        <Button text="Whitepaper" />
                        <Button text="Mint" />
                        <Button text="Opensea" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header