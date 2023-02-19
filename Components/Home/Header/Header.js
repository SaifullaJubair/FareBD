import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";

import { useEffect, useState } from "react";

import home1 from "../../../assets/images/home-1.jpg";
import home2 from "../../../assets/images/home-2.jpg";
import home3 from "../../../assets/images/home-3.jpg";

const Header = () => {
  const swiperSlideStyles = {
    width: "270px",
    height: "300px",
    overflow: "hidden",
    borderRadius: "5px",
  };

  const [loopTrigger, setLoopTrigger] = useState(false);
  const setSlidesLoop = () => {
    setLoopTrigger(window.innerWidth >= 1023 ? true : false);
  };

  useEffect(() => {
    // Initially set the amount of slides on page load
    setSlidesLoop();
    // Add the event listener on component mount
    window.addEventListener("resize", setSlidesLoop);
    // Remove the listener on unmount
    return () => {
      window.removeEventListener("resize", setSlidesLoop);
    };
  }, []);

  return (
    <div className="flex flex-col-reverse items-center justify-between gap-10 overflow-x-hidden lg:gap-0 lg:flex-row py-14">
      <div className="w-full max-w-[530px] mx-auto">
        <h1 className="text-4xl font-semibold">
          Find your destination in an easy way
        </h1>
        <p className="mt-8 mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          natus aliquam pariatur blanditiis corrupti esse.
        </p>
        <button className="px-5 py-2 font-semibold text-white transition duration-300 rounded-sm shadow-md bg-secondary shadow-secondary/60 hover:shadow-secondary/90 active:shadow-sm">
          Find Now!
        </button>
      </div>

      <Swiper
        loop={loopTrigger}
        effect={"coverflow"}
        slidesPerView={3}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide style={swiperSlideStyles}>
          {({ isActive }) => (
            <div
              className={`${
                isActive
                  ? " border-4 rounded-md overflow-hidden border-primary/50"
                  : null
              } w-full h-full`}
            >
              <img
                className={`object-cover w-full h-full transition duration-300 `}
                src={home1.src}
              />
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide style={swiperSlideStyles}>
          {({ isActive }) => (
            <div
              className={`${
                isActive
                  ? " border-4 rounded-md overflow-hidden border-primary/50"
                  : null
              } w-full h-full`}
            >
              <img
                className={`object-cover w-full h-full transition duration-300 `}
                src={home2.src}
              />
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide style={swiperSlideStyles}>
          {({ isActive }) => (
            <div
              className={`${
                isActive
                  ? " border-4 rounded-md overflow-hidden border-primary/50"
                  : null
              } w-full h-full`}
            >
              <img
                className={`object-cover w-full h-full transition duration-300 `}
                src={home3.src}
              />
            </div>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
