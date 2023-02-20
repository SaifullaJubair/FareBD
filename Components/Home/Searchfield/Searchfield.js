
import React from "react";
import { useForm } from 'react-hook-form';
// Anik Datta 

const Searchfield = () => {

   // implement search field using react-hook-form

   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = data => console.log(data);
   console.log(errors);


   return (
      <div className="max-w-4xl mx-auto shadow-lg border rounded-2xl p-10 text-primary bg-teal-50">
         <form className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-12" onSubmit={handleSubmit(onSubmit)}>
            <div className="text-base flex flex-col">
               <label htmlFor="location" className="font-semibold text-lg">Location</label>
               <input id="location" className="focus:outline-none rounded-md py-2.5" type="text" placeholder="Location (city, state, area)"
                  {...register("location", {required: true})}
               />
            </div>
            <div className="text-base flex flex-col">
               <label htmlFor="propertyType" className="font-semibold text-lg">Property Type</label>
               <select className="focus:outline-none rounded-md py-2.5" {...register("propertyType", { required: true })}>
                  <option value="" disabled>Select Property Type</option>

                  <option value="apartment">Apartment</option>
                  <option value="duplex">Duplex</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="office">Office</option>
               </select>
            </div>
            <div className="text-base flex flex-col">
               <label htmlFor="propertySize" className="font-semibold text-lg">Property Size</label>
               <select className="focus:outline-none rounded-md bg-lime-900 py-2.5" {...register("sqft", { required: true })}>
                  <option value="" disabled>Select Property Size</option>

                  <option value="900">900 sq. ft</option>
                  <option value="1400">1400 sq. ft</option>
                  <option value="1800">1800 sq. ft</option>
                  <option value="3000">3000 sq. ft</option>
               </select>
            </div>
            <button type="submit"
               className="focus:outline-none
               text-white
               bg-secondary
               hover:opacity-90
               rounded-md
               focus:ring-4
               focus:ring-green-300
               font-medium
               text-lg px-5 py-2.5
               dark:bg-green-600
               dark:hover:bg-green-700
               dark:focus:ring-green-800">Find</button>
         </form>
      </div>
   );
};
// Finished
export default Searchfield;