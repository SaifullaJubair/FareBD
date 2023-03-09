// Anik Datta
import bgParallax from "./images/bg.jpg";
import { Parallax } from "react-parallax";
import Link from "next/link";

const Welcome = () => {
  return (
    <div>
      {/* <div className="bg-primary relative">
            <Parallax strength={500} bgImage={"https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"}>
               <div className="content">
                  <div className="text-content bg-primary opacity-80 p-5 py-10">
                     <h1 className="text-center font-semibold text-secondary text-5xl p-5 bg-white mb-5
                     ">Welcome to FareBD!</h1>
                     <p className="text-center text-md max-w-2xl mx-auto text-white">Welcome to our property sell and rent website! We are thrilled to have you here and hope that you find our platform informative, user-friendly, and beneficial. Our website offers a comprehensive and up-to-date list of properties that are available for rent or sale, along with detailed descriptions, photos, and other essential information to help you make an informed decision.

                           Whether you are looking for your dream home, a new investment property, or a place to rent, we are confident that our website will provide you with an excellent selection of options to choose from. Our team is dedicated to ensuring that your experience on our website is seamless and hassle-free. We are always available to answer any questions you may have and provide any assistance you need.

                           Thank you for choosing our website as your go-to platform for all your property needs. We look forward to helping you find your perfect property!</p>
                  </div>
               </div>
            </Parallax>
         </div> */}
      <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
        <div
          className="inset-0 h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-primary bg-opacity-75"></div>
        <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
          <div
            className="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
            }}
          >
            <div className="grid grid-cols-12 gap-1">
              <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                <div className="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
                  <p className="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                    Welcome To FareBD
                  </p>
                </div>
                <div className="text-gray-400 font-semibold text-xl mb-4">FareBD</div>
                <div className="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                <div className="relative bg-secondary h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                  <div className="p-8">
                    <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                      Welcome to our property sell and rent website! We are
                      thrilled to have you here and hope that you find our
                      platform informative, user-friendly, and beneficial.
                      Whether you are looking for your dream home, a new
                      investment property, or a place to rent, we are confident
                      that our website will provide you with an excellent
                      selection of options to choose from. We look forward to
                      helping you find your perfect property!
                    </p>
                    <div className="bottom-0 absolute p-2 right-0">
                      <Link href={`/about`} className="opacity-75 bg-gray-100 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>LEARN MORE</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// Finished
export default Welcome;
