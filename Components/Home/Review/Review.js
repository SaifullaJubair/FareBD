import { Button } from "flowbite-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FaStar, IconName } from "react-icons/fa";
const responsive = {
   superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
   },
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
   },
   tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
   },
   mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
   }
};
const Review = () => {
   return (
      <div className="py-14 max-w-[1440px] w-[95%] mx-auto">
         <Carousel responsive={responsive}>
            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
               <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                     <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                           <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                           <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maiores ex aspernatur eaque corporis distinctio similique voluptatum labore eum vitae autem.
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                           <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                           <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                     </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-primary ">
                     <img src='https://www.shutterstock.com/image-photo/young-buisnessman-wearing-eyeglasses-jacket-260nw-1713757231.jpg' alt="" className="w-20 h-20 mb-2 border-violet-600 -mt-16 bg-center bg-cover rounded-full border-2 dark:bg-gray-500 dark:bg-gray-700" />
                     <p className="text-xl font-semibold leading-tight text-white ">Distinctio Animi</p>
                     <p className="text-xl uppercase flex  justify-center items-center  text-white">4.5 <span className="text-yellow-400 ml-1"><FaStar></FaStar></span>  </p>
                  </div>
               </div>
            </div>
            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
               <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                     <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                           <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                           <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maiores ex aspernatur eaque corporis distinctio similique voluptatum labore eum vitae autem.
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                           <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                           <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                     </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-primary ">
                     <img src='https://www.shutterstock.com/image-photo/young-buisnessman-wearing-eyeglasses-jacket-260nw-1713757231.jpg' alt="" className="w-20 h-20 mb-2 border-violet-600 -mt-16 bg-center bg-cover rounded-full border-2 dark:bg-gray-500 dark:bg-gray-700" />
                     <p className="text-xl font-semibold leading-tight text-white ">Distinctio Animi</p>
                     <p className="text-xl uppercase flex  justify-center items-center  text-white">4.5 <span className="text-yellow-400 ml-1"><FaStar></FaStar></span>  </p>
                  </div>
               </div>
            </div>
            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
               <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                     <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                           <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                           <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maiores ex aspernatur eaque corporis distinctio similique voluptatum labore eum vitae autem.
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                           <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                           <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                     </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-primary ">
                     <img src='https://www.shutterstock.com/image-photo/young-buisnessman-wearing-eyeglasses-jacket-260nw-1713757231.jpg' alt="" className="w-20 h-20 mb-2 border-violet-600 -mt-16 bg-center bg-cover rounded-full border-2 dark:bg-gray-500 dark:bg-gray-700" />
                     <p className="text-xl font-semibold leading-tight text-white ">Distinctio Animi</p>
                     <p className="text-xl uppercase flex  justify-center items-center  text-white">4.5 <span className="text-yellow-400 ml-1"><FaStar></FaStar></span>  </p>
                  </div>
               </div>
            </div>
            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
               <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                     <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                           <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                           <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maiores ex aspernatur eaque corporis distinctio similique voluptatum labore eum vitae autem.
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                           <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                           <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                     </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-primary ">
                     <img src='https://www.shutterstock.com/image-photo/young-buisnessman-wearing-eyeglasses-jacket-260nw-1713757231.jpg' alt="" className="w-20 h-20 mb-2 border-violet-600 -mt-16 bg-center bg-cover rounded-full border-2 dark:bg-gray-500 dark:bg-gray-700" />
                     <p className="text-xl font-semibold leading-tight text-white ">Distinctio Animi</p>
                     <p className="text-xl uppercase flex  justify-center items-center  text-white">4.5 <span className="text-yellow-400 ml-1"><FaStar></FaStar></span>  </p>
                  </div>
               </div>
            </div>

         </Carousel>
      </div>

   );
};

export default Review;