import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import { Avatar } from "flowbite-react";
import Link from "next/link";
import { useContext } from "react";


const Navbar = () => {
   const { user, logout } = useContext(AuthContext);
   console.log(user);

   const handleLogOut = () => {
      logout()
         .then(() => { })
         .catch(error => console.log(error))
   }
   return (
      <div className="bg-primary">
         <nav className="max-w-[1440px] w-[95%] mx-auto text-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
               <Link href="/" className="flex items-center">
                  <img src="https://i.ibb.co/9vLTqg9/image.png" className="h-9 mr-3 sm:h-12" alt="farebd Logo" />
                  <span className="self-center text-4xl font-bold whitespace-nowrap dark:text-white">Fare<span className="text-secondary">BD</span></span>
               </Link>
               <div className="flex md:order-2 gap-2">
                  {user ?
                     <div className="hidden md:flex">
                        <Link href='/userprofile'>
                           <Avatar
                              img={user?.photoURL}
                              rounded={true}
                              className="border rounded-full"
                           />
                        </Link>
                        <button type="button" onClick={handleLogOut} className="ml-2 text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
                     </div>
                     :
                     <>
                        <Link href='/login' ><button type="button" className="text-white btn btn-xs btn-outline border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button></Link>
                        <Link href='/register' ><button type="button" className="hidden lg:flex text-white btn border bg-secondary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button></Link>
                     </>}
                  <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                     <span className="sr-only">Open main menu</span>
                     <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </button>

               </div>
               <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                  <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-primary dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                     <li>
                        <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
                     </li>
                     <li>
                        <Link href="/" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Property</Link>
                     </li>
                     <li>
                        <Link href="/about" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
                     </li>
                     <li>
                        <Link href="/contact" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
