import React from 'react'

const Teamcard = (props) => {
    return (
        <div className='border-t border-[#FDDA60] mt-[60px] '  data-aos="zoom-in">
            <div className='flex flex-row flex-wrap max-sm:justify-center max-sm:items-center -mx-3 pt-[23px]'>
                <div className=" w-full sm:w-9/12 md:w-6/12 px-3 max-sm:flex flex-col items-center justify-center">
                    <h5 className=' font-montserrat text-[18px] sm:text-[24px] text-white font-bold leading-[108%] max-md:text-center'>{props.name}</h5>
                    <p className=' text-white font-montserrat font-normal text-[14px] sm:text-[20px] leading-[108%] pt-[13px] pb-[32px] max-md:text-center'>{props.nick}</p>
                    <img className='rounded-[20px] border-[3px] border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]' src={props.photo} alt="img" />
                </div>
                <div className=" w-full sm:w-9/12 md:w-6/12 px-3 max-sm:flex flex-col items-center justify-center">
                    <h5 className=' font-montserrat text-[18px] sm:text-[24px] text-white font-bold leading-[108%] pt-8 max-md:text-center md:pt-0'>{props.atname}</h5>
                    <p className=' text-white font-montserrat font-normal text-[16px] sm:text-[20px] leading-[108%] max-md:text-center pt-[13px]'>{props.atnick}</p>
                    <p className=' font-montserrat text-[14px] sm:text-[16px] text-white font-normal leading-[160%] max-md:text-center pt-[32px]'>{props.firstpara}</p>
                    <p className=' font-montserrat text-[14px] sm:text-[16px] text-white font-normal leading-[160%] max-md:text-center pt-[10px]'>{props.secondpara}</p>
                    <div className="flex gap-4 pt-[21px]">
                      <a href="https://www.instagram.com/"> <span>{props.insta}</span></a>
                      <a href="https://twitter.com/i/flow/login"> <span>{props.twitr}</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teamcard
