import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { useEffect, useState } from "react";

import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

import person1 from "../../../assets/images/client1.jpg";
import person2 from "../../../assets/images/client2.jpg";
import person3 from "../../../assets/images/client3.jpg";
import person4 from "../../../assets/images/client4.jpg";
import ReviewSlide from "./ReviewSlide";

const slideContent = [
  {
    img: person1,
    text: "So happy with my hair and make up and the hair lasted until the next day photos also. Miss you and thank you again so much for everything.",
    client: "Jacqui ",
    corporation: "Hong Kong, China",
  },
  {
    img: person2,
    text: "Thank you again for your help in making me look glamorous and glad you liked the gift! All the best to you",
    client: "Jessica",
    corporation: "Sydney, Australia",
  },
  {
    img: person3,
    text: "Thank you so much for everything. Not only are you excellent at your job but I really enjoyed meeting you.",
    client: "Katie",
    corporation: "Austin, USA",
  },
  {
    img: person4,
    text: "Thank you so much! My mother, sister and I had such a nice day getting ready and we were all thrilled with our hair and makeup!!",
    client: "Ivana",
    corporation: "Moscow, Russia",
  },
];

const Review = () => {
  const [slides, setSlides] = useState(0);
  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 550
        ? 1
        : window.innerWidth <= 768
          ? 2
          : window.innerWidth > 1023
            ? 3
            : 0
    );
  };

  useEffect(() => {
    // Initially set the amount of slides on page load
    setSlidesPerview();
    // Add the event listener on component mount
    window.addEventListener("resize", setSlidesPerview);
    // Remove the listener on unmount
    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);

  return (
    <div className="pt-36 pb-20">
      <div className="sm:max-w-[960px] mx-auto relative px-3 ">
        <div className="container flex justify-center mx-auto pb-4">
          <div>
            <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
              What people are saying.
            </h1>
          </div>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={slides}
          spaceBetween={80}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {slideContent.map((el, i) => (
            <SwiperSlide key={i}>
              <ReviewSlide
                client={el.client}
                corporation={el.corporation}
                img={el.img}
                text={el.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
