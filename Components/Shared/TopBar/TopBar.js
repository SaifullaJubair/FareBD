
import { FaFacebook, FaGripLinesVertical, FaInstagram, FaLocationArrow, FaPhoneAlt, FaSkype, FaTwitter, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';

const TopBar = () => {
   return (
      <div className="bg-secondary w-full h-12 hidden md:inline-block">
         <div className='max-w-[1440px] w-[95%] mx-auto flex justify-between'>
            {/* Contact section */}
            <div className="flex space-x-5 py-4">
               <div className='flex space-x-2'>
                  <div className='text-white text-xs'> <FaLocationArrow></FaLocationArrow></div>
                  <p className="text-white text-xs">1216/2, Dhaka City</p>
               </div>
               <div className='flex space-x-2'>
                  <div className="text-white text-xs"><FaPhoneAlt></FaPhoneAlt></div>
                  <p className="text-white text-xs">+(88) 017 800 628</p>
               </div>
               <div className='flex space-x-2'>
                  <div className='text-white text-xs'><FaRegEnvelope></FaRegEnvelope> </div>
                  <p className="text-white text-xs">info.contact@gmail.com</p>
               </div>
            </div>

            {/* Signin/signup & social media section */}
            <div className="flex space-x-4 py-4">
               <div className="text-white text-xs"><button>Register</button></div>
               <div className="text-white text-xs"><button>Login</button></div>
               <div className="text-white text-xs"><FaGripLinesVertical /></div>
               <div className="text-white text-xs"><button><FaFacebook /></button></div>
               <div className="text-white text-xs"><button><FaTwitter /></button></div>
               <div className="text-white text-xs"><button><FaInstagram /></button></div>
               <div className="text-white text-xs"><button><FaSkype /></button></div>
               <div className="text-white text-xs"><button><FaWhatsapp /></button></div>
            </div>
         </div>
      </div>
   );
};

export default TopBar;