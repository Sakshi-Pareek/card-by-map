"use Client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import { DisNextBtn, DisPrevBtn } from "./Icons";

export default function SlideCArd() {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };
  const data = [
    {
      image: "/assets/images/Lorem_card_1.png",
    },
    {
      image: "/assets/images/lorem_card_2.png",
    },
    {
      image: "/assets/images/lorem_card_3.png",
    },
  ];
  //   ----------slider-------
  //   const slider1 = useRef(null);
  //   const slider2 = useRef(null);
  //   const slider3 = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="bg-[#f7f7be] min-h-screen">
        {/* ----------------cards----------- */}
        <h1 className="text-black md:text-[55px] text-4xl text-center font-bold py-5">
          CARDS BY MAP IN NEXTJS
        </h1>
        <div className="flex flex-wrap lg:gap-0 gap-5 lg:justify-between justify-center md:mt-10 mt-5 lg:mx-[90px] mx-5">
          {data.map((a, index) => (
            <div
              className="lg:w-[31.8%] sm:w-[48%] group"
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="linear"
            >
              <div className="bg-white rounded-[5px] sm:p-3 p-2 group-hover:shadow-[0_3px_10px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear group cursor-pointer">
                <Image
                  src={a.image}
                  alt="cardimg"
                  width={"100"}
                  height={"100"}
                  className="w-full rounded-[5px] group-hover:scale-[0.99] transition-all duration-500 ease-linear"
                />
                <h2 className="text-[#025066] text-[25px] font-bold leading-[139.687%] mb-2.5 mt-5">
                  Lorem ipsum dolo
                </h2>
                <p className="text-base font-normal leading-[139.687%] text-[#4E8594] mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
                  convallis lobortis. Proin ullamcorper
                </p>
                <a
                  href=""
                  className="text-[#025066] text-base !leading-[120.187%] font-bold flex items-center gap-2 mb-2.5"
                >
                  VIEW PROJECTS
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* --------------cards----------------- */}
        {/* ----------------------slider------------- */}

        <div className="mt-28 container mx-auto justify-center items-center ">
          <h2 className="text-black md:text-[55px] text-4xl text-center font-bold py-10">
            SLIDER BY MAP IN NEXTJS
          </h2>
          <Slider
            className="text-[30px] font-bold w-full outline-none"
            {...settings}
            ref={sliderRef}
          >
            {data.map((a, index) => (
              <div
                className="lg:w-[31.8%] sm:w-[48%] group "
                key={index}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="linear"
              >
                <div className="bg-white rounded-[5px] sm:p-3 p-2 group-hover:shadow-[0_3px_10px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear group cursor-pointer mx-3">
                  <Image
                    src={a.image}
                    alt="card img"
                    width={"100"}
                    height={"100"}
                    className="w-full rounded-[5px] group-hover:scale-[0.99] transition-all duration-500 ease-linear"
                  />
                  <h2 className="text-[#025066] text-[25px] font-bold leading-[139.687%] mb-2.5 mt-5">
                    Lorem ipsum dolo
                  </h2>
                  <p className="text-base font-normal leading-[139.687%] text-[#4E8594] mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi feugiat molestie ex quis finibus. Quisque tincidunt
                    dolor ut convallis lobortis. Proin ullamcorper
                  </p>
                  <a
                    href=""
                    className="text-[#025066] text-base !leading-[120.187%] font-bold flex items-center gap-2 mb-2.5"
                  >
                    VIEW PROJECTS
                  </a>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex gap-[8px] mt-[30px]">
            <button onClick={handlePrev} className="pos_rel">
              {" "}
              <DisPrevBtn />
            </button>
            <button onClick={handleNext} className="pos_rel">
              {" "}
              <DisNextBtn />
            </button>
          </div>
        </div>
        {/* ----------------------slider------------- */}
      </div>
    </>
  );
}
