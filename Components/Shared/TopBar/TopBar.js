
import { FaFacebook, FaGripLinesVertical, FaInstagram, FaLocationArrow, FaPhoneAlt, FaSkype, FaTwitter, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';

const TopBar = () => {
   return (
      <div className="bg-secondary w-full h-12 invisible lg:visible">
         <div className='max-w-[1440px] w-[95%] mx-auto flex justify-between'>
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

            <div className="flex space-x-4 py-4">
               <div className="text-white text-xs">Register</div>
               <div className="text-white text-xs">Login</div>
               <div className="text-white text-xs"><FaGripLinesVertical></FaGripLinesVertical></div>
               <div className="text-white text-xs"><FaFacebook></FaFacebook></div>
               <div className="text-white text-xs"><FaTwitter></FaTwitter></div>
               <div className="text-white text-xs"><FaInstagram></FaInstagram></div>
               <div className="text-white text-xs"><FaSkype></FaSkype></div>
               <div className="text-white text-xs"><FaWhatsapp></FaWhatsapp></div>
            </div>
         </div>
      </div>
   );
};

export default TopBar;