import { FiFacebook, FiInstagram, FiLinkedin, FiPhoneCall, FiTwitter, FiYoutube } from 'react-icons/fi'
import { TfiEmail } from 'react-icons/tfi'
import { IoLocationOutline } from 'react-icons/io5'
import { IoIosArrowForward, IoIosArrowUp } from 'react-icons/io'
import { GrPinterest, GrSkype } from 'react-icons/gr';
const Footer = () => {
   return (
      // Footer Section Added
      <footer className="bg-primary text-white">
         <div className='max-w-[1440px] w-[95%] mx-auto py-20'>
            <div className="grid grid-cols-1 md:grid-cols-4">
               <div>
                  <h2 className="mb-6 text-2xl font-semibold dark:text-white">Contact Us</h2>
                  <ul className="dark:text-gray-400">
                     <li>
                        <p className="flex items-center gap-2 mb-2"><FiPhoneCall />(+88)01234567890</p>
                     </li>
                     <li>
                        <p className="flex items-center gap-2 mb-2"><TfiEmail />office@example.com</p>
                     </li>
                     <li>
                        <p className="flex items-center gap-2 mb-2"><IoLocationOutline />Dhaka, Bangladesh</p>
                     </li>
                  </ul>
               </div>
               <div>
                  <h2 className="mb-6 text-2xl font-semibold dark:text-white">Useful Links</h2>
                  <ul className="dark:text-gray-400">
                     <li>
                        <a href="#" className="hover:underline flex items-center "><IoIosArrowForward />About Us</a>
                     </li>
                     <li>
                        <a href="#" className="hover:underline flex items-center"><IoIosArrowForward />Blog</a>
                     </li>
                     <li>
                        <a href="#" className="hover:underline flex items-center"><IoIosArrowForward />Pricing</a>
                     </li>
                     <li>
                        <a href="#" className="hover:underline flex items-center"><IoIosArrowForward />Contact Us</a>
                     </li>
                  </ul>
               </div>
               <div>
                  <h2 className="mb-6 text-2xl font-semibold dark:text-white">Rent with us</h2>
                  <ul className="dark:text-gray-400">
                     <li>
                        <a href="#" className="hover:underline flex items-center"><IoIosArrowForward />Rent a House</a>
                     </li>
                     <li>
                        <a href="#" className="hover:underline flex items-center"><IoIosArrowForward />Book Now</a>
                     </li>
                     <li>
                        <a href="#" className="hover:underline flex items-center"><IoIosArrowForward />Book your Rooms</a>
                     </li>
                     <li>
                        <a href="#" className="hover:underline flex items-center"><IoIosArrowForward />Buy your Place</a>
                     </li>
                     <li>
                        <a href="#" className="hover:underline flex items-center"><IoIosArrowForward />Privacy Policy</a>
                     </li>
                  </ul>
               </div>
               <div>
                  <h2 className="mb-6 text-2xl font-semibold dark:text-white">Recent Posts</h2>
                  <ul className="dark:text-gray-400 items-center">
                     <li className="mb-4 hover:underline">
                        <a href="#">
                           <div className='flex gap-4'>
                              <img src="https://img.freepik.com/free-vector/modern-house-template_575670-12.jpg" alt="" className='w-16 h-16 rounded-md border' />
                              <div>
                                 <h4>New house</h4>
                                 <p>February 19, 2023</p>
                              </div>
                           </div>
                        </a>
                     </li>
                     <li className="mb-4 hover:underline">
                        <a href="#">
                           <div className='flex gap-4'>
                              <img src="https://img.freepik.com/free-vector/modern-house-template_575670-12.jpg" alt="" className='w-16 h-16 rounded-md border' />
                              <div>
                                 <h4>New house</h4>
                                 <p>February 19, 2023</p>
                              </div>
                           </div>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="p-4 mt-20 rounded-lg shadow border md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 items-center">
               <span className="text-sm text-white sm:text-center dark:text-gray-400">Copyright by Confidence. All right Reserved © 2023
               </span>
               <button><IoIosArrowUp className='text-6xl text-secondary font-extrabold' /></button>
               <ul className="flex flex-wrap items-center justify-center mt-3 text-3xl text-center text-white dark:text-gray-400 sm:mt-0 gap-4">
                  <li>
                     <a href="#" className="hover:underline"><FiFacebook className='border p-1 rounded-full' /></a>
                  </li>
                  <li>
                     <a href="#" className="hover:underline"><FiTwitter className='border p-1 rounded-full' /></a>
                  </li>
                  <li>
                     <a href="#" className="hover:underline"><FiYoutube className='border p-1 rounded-full' /></a>
                  </li>
                  <li>
                     <a href="#" className="hover:underline"><GrPinterest className='border p-1 rounded-full' /></a>
                  </li>
                  <li>
                     <a href="#" className="hover:underline"><FiLinkedin className='border p-1 rounded-full' /></a>
                  </li>
                  <li>
                     <a href="#" className="hover:underline"><GrSkype className='border p-1 rounded-full' /></a>
                  </li>
                  <li>
                     <a href="#" className="hover:underline"><FiInstagram className='border p-1 rounded-full' /></a>
                  </li>
               </ul>
            </div>

         </div>
      </footer>
   );
};

export default Footer;