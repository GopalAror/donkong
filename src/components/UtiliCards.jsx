import React from 'react'

const UtiliCards = (props) => {
    return (
        <div className=' w-[90%] sm:w-[50%] lg:w-[33.33%] px-3 mt-5'  data-aos="flip-left">
            <div className="p-[16px] sm:p-[25px] flex gap-4 duration-500 flex-col items-center relative justify-center overflow-hidden border border-[#585651] bg-[#222222] w-full hover:bg-[#FDDA60] hover:border-white rounded-[16px] group hover:shadow-[0px_14px_56px_0px_rgba(253,218,96,0.50)]">
                <div className="w-[91px] h-[91px] bg-white blur-[76px] absolute top-[-10%] right-[-10%]"></div>
                <div className="w-[91px] h-[91px] bg-white blur-[76px] absolute bottom-[-10%] left-[-10%]"></div>
               <span>{props.img}</span>
                <h4 className=' font-montserrat duration-500 text-white text-[18px] sm:text-[24px] font-semibold leading-[108%] text-center group-hover:text-black'>{props.heading}</h4>
                <p className=' font-montserrat duration-500 text-[14px] sm:text-[16px] font-normal leading-[160%] text-center text-white group-hover:text-black'>{props.para}</p>
            </div>
        </div>
    )
}

export default UtiliCards