import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiCalendar, BiUser } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

const RecentPost = () => {
  const [lastProperty, setLastProperty] = useState(null);
  const [lastFourProperty, setLastfourProperty] = useState(null);

  // Date Formatter function
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  // Fetch Recent Posts
  const pullJson = () => {
    fetch(`http://localhost:5000/recent-properties`)
      .then((res) => res.json())
      .then((data) => {
        setLastProperty(data.shift());
        setLastfourProperty(data);
      });
  };
  // Use Effect for recent posts
  useEffect(() => {
    pullJson();
  }, []);
  console.log(lastProperty);
  return (
    <div className="max-w-[1440px] w-[95%] mx-auto ">
      <div className="my-24">
        <div>
          <p class="text-gray-500 text-lg text-center font-normal pb-3">
          We are offering the best real estate
          </p>
          <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
          Recent Properties
          </h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Last added property */}
          <div className="duration-300 md:col-span-2 hover:-translate-y-2 cursor-pointer">
            <Link href={`/singleproperty/${lastProperty?._id}`}>
              <div
                className="flex h-52 md:h-full  items-end "
                style={{
                  backgroundImage: `linear-gradient(0deg, #0D1741 12%, rgba(6, 6, 6, 0) 100%) , url(${lastProperty?.property_picture})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="text-white w-full">
                  <div className="flex justify-between items-center px-2 md:p-4">
                    <h4 className="text-lg md:text-2xl">
                      {lastProperty?.property_name}
                    </h4>
                    <p className="text-xs md:text-sm flex items-center gap-1 md:gap-2">
                      <GoLocation size={20} /> {lastProperty?.division}
                    </p>
                  </div>
                  <div className="p-2 md:p-3 flex w-full justify-between bg-gray-600 bg-opacity-20 border-t border-t-gray-600">
                    <div className="flex items-center gap-2">
                      {lastProperty?.user_image ? (
                        <img
                          src={lastProperty?.user_image}
                          className="border w-8 md:w-10 h-8 md:h-10 rounded-full"
                          alt=""
                        />
                      ) : (
                        <BiUser className="border rounded-full" size={32} />
                      )}
                      <span className="text-xs md:text-lg">
                        {lastProperty?.user_name
                          ? lastProperty?.user_name
                          : "No Name"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BiCalendar className="text-xl" />
                      <span className="text-xs md:text-base">
                        {formatDate(
                          lastProperty?.registered.split(" ").join("")
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:col-span-2 ">
            {/* Next four goes there */}
            {lastFourProperty?.map((property) => (
              <Link key={property._id} href={`/singleproperty/${property._id}`}>
                <div
                  className="w-full duration-300 shadow-md h-52 hover:-translate-y-2 cursor-pointer"
                  style={{
                    backgroundImage: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(${property.property_picture})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex items-end justify-between h-full">
                    <div className="flex flex-col justify-between text-white  w-full">
                      <div className="flex justify-between items-center px-2">
                        <h4 className="text-lg">{property?.property_name}</h4>
                        <p className="text-xs flex items-center gap-1">
                          <GoLocation size={16} /> {property?.division}
                        </p>
                      </div>
                      <div className="flex p-2 w-full items-center justify-between bg-gray-700 bg-opacity-20 border-t border-t-gray-600">
                        <div className="flex items-center gap-2">
                          {property?.user_image ? (
                            <img
                              src={property?.user_image}
                              className="border w-8 h-8 rounded-full"
                              alt=""
                            />
                          ) : (
                            <BiUser className="border rounded-full" size={32} />
                          )}
                          <span className="text-xs">
                            {property?.user_name
                              ? property?.user_name
                              : "No Name"}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BiCalendar className="text-xl" />
                          <span className="text-xs">
                            {property?.post_date
                              ? formatDate(
                                  property?.post_date.split(" ").join("")
                                )
                              : formatDate(
                                  property?.registered.split(" ").join("")
                                )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
