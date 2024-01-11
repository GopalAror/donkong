import React, { useState } from "react";
import plus from "../assets/image/plus.webp";
import subTrack from "../assets/image/subTrack.webp";
import FooterLogo from "../assets/image/footer-logo.webp";
import FooterTwiter from "../assets/image/twitr.svg";
import FooterShip from "../assets/image/opensea-logo.svg";
import FooterDiamand from "../assets/image/Frame.svg";
import FooterDiscord from "../assets/image/discord-foot.svg";
import FooterM from "../assets/image/m-foot.svg";
import Footertelgram from "../assets/image/telegram-foot.svg";

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "Arcu faucibus diam feugiat magna etiam.",
      content:
        " Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. ",
    },
    {
      title: "Fermentum tortor aenean.",
      content:
        "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.",
    },
    {
      title: "Dictum est amet sollicitudin.",
      content:
        "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.",
    },
    {
      title: "Sed vulputate mi faucibus.",
      content:
        "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.",
    },
    {
      title: "Commodo placerat ultricies.",
      content:
        "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.",
    },
    {
      title: "Nunc amet cursus morbi donec.",
      content:
        "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.",
    },
  ];
  const y = new Date();
  const year = y.getFullYear();
  return (
    <div className="bg-[url(./assets/image/bg-accordian.webp)] bg-no-repeat h-full bg-100%">
      <div className="container max-w-[900px] px-3 mx-auto 2xl:max-w-[1320px] pt-[100px]">
        <h1 className="text-white text-[35px] sm:text-[45px] md:text-[64px] font-azo font-normal leading-[108%] text-center lg:pb-[50px]">
          FAQs
        </h1>
        <div className="w-full transition-all ease-linear duration-300 " data-aos="fade-right">
          {accordionData.map((item, index) => (
            <div
              className="border-b-[3px] border-[#FFDA60] mb-[5px] transition-all ease-linear duration-300 "
              key={index}
            >
              <div
                className={`${openAccordion === index ? "px-3" : "pb-[17px]"
                  } pt-[25px]   text-white font-montserrat text-[16px] md:text-[22px] font-bold leading-[108%] transition-all ease-linear duration-300`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <div>{item.title}</div>
                  <div className="text-[#FDDDA60]">
                    {openAccordion === index ? (
                      <img src={subTrack} alt="plus" />
                    ) : (
                      <img src={plus} alt="plus" />
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`accordion-content text-white text-[14px] md:text-base font-montserrat font-normal leading-[160%] transition-all ease-linear duration-300 ${openAccordion === index ? "open px-3 pb-5 pt-[9px]" : ""
                  }`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-[92px]">
        <div className="max-w-[310px] max-h-[230px] mx-auto">
          <img className="w-full" src={FooterLogo} alt="footerLogo" />
        </div>
        <div className="flex gap-6 items-center justify-center py-7">
          <a href="https://twitter.com/i/flow/login" target="_blank">
            <img className=" duration-500 hover:-translate-y-2" src={FooterTwiter} alt="footer" />
          </a>
          <a href="https://opensea.io/" target="_blank">
            <img className=" duration-500 hover:-translate-y-2" src={FooterShip} alt="footer" />
          </a>
          <a href="#!">
            <img className=" duration-500 hover:-translate-y-2" src={FooterDiamand} alt="footer" />
          </a>
          <a href="https://discord.com/" target="_blank">
            <img className=" duration-500 hover:-translate-y-2" src={FooterDiscord} alt="footer" />
          </a>
          <a href="#!">
            <img className=" duration-500 hover:-translate-y-2" src={FooterM} alt="footer" />
          </a>
          <a href="https://web.telegram.org/k/" target="_blank">
            <img className=" duration-500 hover:-translate-y-2" src={Footertelgram} alt="footer" />
          </a>
        </div>
      </div>
      <p className="text-base font-montserrat font-normal text-center leading-normal border-t border-white  pt-4 pb-5 text-white">
        © DomPKong {year}
      </p>
    </div>
  );
};

export default Faq;