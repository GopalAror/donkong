import React, { useState } from 'react'
import bottal from "../assets/image/bottal.png";
import Button from './Button';
const Mint = () => {
    const [first, setfirst] = useState(3)
    function add() {
        setfirst(first + 1)
        if (first === 9) {
            setfirst(first)
        }
    }
    function sub() {
        setfirst(first - 1)
        if (first === 1) {
            setfirst(first)
        }
    }
    const maincount = first < 10 ? `0${first}` : first;
    return (
        <div className='bg-[url(./assets/image/bg-mint.png)] bg-100% bg-no-repeat w-full'>
            <div className="px-3 mx-auto max-w-[1140px]">
                <div className="flex flex-row flex-wrap -mx-3 justify-center items-center">
                    <div className=" sm:pt-0 pt-[30px] w-[80%] md:w-6/12 px-3 flex items-center justify-center" data-aos="fade-down">
                        <img className='max-h-[700px]' src={bottal} alt="bottal" />
                    </div>
                    <div className=" w-[80%] md:w-6/12 px-3 flex-col flex  justify-center md:pt-0 pt-[40px]" data-aos="fade-up">
                        <h3 className=' sm:text-[45px] text-[35px] md:text-[64px] font-azo font-normal text-white leading-[108%]'>Mint NFT</h3>
                        <div className="flex flex-wrap flex-row -mx-3 pt-[20px] sm:pt-[50px]">
                            <div className='w-[50%] px-3'>
                                <div>
                                    <p className=' font-montserrat text-[25px] sm:text-[36px] font-black  text-white leading-[108%]'>9999</p>
                                    <p className='sm:text-[16px] text-white text-[14px] font-montserrat pt-3 leading-[160%] font-normal'>of 10,000 minted</p>
                                </div>
                                <div className='pt-[15px] sm:pt-[30px]'>
                                    <p className=' font-montserrat text-[25px] sm:text-[36px] font-black  text-white leading-[108%]'>Max 9</p>
                                    <p className='sm:text-[16px] text-[14px] text-white font-montserrat pt-3 leading-[160%] font-normal'>NFTs per transaction</p>
                                </div>
                            </div>
                            <div className='w-[50%] px-3'>
                                <div>
                                    <p className=' font-montserrat sm:text-[36px] text-[25px] font-black  text-white leading-[108%]'>.2 ETH</p>
                                    <p className=' text-[14px] sm:text-[16px] text-white font-montserrat pt-3 leading-[160%] font-normal'>per NFT</p>
                                </div>
                                <div className=' pt-[25px] sm:pt-[30px]'>
                                    <p className=' font-montserrat text-[25px] sm:text-[36px] font-black  text-white leading-[108%]'>Max 2</p>
                                    <p className=' text-[14px] sm:text-[16px] text-white font-montserrat pt-3 leading-[160%] font-normal'>Transaction per wallet</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 pt-[45px]">
                            <button className='text-black rounded-[4px] font-montserrat font-black text-[36px] w-[75px] h-[65px] bg-white' onClick={sub}>-</button>
                            <p className=' w-full border-2 border-white rounded-[4px] text-[36px] font-montserrat font-black text-center pt-3 text-white leading-[108%]'>{maincount}</p>
                            <button className='text-black rounded-[4px] font-montserrat font-black text-[36px] w-[75px] h-[65px] bg-white' onClick={add}>+</button>
                        </div>
                        <Button className='w-full mt-[29px]' text='MINT NOW'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mint