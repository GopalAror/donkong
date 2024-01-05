import React from "react";
import roadmonk from "../assets/image/roadmap-img.png";
import ring from "../assets/image/timeline.png";
import Button from "./Button";
const Roadmap = () => {
  return (
    <div className="bg-[#0A0A0A] relative z-[1] py-[40px] sm:py-[94px] overflow-hidden">
      <div className="max-w-[1175px] relative mx-auto px-3 ">
        <h2 className=" text-white text-center pt-[40px] font-azo  sm:text-[64px] text-[40px] font-normal leading-[64px]">
          Roadmap
        </h2>
        <div className=" relative md:inline-block flex  justify-center">
          <img
            src={roadmonk}
            alt="roadmonk"
            className="pt-[50px] md:pt-[187px] max-w-[243px] lg:max-w-[318px]"
            data-aos="fade-right"
          />
          <img
            src={ring}
            alt="ring"
            className=" md:block hidden absolute left-[-26%] max-w-[372px] max-h-[464px] lg:max-w-[510px] lg:max-h-[550px] top-[24%] lg:top-[17%]"
            data-aos="fade-right"
          />
        </div>
        <div className="flex text-center sm:text-start flex-col sm:flex-row items-center gap-5 sm:gap-[45px] group pt-6 pb-6 md:absolute md:left-[34%] lg:left-[28%] top-[18%] 2xl:left-[25%]"  data-aos="fade-left">
          <span className="lg:block hidden">
            <svg
              width="179"
              height="12"
              viewBox="0 0 179 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" group-hover:fill-[#FDDA60] duration-300"
                d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM167.667 6.00001C167.667 8.94553 170.054 11.3333 173 11.3333C175.946 11.3333 178.333 8.94553 178.333 6.00002C178.333 3.0545 175.946 0.666681 173 0.666681C170.054 0.666681 167.667 3.0545 167.667 6.00001ZM6 7L173 7.00001L173 5.00001L6 5L6 7Z"
                fill="#FFF"
              />
            </svg>
          </span>
          <p className=" group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_#72632F] duration-300 text-xl font-montserrat font-black leading-[21px] rounded-[38px] text-black bg-white py-[27px] px-[15px]">
            20%
          </p>
          <div>
            <p className=" text-white font-azo text-xl font-normal leading-[21px] ">
              Phase 1
            </p>
            <p className="pt-2 text-white font-montserrat text-base font-normal leading-[25px] max-w-[550px]">
              Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu
              viverra ullamcorper condimentum massa laoree
            </p>
          </div>
        </div>
        <div className=" flex text-center sm:text-start flex-col sm:flex-row items-center gap-5 sm:gap-[45px] group pb-6 md:absolute md:left-[42%] lg:left-[36%] top-[34%] 2xl:left-[35%] "  data-aos="fade-left">
          <span className="lg:block hidden">
            <svg
              width="109"
              height="12"
              viewBox="0 0 109 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:fill-[#FDDA60] duration-300"
                d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM97.6667 6.00001C97.6667 8.94553 100.054 11.3333 103 11.3333C105.946 11.3333 108.333 8.94553 108.333 6.00001C108.333 3.05449 105.946 0.666675 103 0.666675C100.054 0.666675 97.6667 3.05449 97.6667 6.00001ZM6 7L103 7.00001L103 5.00001L6 5L6 7Z"
                fill="white"
              />
            </svg>
          </span>
          <p className=" group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_#72632F] duration-300 text-xl font-montserrat font-black leading-[21px] rounded-[38px] text-black bg-white py-[27px] px-[15px]">
            40%
          </p>
          <div>
            <p className=" text-white font-azo text-xl font-normal leading-[21px] ">
              Phase 2
            </p>
            <p className=" pt-2 text-white font-montserrat text-base font-normal leading-[25px] max-w-[550px]">
              Amet viverra diam netus aenean at mauris, facilisis quis. Urna
              euismod sed ultricies arcu ullamcorper
            </p>
          </div>
        </div>
        <div className="flex text-center sm:text-start flex-col sm:flex-row items-center gap-5 sm:gap-[45px] group pb-6 md:absolute md:left-[44%] lg:left-[38%] top-[46.5%] 2xl:left-[38%]"  data-aos="fade-left">
          <span className="lg:block hidden">
            <svg
              width="123"
              height="12"
              viewBox="0 0 123 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" group-hover:fill-[#FDDA60] duration-300"
                d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM111.667 6C111.667 8.94552 114.054 11.3333 117 11.3333C119.946 11.3333 122.333 8.94552 122.333 6C122.333 3.05448 119.946 0.666667 117 0.666667C114.054 0.666667 111.667 3.05448 111.667 6ZM6 7H117V5H6V7Z"
                fill="white"
              />
            </svg>
          </span>
          <p className=" group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_#72632F] duration-300 text-xl font-montserrat font-black leading-[21px] rounded-[38px] text-black bg-white py-[27px] px-[15px]">
            60%
          </p>
          <div>
            <p className=" text-white font-azo text-xl font-normal leading-[21px] ">
              Phase 3
            </p>
            <p className="  pt-2 text-white font-montserrat text-base font-normal leading-[25px] max-w-[550px]">
              Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in
              elit nibh faucibus mauris.
            </p>
          </div>
        </div>
        <div className="flex text-center sm:text-start flex-col sm:flex-row items-center gap-5 sm:gap-[45px] group pb-6 md:absolute md:left-[44%] lg:left-[36%] top-[60%] 2xl:left-[36%] "  data-aos="fade-left">
          <span className="lg:block hidden">
            <svg
              width="97"
              height="12"
              viewBox="0 0 97 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" group-hover:fill-[#FDDA60]"
                d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM85.6667 6.00001C85.6667 8.94553 88.0545 11.3333 91 11.3333C93.9455 11.3333 96.3333 8.94553 96.3333 6.00001C96.3333 3.05449 93.9455 0.666674 91 0.666674C88.0545 0.666674 85.6667 3.05449 85.6667 6.00001ZM6 7L91 7.00001L91 5.00001L6 5L6 7Z"
                fill="white"
              />
            </svg>
          </span>
          <p className=" group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_#72632F] duration-300 text-xl font-montserrat font-black leading-[21px] rounded-[38px] text-black bg-white py-[27px] px-[15px]">
            80%
          </p>
          <div>
            <p className=" text-white font-azo text-xl font-normal leading-[21px] ">
              Phase 4
            </p>
            <p className=" pt-2 text-white font-montserrat text-base font-normal leading-[25px] max-w-[550px]">
              Ut egestas lacus nec varius blandit volutpat, malesuada nunc,
              nisl. Nisl mattis convallis lacus tristique.
            </p>
          </div>
        </div>
        <div className="flex text-center sm:text-start flex-col sm:flex-row items-center gap-5 sm:gap-[45px] group pb-6 md:absolute md:left-[38%] lg:left-[31%] top-[74%] 2xl:left-[28%] "  data-aos="fade-left">
          <span className="lg:block hidden">
            <svg
              width="133"
              height="12"
              viewBox="0 0 133 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" group-hover:fill-[#FDDA60] duration-300"
                d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM121.667 6.00001C121.667 8.94553 124.054 11.3333 127 11.3333C129.946 11.3333 132.333 8.94553 132.333 6.00001C132.333 3.05449 129.946 0.666677 127 0.666677C124.054 0.666677 121.667 3.05449 121.667 6.00001ZM6 7L127 7.00001L127 5.00001L6 5L6 7Z"
                fill="white"
              />
            </svg>
          </span>
          <p className=" group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_#72632F] duration-300 text-xl font-montserrat font-black leading-[21px] rounded-[38px] text-black bg-white py-[27px] px-[11px]">
            100%
          </p>
          <div>
            <p className=" text-white font-azo text-xl font-normal leading-[21px] ">
              Phase 5
            </p>
            <p className=" pt-2 text-white font-montserrat text-base font-normal leading-[25px] max-w-[550px]">
              Faucibus congue risus nisl dictum. A, viverra malesuada nunc
              varius. Ut dignissim mauris eu sed nisl neque.
            </p>
          </div>
        </div>
        <div className="md:pt-[191px] pt-6 flex justify-center">
          <Button text="Read Our Whitepaper" />
        </div>
      </div>
    </div>
  );
};
export default Roadmap;