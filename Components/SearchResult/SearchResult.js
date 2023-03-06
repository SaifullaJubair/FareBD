const { useRouter } = require("next/router");
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import {
  MdOutlineApartment,
  MdOutlineBathroom,
  MdOutlineBedroomChild,
} from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { TfiLocationPin } from "react-icons/tfi";
import DivisionSidebar from "@/Components/Home/Division/DivisionSidebar";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";

function SearchResult({ searchData }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  console.log(searchData);
  return (
    <div className="max-w-[1440px] w-[95%] mx-auto text-center">
      <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div className="lg:col-span-3 md:col-span-2 col-span-1 mx-auto">
          {searchData.length <= 0 && (
            <h1 className="mt-10 sm:mt-16 sm:text-2xl font-semibold">
              Sorry, {user ? user?.displayName : "buddy"}, the data isn't
              available based on your filter :({" "}
              <Link className="border-b-[2.5px] border-b-secondary" href="/">
                Try another
              </Link>
            </h1>
          )}
          {searchData.length > 0 &&
            searchData?.map((el, i) => (
              <Link
                href={`/singleproperty/${el?._id}`}
                className="flex flex-col items-center bg-white border border-gray-200 shadow-lg md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-72 my-4 mb-8"
                key={i}
              >
                <img
                  className="h-full w-96"
                  src={el?.property_picture}
                  alt="img"
                />

                <div className="flex flex-col justify-start ml-8 p-4 leading-normal my-4">
                  <div className="grid gap-1.5">
                    <p>
                      <span className="flex font-bold text-xl">
                        {el?.price}
                        <TbCurrencyTaka className="mt-1" />
                      </span>
                    </p>
                    {/* <FaGripLinesVertical className='mt-1' /> */}
                    <p className="font-bold text-start">{el?.property_type}</p>
                    {/* <FaGripLinesVertical className='mt-1' /> */}
                    <p>
                      <span className="flex text-xs">
                        <TfiLocationPin className="mt-1" /> {el?.location}{" "}
                      </span>
                    </p>
                  </div>
                  <h2 className="text-sm mt-4 text-start">
                    {el?.property_heading}
                  </h2>

                  <div className="flex justify-start gap-8 mt-4 font-bold text-secondary">
                    <div className="flex gap-1">
                      <MdOutlineApartment className="mt-1" />
                      <p>{el?.flat_feature[0]?.floor}</p>
                    </div>
                    <div className="flex gap-1">
                      <MdOutlineBedroomChild className="mt-1" />
                      <p>{el?.flat_feature[0]?.room}</p>
                    </div>
                    <div className="flex gap-1">
                      <MdOutlineBathroom className="mt-1" />
                      <p>{el?.flat_feature[0]?.bathroom}</p>
                    </div>
                    <div className="flex gap-1">
                      <HiOutlineSquares2X2 className="mt-1" />
                      <p>{el?.size}</p>
                    </div>
                  </div>

                  <div className="flex justify-start gap-5 mt-4">
                    {/* <button className='flex justify-center items-center gap-1 text-white bg-primary px-3 rounded'><HiPhone className='mt-1' />Call</button> */}
                    <img
                      className=" h-10 w-10 rounded-full"
                      src={el?.user_image}
                      alt=""
                    />
                    {/* <button className='flex justify-center items-center gap-1 text-white bg-primary px-3 rounded'><HiEnvelope className='mt-1' />Email</button> */}
                    <img
                      className="h-12"
                      src="https://lh3.googleusercontent.com/pw/AMWts8D7jqd4R67XBB7IKs6Hi8jRKjgJ-2XmxdiU66iGxHdTNdqGNjtsTaPNYu-xcXf7ZOzAvzwtf_zJZzKfA0H7MFaNGFwcuEBsK1nQBXSC6Uxk_lz5eCCKOnf8MsAA0URa3-TL3W-88iNp0tN5eEK94LRq=w538-h274-no?authuser=0"
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            ))}
        </div>

        <div>
          <DivisionSidebar></DivisionSidebar>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
