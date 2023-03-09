import { useForm } from '@formspree/react';
import { toast } from 'react-toastify';
const ContactUs = () => {
   const [state, handleSubmit] = useForm("mlevqzpe");
   if (state.succeeded) {
      toast("login success", {
         position: toast.POSITION.TOP_CENTER,
      });

   }
   return (
      <div>
         <section className="py-6 bg-primary text-gray-50 mb-16">
            <div className="grid py-14 max-w-[1440px] w-[95%] mx-auto grid-cols-1 items-center md:grid-cols-2 md:divide-x">
               <div className="py-6 md:py-0 md:px-6">
                  <h1 className="text-4xl font-bold">Get in touch</h1>
                  <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                  <div className="space-y-4">
                     <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                           <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Fake address, 9999 City</span>
                     </p>
                     <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                           <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                        <span>123456789</span>
                     </p>
                     <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                           <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                           <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        <span>contact@business.com</span>
                     </p>
                  </div>
               </div>
               <form onSubmit={handleSubmit} className="flex flex-col  py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                  <div className="gap-8  grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
                     <label className="block">
                        <span className="mb-1">First name</span>
                        <input type="text" name='firstName' placeholder="Leroy Jenkins" className="block w-full text-black rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                     </label>
                     <label className="block">
                        <span className="mb-1">Lest name</span>
                        <input type="text" name='lastName' placeholder="Leroy Jenkins" className="block w-full text-black rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                     </label>
                     <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" name='email' placeholder="leroy@jenkins.com" className="block w-full text-black rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                     </label>
                     <label className="block">
                        <span className="mb-1">Subject</span>
                        <input name='subject' type="text" placeholder="Subject" className="block w-full text-black rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                     </label>
                  </div>


                  <label className="block">
                     <span className="mb-1">Message</span>
                     <textarea name='message' rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 text-black focus:ring-violet-400 dark:bg-gray-800"></textarea>
                  </label>
                  <button type="submit" className="self-center  ease-in duration-300 bg-secondary px-8 py-3 text-lg hover:bg-primary ">Submit</button>
               </form>
            </div>
         </section>

      </div>
   );
};

export default ContactUs;