import React, { useState } from "react";
import backtopicon from "../assets/image/backtopicon.png";
const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button className="group animate-bounce border-0 flex justify-center items-center p-2 w-[45px] h-[45px] rounded-[100%] bg-[#FDDA60] fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300  hover:bg-white hover:shadow-[1px_1px_5px_5px_white] "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
                <img className="w-full" src={backtopicon} alt="backtoptop" />
            </button>
        </div>
    );
};

export default BackToTop;