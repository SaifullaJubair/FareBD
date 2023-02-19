
// import { GoLocation } from '@/react-icons/fa';
import { MapPinIcon } from '@heroicons/react/24/solid'

const TopBar = () => {
   return (
      <div className="bg-secondary w-full h-12 topbar invisible lg:visible">
         <div className='max-w-[1440px] w-[95%] mx-auto flex justify-between'>
            <div className="flex justufy-between py-4">

               <div className='flex'>
                  <div className='text-white'> <MapPinIcon></MapPinIcon></div>
                  <p className="text-white text-xs">420 Love Sreet 133/2 flx City</p>
               </div>

               <div>
                  <p className="text-white text-xs">+(06) 017 800 628</p>
               </div>
               <div>
                  <p className="text-white text-xs">info.contact@gmail.com</p>
               </div>
            </div>


            <div className="flex justufy-between py-4">
               <div className="text-white text-xs">Register</div>
               <div className="text-white text-xs">Login</div>
            </div>
         </div>
      </div>
   );
};

export default TopBar;