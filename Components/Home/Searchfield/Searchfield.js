
import React from "react";
import { useForm } from 'react-hook-form';
// Anik Datta 

const Searchfield = () => {

   // implement search field using react-hook-form

   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = data => console.log(data);
   console.log(errors);


   return (
      <div className="max-w-[1440px] w-[95%] mx-auto">
         <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Location (city, state, area)"
               {...register("location", {required: true})}
            />
            <select {...register("Title", { required: true })}>
               <option value="apartment">Apartment</option>
               <option value="duplex">Duplex</option>
               <option value="penthouse">Penthouse</option>
               <option value="office">Office</option>
            </select>
            <input type="submit" />
         </form>
      </div>
   );
};

export default Searchfield;