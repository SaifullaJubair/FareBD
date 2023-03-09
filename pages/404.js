import Link from "next/link";

const error = () => {
   return (
      <div class="bg-gradient-to-r from-secondary to-blue-200">
         <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
            <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
               <div class="border-t border-gray-200 text-center pt-8">
                  <h1 class="text-9xl font-bold text-secondary">404</h1>
                  <h1 class="text-6xl font-medium py-8">oops! Page not found</h1>
                  <p class="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                  <Link href='/'><button class=" bg-primary text-white font-semibold px-6 py-3 rounded-md mr-6">
                     HOME
                  </button></Link>
                  <Link href='/contact'><button class="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
                     Contact Us
                  </button></Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default error;