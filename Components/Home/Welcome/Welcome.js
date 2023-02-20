// Anik Datta
import bgParallax from "./images/bg.jpg";
import { Parallax } from "react-parallax";

const Welcome = () => {
   return (
      <div>
         <div className="bg-primary relative">
            <Parallax className="rounded-2xl absolute" strength={500} bgImage={"https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"}>
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
         </div>
      </div>
   );
};
// Finished
export default Welcome;