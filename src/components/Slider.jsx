import React from 'react'
import evening from "../assets/image/evening.webp";
import nft from "../assets/image/NFTCalendar.webp";
import mart from "../assets/image/Nebraska-Furniture-Mart-Logo.webp";
import mae from "../assets/image/Fannie-Mae-Logo.webp";

const Slider = () => {
    return (
        <div>
            <div className="px-3 mx-auto max-w-[1140px] pb-[60px] sm:pb-[95px]">
                <div>
                    <h2 className=' font-azo font-normal text-[35px] sm:text-[50px] md:text-[64px] text-white leading-[108%] text-center pt-[100px] pb-[50px]'>Partners</h2>
                    <div className='flex items-center flex-wrap justify-center sm:justify-between gap-[30px] w-full'>
                        <img src={evening} alt="evening" data-aos="fade-down" />
                        <div className="min-h-[127px] w-[5px] rotate-12 shadow-[0_0_15px_#FDDA60] bg-[#FDDA60]  sm:block max-sm:hidden"></div>
                        <img src={nft} alt="nft" data-aos="fade-up" />
                        <div className="min-h-[127px] w-[5px] rotate-12 min-[796.5px]:block hidden shadow-[0_0_15px_#FDDA60] bg-[#FDDA60]"></div>
                        <img src={mart} alt="mart" data-aos="fade-down" />
                        <div className="min-h-[127px] min-[1134.5px]:block min-[515px]:block hidden min-[769.5px]:hidden w-[5px] rotate-12 shadow-[0_0_15px_#FDDA60] bg-[#FDDA60]"></div>
                        <img src={mae} alt="mae" data-aos="fade-up" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
