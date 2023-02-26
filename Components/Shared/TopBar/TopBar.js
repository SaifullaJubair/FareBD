
import Link from 'next/link';
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
               <div className="text-white text-xs"><Link href={'/register'}>Register</Link></div>
               <div className="text-white text-xs"><Link href={'/login'}>Login</Link></div>
               <div className="text-white text-xs"><FaGripLinesVertical /> </div>
               <div className="text-white text-xs"><Link href={'https://www.facebook.com/'}><FaFacebook /></Link></div>
               <div className="text-white text-xs"><Link href={'https://twitter.com/'}><FaTwitter /></Link></div>
               <div className="text-white text-xs"><Link href={'https://www.instagram.com/?hl=en'}><FaInstagram /></Link></div>
               <div className="text-white text-xs"><Link href={'https://www.skype.com/en/'}><FaSkype /></Link></div>
               <div className="text-white text-xs"><Link href={'/'}><FaWhatsapp /></Link></div>
            </div>
         </div>
      </div>
   );
};

export default TopBar;