import React from 'react'
import cars from "../assets/image/cars.png";
import boast from "../assets/image/boast.png";
import watches from "../assets/image/watches.png";

const About = () => {
  return (
    <div className='bg-[#0A0A0A] max-sm:overflow-x-hidden'>
        <div className="mx-auto  max-w-[1140px] px-3 py-[120px]">
            <div className='flex flex-wrap -mx-3 flex-row'>
                <div className='px-3  w-full lg:w-[50%]'>
                    <h2 className=' font-azo font-normal text-[35px] sm:text-[50px] md:text-[64px] text-white leading-[108%]' data-aos="fade-right">About</h2>
                    <p className='max-w-[522px] font-montserrat text-[14px] sm:text-[16px] leading-[160%] text-white' data-aos="fade-right">Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                </div>
                <div className="w-[50%] sm:w-full lg:w-[50%] px-3">
                    <div className="container1 mx-auto mb-[4%] mt-[40%] sm:mt-[15%] lg:my-[4%] w-[210px] h-[140px] relative">
                        <div className="w-[216px] h-[216px] bg-[#FDDA60] blur-[131px] absolute"></div>
                        <div id="carousel" className='w-[80%] sm:w-full lg:w-[60%] xl:w-full h-full absolute'>                                                                                                                                           
                            <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img id='slider' src={cars} alt="car"   data-aos="fade-down" /></figure>
                            <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img id='slider1' src={watches} alt=""  data-aos="fade-down" /></figure>
                            <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img id='slider2' src={boast} alt="boast" data-aos="fade-down"  /></figure>
                            <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img id='slider3' src={cars} alt="boast"  data-aos="fade-down" /></figure>
                            <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img id='slider4' src={watches} alt="watches"  data-aos="fade-down" /></figure>
                            <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img id='slider5' src={cars} alt="car"  data-aos="fade-down" /></figure>
                            <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img id='slider6' src={boast} alt="boast"  data-aos="fade-down" /></figure>
                            <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img id='slider7' src={watches} alt="watches"  data-aos="fade-down" /></figure>
                            <figure className=' absolute block left-[10px] top-[10px] bg-transparent'><img id='slider8' src={watches} alt="watches" data-aos="fade-down"  /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
