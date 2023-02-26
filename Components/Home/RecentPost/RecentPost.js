import React from 'react';

const RecentPost = () => {
    return (
        <div className="max-w-[1440px] w-[95%] mx-auto ">
            <div className="my-24">
                <h3 className="text-sm font-semibold text-center text-secondary">
                    We are offering the best real estate
                </h3>
                <h1 className="mt-2 mb-8 text-3xl font-bold text-center text-primary lg:text-5xl md:text-4xl">
                    Recent Properties
                </h1>
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="duration-300  md:col-span-2 hover:-translate-y-2">
                        <div
                            className="flex min-h-[400px] h-full  items-end justify-center "
                            style={{
                                background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 6, 6, 0) 100%) , url(https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        >
                            <div className="p-6 text-white ">
                                <h2 className="px-3 py-2 mb-2 text-xl text-center bg-secondary">
                                    Khulna
                                </h2>
                                <div className="flex text-sm ">
                                    <p className="pr-5 ">
                                        By <span>BDBL</span>
                                    </p>
                                    <p>26/06/2022</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:col-span-2 ">
                        {/* 1 */}

                        <div
                            className="w-full duration-300 shadow-md  h-52 hover:-translate-y-2"
                            style={{
                                background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                                // backgroundImage: `url(${news?.img})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                width: "100%",
                            }}
                        >
                            <div className="flex items-end justify-center h-full">
                                <div className="p-4 text-white">
                                    <h2 className="w-1/2 py-1 mb-1 text-sm text-center bg-secondary">
                                        Dhaka
                                    </h2>
                                    <div className="flex text-sm ">
                                        <p className="pr-2">
                                            By <span>Monayem</span>
                                        </p>
                                        <p>12/12/2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full duration-300 shadow-md  h-52 hover:-translate-y-2"
                            style={{
                                background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://images.pexels.com/photos/11301576/pexels-photo-11301576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                                // backgroundImage: `url(${news?.img})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                width: "100%",
                            }}
                        >
                            <div className="flex items-end justify-center h-full">
                                <div className="p-4 text-white">
                                    <h2 className="w-1/2 py-1 mb-1 text-sm text-center bg-secondary">
                                        Barisal
                                    </h2>
                                    <div className="flex text-sm ">
                                        <p className="pr-2">
                                            By <span>Monayem</span>
                                        </p>
                                        <p>12/12/2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full duration-300 shadow-md  h-52 hover:-translate-y-2"
                            style={{
                                background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://images.pexels.com/photos/12918660/pexels-photo-12918660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                                // backgroundImage: `url(${news?.img})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                width: "100%",
                            }}
                        >
                            <div className="flex items-end justify-center h-full">
                                <div className="p-4 text-white">
                                    <h2 className="w-1/2 py-1 mb-1 text-sm text-center bg-secondary">
                                        Chittagong
                                    </h2>
                                    <div className="flex text-sm ">
                                        <p className="pr-2">
                                            By <span>Monayem</span>
                                        </p>
                                        <p>12/12/2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full duration-300 shadow-md  h-52 hover:-translate-y-2"
                            style={{
                                background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://images.pexels.com/photos/6043123/pexels-photo-6043123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                                // backgroundImage: `url(${news?.img})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                width: "100%",
                            }}
                        >
                            <div className="flex items-end justify-center h-full">
                                <div className="p-4 text-white">
                                    <h2 className="w-1/2 py-1 mb-1 text-sm text-center bg-secondary">
                                        Rajshahi{" "}
                                    </h2>
                                    <div className="flex text-sm ">
                                        <p className="pr-2">
                                            By <span>Gbd</span>
                                        </p>
                                        <p>12/12/2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="flex items-center justify-center my-8 ">
                    <button
                        type="button"
                        className="text-white bg-secondary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        View All
                    </button>
                </div> */}

            </div>
        </div>
    );
};

export default RecentPost;



//   {/* <div className="grid grid-cols-1 md:grid-cols-4 md:col-span-4 gap-4  ">
//                   {/* 1 */}

//                   {divisions.length > 0 && divisions.map((division, index) => (

//                     <div className=" shadow-md h-52 w-full duration-300 hover:-translate-y-2" key={index} style={{
//                        background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(${division?.flat_feature[0]?.feature_img})`,
//                        // backgroundImage: `url(${news?.img})`,
//                        backgroundRepeat: 'no-repeat',
//                        backgroundSize: 'cover',
//                        width: '100%'
//                     }}>
  
  
//                        <div className="flex items-end h-full  justify-center">
//                           <div className="p-4 text-white">
//                              <h2 className="text-lg mb-1 bg-secondary w-full p-1 rounded text-center">{division?.division}</h2>
//                              {/* <div className="flex text-sm ">
//                                    <p className="pr-2">
//                                       By <span>{division?.user_name?.length > 0 && division?.user_name}</span>
//                                    </p>
//                                    <p>{division?.post_date}</p>
//                                 </div> */}
//                           </div>
//                        </div>
//                     </div>
//                  ))}
//               </div> */}