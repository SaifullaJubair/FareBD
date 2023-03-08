import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineFullscreen } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TbCurrencyTaka } from "react-icons/tb";
import soldImg from "../../../assets/images/sold.png";
const PropertyCard = ({ propertyData }) => {
  const { user } = useContext(AuthContext);
  console.log(propertyData);
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }
  const priceWithCommas = numberWithCommas(propertyData?.price);

  return (
    <>
      <div propertyData={propertyData} className="w-full shadow-md">
        <div className="relative single-product-wrap style-bottom">
          {propertyData?.paid && (
            <img
              className="absolute top-0 right-0 z-10 w-20"
              src={soldImg.src}
              alt="sold"
            />
          )}
          <Link
            href={`/singleproperty/${propertyData?._id}`}
            className="relative thumb"
          >
            {!propertyData?.paid && (
              <span className="absolute top-0 left-0 px-5 py-2 -mx-5 -mt-3 text-white translate-x-4 translate-y-2 shadow-md rounded-br-3xl w-fit bg-secondary">
                {propertyData?.property_condition === "toRent"
                  ? "To Rent"
                  : "For Sell"}
              </span>
            )}

            <img
              className="w-full h-64"
              src={propertyData?.property_picture}
              alt="img"
            />
            <div className="absolute bottom-0 left-0 w-full px-5 pt-12 text-white bg-gradient-to-t from-black product-wrap-details">
              <div className="flex items-center justify-between mb-4 media">
                <div className="flex items-center justify-between author">
                  <img
                    className="w-12 h-12 mr-4 border-2 rounded-full bg-primary border-secondary"
                    src={propertyData?.user_image}
                    alt="img"
                  />
                  <div className="text-xs font-medium media-body">
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
                <div className="float-right cursor-pointer fav-btn">
                  <span className="text-3xl duration-300 ease-in hover:text-secondary">
                    <AiOutlineFullscreen> </AiOutlineFullscreen>
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <>
            <div className="">
              <div className="py-5 shadow-md product-details-inner bg-gray-50 ">
                <div className="w-full bg-secondary">
                  <div className="py-2 pl-4 pr-0 mb-4 ml-5 bg-gray-100">
                    <div className="flex items-center justify-between ">
                      <div className="mb-2 font-medium text-primary">
                        <p className="text-lg md:text-xl lg:text-2xl">
                          {propertyData?.property_name}
                        </p>
                        <p className="mt-1 text-sm capitalize">
                          owner: {propertyData?.owner_name}
                        </p>
                      </div>
                      <div className="mr-3 text-sm">
                        <h2 className="flex flex-row items-center text-xl font-semibold text-orange-600">
                          <TbCurrencyTaka className="inline text-2xl md:text-xl lg:text-2xl" />
                          {priceWithCommas}/-
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ height: "70px" }}>
                  <p className="inline-block px-5">
                    {propertyData?.property_heading.length > 90
                      ? propertyData?.property_heading.slice(0, 90) + "..."
                      : propertyData?.property_heading}
                  </p>
                </div>
              </div>
              <Link href={`/singleproperty/${propertyData?._id}`}>
                <div className="flex items-center justify-between py-2 pl-5 font-medium bg-gray-100 product-meta-bottom text-primary">
                  <span>
                    <span className="font-normal text-gray-600">
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
