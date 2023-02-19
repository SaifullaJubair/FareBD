import { MdOutlineRealEstateAgent, MdSupportAgent } from 'react-icons/md';
import { GrMapLocation } from 'react-icons/gr';
import { AiFillFormatPainter } from 'react-icons/ai';
import { GoChecklist } from 'react-icons/go';
import { GiReceiveMoney } from 'react-icons/gi';

const About = () => {
   return (
      <section className="max-w-7xl w-full bg-[#F5F8FA] mx-auto py-24 px-4">
         <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
            <h3 className="text-xl">WHY CHOOSE US</h3>
            <h4 className="text-xl md:text-2xl font-bold my-6 text-center">6 Reasons to Choose FareBD</h4>
            <p className="text-center">Annually, thousands of clients choose Estancy as their real estate agency. Besides having years of experience in real estate industry, there is a variety of reasons why residents over the world choose us. Here are just some of them.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3">

            <div class="max-w-sm p-6 dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
               <div className="p-4">
                  <div className='bg-secondary w-12 h-12 absolute rounded-full'></div>
                  <MdOutlineRealEstateAgent className='text-5xl relative left-6 font-thin' />
               </div>
               <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Professional & Friendly Agents</h5>
               </a>
               <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">Our agents are experienced and understanding experts who deliver fresh and effective solutions.</p>
            </div>

            <div class="max-w-sm p-6 dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
               <div className="p-4">
                  <div className='bg-secondary w-12 h-12 absolute rounded-full'></div>
                  <GrMapLocation className='text-5xl relative left-6 font-thin' />
               </div>
               <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
               </a>
               <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
            </div>

            <div class="max-w-sm p-6 dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
               <div className="p-4">
                  <div className='bg-secondary w-12 h-12 absolute rounded-full'></div>
                  <AiFillFormatPainter className='text-5xl relative left-6 font-thin' />
               </div>
               <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
               </a>
               <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
            </div>

            <div class="max-w-sm p-6 dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
               <div className="p-4">
                  <div className='bg-secondary w-12 h-12 absolute rounded-full'></div>
                  <MdSupportAgent className='text-5xl relative left-6 font-thin' />
               </div>
               <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
               </a>
               <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
            </div>

            <div class="max-w-sm p-6 dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
               <div className="p-4">
                  <div className='bg-secondary w-12 h-12 absolute rounded-full'></div>
                  <GoChecklist className='text-5xl relative left-6 font-thin' />
               </div>
               <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
               </a>
               <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
            </div>

            <div class="max-w-sm p-6 dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
               <div className="p-4">
                  <div className='bg-secondary w-12 h-12 absolute rounded-full'></div>
                  <GiReceiveMoney className='text-5xl relative left-6 font-thin' />
               </div>
               <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
               </a>
               <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
            </div>

         </div>
      </section>
   );
};

export default About;