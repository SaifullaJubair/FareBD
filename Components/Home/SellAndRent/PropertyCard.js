import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineFullscreen } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TbCurrencyTaka } from "react-icons/tb";
const PropertyCard = ({ propertyData }) => {
  const { user } = useContext(AuthContext);
  // console.log(propertyData);
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }
  const priceWithCommas = numberWithCommas(propertyData?.price);

  return (
    <>
      <div propertyData={propertyData} className="w-full shadow-md ">
        <div className="single-product-wrap style-bottom ">
          <Link
            href={`/singleproperty/${propertyData?._id}`}
            className="thumb relative"
          >
            <span className="-mx-5 -mt-3 shadow-md rounded-br-3xl px-5 w-fit translate-x-4 bg-secondary py-2 translate-y-2 absolute top-0 left-0 text-white">
              {propertyData?.property_condition === "toRent"
                ? "To Rent"
                : "For Sell"}
            </span>
            <img
              className="w-full h-64"
              src={propertyData?.property_picture}
              alt="img"
            />
            <div className="pt-12 bg-gradient-to-t from-black product-wrap-details absolute bottom-0 left-0 w-full px-5 text-white">
              <div className="media flex items-center mb-4 justify-between">
                <div className="author flex items-center justify-between">
                  <img
                    className="bg-primary mr-4 h-12 w-12 rounded-full border-secondary border-2"
                    src={propertyData?.user_image}
                    alt="img"
                  />
                  <div className="media-body text-xs font-medium">
                    <h6 className="mb-1">
                      <a href="#">{propertyData?.user_name}</a>
                    </h6>
                    <p className="flex">
                      <span className="text-xl">
                        <CiLocationOn></CiLocationOn>
                      </span>
                      {propertyData?.location}
                    </p>
                  </div>
                </div>
                <div className="fav-btn float-right cursor-pointer">
                  <span className="text-3xl hover:text-secondary ease-in duration-300">
                    <AiOutlineFullscreen> </AiOutlineFullscreen>
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <>
            <div className="">
              <div className="product-details-inner bg-gray-50 shadow-md py-5 ">
                <div className="bg-secondary w-full">
                  <div className="ml-5 bg-gray-100 pl-4 pr-0 py-2 mb-4">
                    <div className="flex items-center justify-between ">
                      <div className="font-medium mb-2 text-primary">
                        <p className="text-lg md:text-xl lg:text-2xl">
                          {propertyData?.property_name}
                        </p>
                        <p className="mt-1 text-sm capitalize">
                          owner: {propertyData?.owner_name}
                        </p>
                      </div>
                      <div className="mr-3 text-sm">
                        <h2 className="text-xl flex flex-row items-center font-semibold text-orange-600">
                          <TbCurrencyTaka className="inline text-2xl md:text-xl lg:text-2xl" />
                          {priceWithCommas}/-
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ height: "70px" }}>
                  <p className="px-5 inline-block">
                    {propertyData?.property_heading.length > 90
                      ? propertyData?.property_heading.slice(0, 90) + "..."
                      : propertyData?.property_heading}
                  </p>
                </div>
              </div>
              <Link href={`/singleproperty/${propertyData?._id}`}>
                <div className="flex items-center justify-between product-meta-bottom font-medium text-primary bg-gray-100 py-2 pl-5">
                  <span>
                    <span className="text-gray-600 font-normal">
                      {propertyData?.post_date}
                    </span>
                  </span>
                  <button
                    type="submit"
                    class="text-white bg-secondary px-8 py-2 rounded-l-3xl "
                  >
                    More Details
                  </button>
                </div>
              </Link>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
