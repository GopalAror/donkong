import React, { useState } from 'react'
import main4 from "../assets/image/main.png";
import main5 from "../assets/image/white-monkey.png";
import main8 from "../assets/image/black-monkey.png";
import main1 from "../assets/image/img1-main.png";
import main2 from "../assets/image/img2-main.png";
import main3 from "../assets/image/img3-main.png";
import main6 from "../assets/image/img6-main.png";
import main7 from "../assets/image/img7-main.png";
import main9 from "../assets/image/img9-main.png";
import kong1 from "../assets/image/img1-kong.png";
import kong2 from "../assets/image/img2-kong.png";
import kong3 from "../assets/image/img3-kong.png";
import kong4 from "../assets/image/img4-kong.png";
import kong5 from "../assets/image/img5-kong.png";
import kong6 from "../assets/image/img6-kong.png";
import kong7 from "../assets/image/img7-kong.png";
import kong8 from "../assets/image/img8-kong.png";
import kong9 from "../assets/image/img9-kong.png";
import kong10 from "../assets/image/img10-kong.png";

const Kong = () => {
    const [first, setfirst] = useState("Tab4");
    function ChangeTab(Tab) {
        setfirst(Tab);
    }
    return (
        <div className="relative pt-[30px] sm:pt-[125px] pb-[94px] overflow-hidden">
            <div className="container 2xl:max-w-[1320px] max-w-[1140px] px-3 mx-auto">
                <h1 className="sm:text-[45px] text-[35px] md:text-[64px] font-azo font-normal text-white leading-[108%] text-center">
                    THE KONGS
                </h1>
                <div className=' min-[500px]:h-[600px] h-[400px] sm:h-[950px]'>
                    {first === "Tab1" && (
                        <div className="flex justify-center max-w-[786px] mx-auto">
                            <img
                                className="w-full pb-[100px] mb-[100px]"
                                src={main1}
                                alt="main"
                                data-aos="zoom-out"
                            />
                        </div>
                    )}
                    {first === "Tab2" && (
                        <div className="flex justify-center max-w-[786px] mx-auto">
                            <img
                                className="w-full pb-[100px] mb-[100px]"
                                src={main2}
                                alt="main"
                                data-aos="zoom-out"
                            />
                        </div>
                    )}
                    {first === "Tab3" && (
                        <div className="flex justify-center max-w-[786px] mx-auto">
                            <img
                                className="w-full pb-[100px] mb-[100px]"
                                src={main3}
                                alt="main"
                                data-aos="zoom-out"
                            />
                        </div>
                    )}
                    {first === "Tab4" && (
                        <div className="flex justify-center max-w-[786px] mx-auto">
                            <img
                                className="w-full pb-[100px] mb-[100px]"
                                src={main4}
                                alt="main"
                                data-aos="zoom-out"
                            />
                        </div>
                    )}
                    {first === "Tab5" && (
                        <div className="flex justify-center max-w-[786px] mx-auto">
                            <img
                                className="w-full pb-[100px] mb-[100px]"
                                src={main5}
                                alt="main"
                                data-aos="zoom-out"
                            />
                        </div>
                    )}
                    {first === "Tab6" && (
                        <div className="flex justify-center max-w-[786px] mx-auto">
                            <img
                                className="w-full pb-[100px] mb-[100px]"
                                src={main6}
                                alt="main"
                                data-aos="zoom-out"
                            />
                        </div>
                    )}
                    {first === "Tab7" && (
                        <div className="flex justify-center max-w-[786px] mx-auto">
                            <img
                                className="w-full pb-[100px] mb-[100px]"
                                src={main7}
                                alt="main"    
                                data-aos="zoom-out"                            
                            />
                        </div>
                    )}
                    {first === "Tab8" && (
                        <div className="flex justify-center max-w-[786px] mx-auto">
                            <img
                                className="w-full pb-[100px] mb-[100px]"
                                src={main8}
                                alt="main"
                                data-aos="zoom-out"
                            />
                        </div>
                    )}
                    {first === "Tab9" && (
                        <div className="flex justify-center max-w-[786px] mx-auto">
                            <img
                                className="w-full pb-[100px] mb-[100px]"
                                src={main9}
                                alt="main"
                                data-aos="zoom-out"
                            />
                        </div>
                    )}
                    {first === "Tab10" && (
                        <div className="flex justify-center max-w-[786px] mx-auto">
                            <img
                                className="w-full pb-[100px] mb-[100px]"
                                src={main1}
                                alt="main"
                                data-aos="zoom-out"
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="overflow-x-scroll md:overflow-auto flex  gap-3 ">
                <div
                    onClick={() => ChangeTab("Tab1")}
                    className="sticky  md:absolute  md:top-[30%] md:left-0 lg:top-[10%] lg:left-0 xl:left-[-2%] md:max-w-[120px] lg:max-w-[180px]"
                >
                    <img
                        className="w-[180px] max-w-[115px] sm:max-w-[300px] md:w-full"
                        src={kong1}
                        alt="hugh"
                        data-aos="zoom-out-right"
                    />
                </div>
                <div
                    onClick={() => ChangeTab("Tab2")}
                    className="sticky  md:absolute  md:top-[25%] md:left-[20%] lg:top-[26%]  lg:left-0 xl:left-[5%] md:max-w-[120px] lg:max-w-[180px]"
                >
                    <img
                        className="w-[180px] max-w-[115px] sm:max-w-[300px] md:w-full"
                        src={kong2}
                        alt="Rambo"
                        data-aos="zoom-out-right"
                    />
                </div>
                <div
                    onClick={() => ChangeTab("Tab3")}
                    className="sticky  md:absolute  md:top-[15%] md:left-[44%] lg:top-[43%] lg:left-0 xl:left-[10%] md:max-w-[120px] lg:max-w-[180px]"
                >
                    <img
                        className="w-[180px] max-w-[115px] sm:max-w-[300px] md:w-full"
                        src={kong3}
                        alt="Rambo"
                        data-aos="zoom-out-right"
                    />
                </div>
                <div onClick={() => ChangeTab("Tab4")}
                    className="sticky  md:absolute  md:right-0 md:top-[30%] lg:top-[60%]  lg:left-0 xl:left-[5%] md:max-w-[120px] lg:max-w-[180px]"
                >
                    <img
                        className="w-[180px] max-w-[115px] sm:max-w-[300px] md:w-full"
                        src={kong4}
                        alt="Rambo"
                        data-aos="zoom-out-right"
                    />
                </div>
                <div
                    onClick={() => ChangeTab("Tab5")}
                    className="sticky  md:absolute md:right-[22%] md:top-[25%] lg:top-[78%] lg:left-0 xl:left-[-2%] md:max-w-[120px] lg:max-w-[180px]"
                >
                    <img
                        className="w-[180px] max-w-[115px] sm:max-w-[300px] md:w-full"
                        src={kong5}
                        alt="Rambo"
                        data-aos="zoom-out-right"
                    />
                </div>
                <div
                    onClick={() => ChangeTab("Tab6")}
                    className="sticky  md:absolute md:top-[86%] md:right-[62%] lg:top-[10%] lg:right-0 xl:right-[-2%] md:max-w-[120px] lg:max-w-[180px]"
                >
                    <img
                        className="w-[180px] max-w-[115px] sm:max-w-[300px] md:w-full"
                        src={kong6}
                        alt="hugh"
                        data-aos="zoom-out-left"
                    />
                </div>
                <div
                    onClick={() => ChangeTab("Tab7")}
                    className="sticky  md:absolute md:top-[81%] md:right-[80%] lg:top-[26%]  lg:right-0  xl:right-[5%] md:max-w-[120px] lg:max-w-[180px]"
                >
                    <img
                        className="w-[180px] max-w-[115px] sm:max-w-[300px] md:w-full"
                        src={kong7}
                        alt="Rambo"
                        data-aos="zoom-out-left"
                    />
                </div>
                <div
                    onClick={() => ChangeTab("Tab8")}
                    className="sticky  md:absolute md:bottom-0 md:right-[43%] lg:top-[43%] lg:right-0  xl:right-[10%] md:max-w-[120px] lg:max-w-[180px]"
                >
                    <img
                        className="w-[180px] max-w-[115px] sm:max-w-[300px] md:w-full"
                        src={kong8}
                        alt="Rambo"
                        data-aos="zoom-out-left"
                    />
                </div>
                <div
                    onClick={() => ChangeTab("Tab9")}
                    className="sticky  md:absolute md:bottom-[5%] md:right-[22%] lg:bottom-[26%]  lg:right-0  xl:right-[5%] md:max-w-[120px] lg:max-w-[180px]"
                >
                    <img
                        className="w-[180px] max-w-[115px] sm:max-w-[300px] md:w-full"
                        src={kong9}
                        alt="Rambo"
                        data-aos="zoom-out-left"
                    />
                </div>
                <div
                    onClick={() => ChangeTab("Tab10")}
                    className="sticky  md:absolute md:bottom-[10%] md:right-0 lg:bottom-[8%] lg:right-0  xl:right-[-2%] md:max-w-[120px] lg:max-w-[180px]"
                >
                    <img
                        className="w-[180px] max-w-[115px] sm:max-w-[300px] md:w-full"
                        src={kong10}
                        alt="Rambo"
                        data-aos="zoom-out-left"
                    />
                </div>
            </div>
        </div>
    )
}
export default Kong
