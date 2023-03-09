import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";
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
    <div className="pt-14 pb-10 max-w-[1440px] w-[95%] mx-auto">

      <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
        Photo Gallery
      </h1>


      <Swiper
        loop={loopTrigger}
        effect={"coverflow"}
        slidesPerView={3}
        grabCursor={true}
        centeredSlides={false}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide style={swiperSlideStyles}>
          <div className=" border-4 rounded-md overflow-hidden border-primary/50 w-full h-full">
            <img
              className="object-cover w-full h-full transition duration-300"
              src={home1.src}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={swiperSlideStyles}>
          <div className=" border-4 rounded-md overflow-hidden border-primary/50 w-full h-full">
            <img
              className="object-cover w-full h-full transition duration-300"
              src={home2.src}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={swiperSlideStyles}>
          <div className=" border-4 rounded-md overflow-hidden border-primary/50 w-full h-full">
            <img
              className="object-cover w-full h-full transition duration-300"
              src={home3.src}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
