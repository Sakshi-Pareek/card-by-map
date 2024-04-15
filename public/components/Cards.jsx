"use Client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Lorem1 from "../assets/images/lorem_caed_1.png";
import Lorem2 from "../assets/images/lorem_card_2.png";
import Lorem3 from "../assets/images/lorem_card_3.png";
import { DisNextBtn, DisPrevBtn } from "./Icons";

export default function Cards() {
  const data = [
    {
      image: Lorem1,
    },
    {
      image: Lorem2,
    },
    {
      image: Lorem3,
    },
  ];
  //   ----------slider-------
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const slider3 = useRef(null);
  const arr1 = [
    {
      head: "slider 1",
      Image: Lorem1,
      slide: slider1,
    },
    {
      head: "slider 2",
      Image: Lorem2,
      slide: slider2,
    },
    {
      head: "slider 3",
      Image: Lorem3,
      slide: slider3,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="bg-[#f7f7be] min-h-screen">
        {/* ----------------cards----------- */}
        <h1 className="text-black md:text-[55px] text-4xl text-center font-bold py-5">
          CARDS BY MAP IN NEXTJS
        </h1>
        <div className="flex flex-wrap lg:gap-0 gap-5 lg:justify-between justify-center md:mt-10 mt-5 mx-5">
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
                  className="w-full 2xl:max-w-[380.48px] rounded-[5px] group-hover:scale-[0.99] transition-all duration-500 ease-linear"
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
        {arr1.map((e, index) => {
          return (
            <>
              <div id={index}>
                <div className="mt-5 container mx-auto justify-center items-center max-w-[500px]">
                  <Slider
                    className="text-[30px] font-bold w-full outline-none"
                    ref={e.slide}
                    {...settings}
                  >
                    <div>
                      <h1>{e.head}</h1>
                      <Image
                        src={e.Image}
                        alt="music"
                        className="w-100 max-w-[500px]"
                      />
                    </div>
                    <div>
                      <h1>{e.head}</h1>
                      <Image
                        src={e.Image}
                        alt="music"
                        className="w-100 max-w-[500px]"
                      />
                    </div>
                    <div>
                      <h1>{e.head}</h1>
                      <Image
                        src={e.Image}
                        alt="music"
                        className="w-100 max-w-[500px]"
                      />
                    </div>
                  </Slider>
                  <div className="flex gap-[8px] mt-[30px]">
                    <button
                      onClick={() => e.slide?.current?.slickPrev()}
                      className="pos_rel"
                    >
                      {" "}
                      <DisPrevBtn />
                    </button>
                    <button
                      onClick={() => e.slide?.current?.slickNext()}
                      className="pos_rel"
                    >
                      {" "}
                      <DisNextBtn />
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        {/* ----------------------slider------------- */}
      </div>
    </>
  );
}
