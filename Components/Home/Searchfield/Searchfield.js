import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { VscSearch } from "react-icons/vsc";
// Anik Datta

const Searchfield = () => {
  // implement search field using react-hook-form
  const [propertyPurpose, setPropertyPurpose] = useState("toRent");
  const [defineOption, setDefineOption] = useState("commercial");

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    fetch("https://server-fare-bd.vercel.app/search", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((allData) => {
        router.push(
          {
            pathname: "/searchResult",
            query: {
              data: JSON.stringify(allData),
            },
          },
          "/searchResult"
        );
      });
  };

  return (
    <div className="max-w-4xl -mt-40 mb-16 mx-4 md:mx-auto shadow-lg border rounded-2xl p-10 text-white bg-primary bg-opacity-50">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-y-0 lg:gap-x-12 w-full">


          <div className="relative w-full mb-6 group flex flex-col">
            <label htmlFor="purpose" className="font-semibold text-lg pl-1">
              Purpose
            </label>
            <select
              id="purpose"
              className="focus:outline-none rounded-md py-2.5 text-primary"
              {...register("purpose")}
              onChange={(e) => setPropertyPurpose(e.target.value)}
            >
              <option selected value="">
                Select Purpose
              </option>
              <option value="toSale">To Sale</option>
              <option value="toRent">To Rent</option>
            </select>
          </div>
          <div className="text-base flex flex-col">
            <label htmlFor="division" className="font-semibold text-lg pl-1">
              Division
            </label>
            <select
              id="division"
              className="focus:outline-none rounded-md py-2.5 text-primary"
              {...register("division")}
            >
              <option selected value="">
                Select Division
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Rajsahi">Rajshahi</option>
              <option value="Khulna">Khulna</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Mymensing">Mymensingh</option>
            </select>
          </div>
          <div className="relative w-full mb-6 group flex flex-col">
            <label
              for="areaType"
              className="font-semibold text-lg pl-1"
            >
              Area Type
            </label>
            <select
              id="areaType"
              className="focus:outline-none rounded-md py-2.5 text-primary"
              {...register("areaType")}
              onChange={(e) => setDefineOption(e.target.value)}
            >
              <option selected value="">
                Select Area Type
              </option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          <div className="relative w-full mb-6 group flex flex-col">
            <label
              for="category"
              className="font-semibold text-lg pl-1"
            >
              Category
            </label>
            <select
              id="category"
              className="focus:outline-none rounded-md py-2.5 text-primary"
              {...register("category")}
            >
              {defineOption === "commercial" ? (
                <>
                  <option selected value="">
                    Select Category
                  </option>
                  <option value="office">Office</option>
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
                  <option selected value="">
                    Select Division
                  </option>
                  <option value="appartment">Appartment</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="plaza">Plaza</option>
                  <option value="plot">Plot</option>
                  <option value="room">Room</option>
                  <option value="duplex">Duplex</option>
                  <option value="building">Building</option>
                </>
              )}
            </select>
          </div>

          <div className="text-base text-black flex flex-col">
            <label htmlFor="min-size" className="text-white font-semibold pl-1">
              Min Size <small className="font-extralight">(Square Feet)</small>
            </label>
            <input id="min-size" className="focus:outline-none rounded-md py-2.5 text-primary" type="number" {...register("minSize")} placeholder="Enter Size in square feet"></input>
          </div>
          <div className="text-base text-black flex flex-col">
            <label htmlFor="max-size" className="text-white font-semibold pl-1">
              {" "}
              Max Size<small className="font-extralight">(Square Feet)</small>
            </label>
            <input id="max-size" className="focus:outline-none rounded-md py-2.5 text-primary" type="number" {...register("maxSize")} placeholder="Enter Size in square feet"></input>
          </div>

          {/* <Link
          href={{
            pathname: "/searchResult",
            query: searchData,
          }}
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
        </Link> */}
        </div>
        <button
          type="submit"
          className="focus:outline-none
               text-white
               bg-secondary
               hover:bg-opacity-80
               rounded-md
               focus:ring-4
               focus:ring-green-300
               font-medium
               text-lg px-5 py-2.5
               dark:bg-green-600
               dark:hover:bg-green-700
               dark:focus:ring-green-800
               border
               hover:border-gray-300 
               lg:w-1/5 w-1/2 sm:w-1/3 mt-5 lg:mt-0
               flex items-center gap-2 justify-center"
        >
          <VscSearch className="font-bold" size={24} /> Find
        </button>
      </form>
    </div>
  );
};
// Finished
export default Searchfield;
