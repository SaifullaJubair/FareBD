import React, { useState } from "react";
import { useForm } from "react-hook-form";
// Anik Datta

const Searchfield = () => {
  // implement search field using react-hook-form
  const [propertyPurpose, setPropertyPurpose] = useState("toRent");
  const [defineOption, setDefineOption] = useState("commercial");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch('http://localhost:5000/search', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)

    })
      .then(res => res.json())
      .then(allData => {
        console.log(allData)

      })

  }
  console.log(errors);

  return (
    <div className="max-w-4xl -mt-36 mb-16 mx-auto shadow-lg border rounded-2xl p-10 text-white bg-gray-400 bg-opacity-25">
      <form
        className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative w-full mb-6 group">
          <label
            for="purpose"
            className="peer-focus:font-medium absolute text-md  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] font-semibold peer-focus:left-0 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Purpose
          </label>
          <select
            id="purpose"
            className="block py-2.5 shadow-md shadow-primary/10 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
            {...register("purpose")}
            onChange={(e) => setPropertyPurpose(e.target.value)}
          >
            <option selected value="" >Select Purpose</option>
            <option value="toSale">
              To Sale
            </option>
            <option value="toRent">To Rent</option>
          </select>
        </div>
        <div className="text-base flex flex-col">
          <label htmlFor="division" className="font-semibold text-lg">
            Division
          </label>
          <select
            className="focus:outline-none rounded-md py-2.5 text-primary"
            {...register("division")}
          >
            <option selected value="" >Select Division</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">
              Chattogram
            </option>
            <option value="Rajsahi">Rajshahi</option>
            <option value="Khulna">Khulna</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Mymensing">Mymensingh</option>
          </select>
        </div>
        <div className="relative w-full mb-6 group">
          <label
            for="areaType"
            className="peer-focus:font-medium absolute text-md  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] font-semibold peer-focus:left-0 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Area Type
          </label>
          <select
            id="areaType"
            className="block py-2.5 shadow-md shadow-primary/10 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
            {...register("areaType")}
            onChange={(e) => setDefineOption(e.target.value)}
          >
            <option selected value="" >Select Area Type</option>
            <option value="residential">Residential</option>
            <option value="commercial">
              Commercial
            </option>
          </select>
        </div>
        <div className="relative w-full mb-6 group">
          <label
            for="category"
            className="peer-focus:font-medium absolute text-md  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] font-semibold peer-focus:left-0 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Category
          </label>
          <select
            id="category"
            className="block py-2.5 shadow-md shadow-primary/10 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
            {...register("category")}
          >
            {defineOption === "commercial" ? (
              <>
                <option selected value="" >Select Category</option>
                <option value="office">
                  Office
                </option>
                <option value="floor">Floor</option>
                <option value="duplex">Duplex</option>
                <option value="building">Building</option>
                <option value="warehouse">Warehouse</option>
                <option value="shop">Shop</option>
                <option value="appartment">Appartment</option>
                <option value="plaza">Plaza</option>
                <option value="plot">Plot</option>
                <option value="factory">Factory</option>
              </>
            ) : (
              <>
                <option selected value="" >Select Division</option>
                <option value="appartment">
                  Appartment
                </option>
                <option value="penthouse">Penthouse</option>
                <option value="plaza">Plaza</option>
                <option value="plot">Plot</option>
                <option value="room">Room</option>
                <option value="duplex">
                  Duplex
                </option>
                <option value="building">Building</option>
              </>
            )}
          </select>
        </div>

        <div className="text-base text-black flex flex-col">
          <label htmlFor="Min Size" className="text-white font-semibold" >Min Size</label>
          <input type="number" {...register("minSize")}></input>
        </div>
        <div className="text-base text-black flex flex-col">
          <label htmlFor="Max Size" className="text-white font-semibold"> Max Size</label>
          <input type="number"  {...register("maxSize")}></input>
        </div>

        <button
          type="submit"
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
               dark:focus:ring-green-800"
        >
          Find
        </button>
      </form>
    </div>
  );
};
// Finished
export default Searchfield;
