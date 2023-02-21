import React from "react";

const Hero = () => {
  return (
    <div className="duration-300 md:col-span-2 ">
      <div
        className="flex min-h-[800px] h-full  items-end justify-center opacity-100"
        style={{
          background: `linear-gradient(0deg, #000000 12%, rgba(6, 6, 6, 0) 100%) , url(https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white  pb-72">
          <h2 className="px-3 py-6 mb-2 text-5xl font-bold text-center text-white">
            Find Your <span className="">Dream House</span>
          </h2>

          <div className="inline-flex items-center justify-center w-full mb-8">
            <hr className="w-64 h-1 my-8 border-0 rounded bg-secondary dark:bg-gray-700 text-secondary" />
            <div className="absolute px-4 pt-1 -translate-x-1/2 bg-secondary left-1/2 dark:bg-gray-900">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-700 dark:text-gray-300"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>

          <div className="flex text-lg ">
            <p className="text-center">
              Achieving financial security is only possible if you invest your
              money so that it grows. <br /> If you're thinking about adding
              real estate to your portfolio,
              <br /> check out this guide to buying a home to rent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
