import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const RecentPost = () => {
    const [lastProperty, setLastProperty] = useState(null)
    const [lastFourProperty, setLastfourProperty] = useState(null)

    // Date Formatter function 
    function formatDate(dateStr) {
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return (date.toLocaleDateString('en-US', options))
    }

    // Fetch Recent Posts
    const pullJson = () => {
        fetch(`http://localhost:5000/recent-properties`)
            .then(res => res.json())
            .then(data => {
                setLastProperty(data.shift());
                ;
                setLastfourProperty(data)

            })
    }
    // Use Effect for recent posts
    useEffect(() => {
        pullJson();
    }, []);

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
                    {/* Last added property */}
                    <div className="duration-300  md:col-span-2 hover:-translate-y-2 cursor-pointer">
                        <Link href={`/property/${lastProperty?._id}`} >
                            <div
                                className="flex min-h-[400px] h-full  items-end justify-center "
                                style={{
                                    background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 6, 6, 0) 100%) , url(${lastProperty?.property_picture})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                            >
                                <div className="p-6 text-white ">
                                    <h2 className="px-3 py-2 mb-2 text-xl text-center bg-secondary">
                                        {lastProperty?.property_name}
                                    </h2>
                                    <div className="flex text-sm ">
                                        <p className="pr-2 ">
                                            By <span>{lastProperty?.owner_name}</span>
                                        </p>
                                        <p>{formatDate(lastProperty?.registered.split(' ').join(''))}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:col-span-2 ">
                        {/* Next four goes there */}
                        {
                            lastFourProperty?.map(property => <Link key={property._id} href={`/property/${property._id}`} >
                                <div className="w-full duration-300 shadow-md  h-52 hover:-translate-y-2 cursor-pointer"
                                    style={{
                                        background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(${property.property_picture})`,
                                        // backgroundImage: `url(${news?.img})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        width: "100%",
                                    }}
                                >
                                    <div className="flex items-end justify-center h-full">
                                        <div className="p-4 text-white">
                                            <h2 className="w-1/2 py-1 mb-1 text-sm text-center bg-secondary">
                                                {property.property_name}
                                            </h2>
                                            <div className="flex text-sm ">
                                                <p className="pr-2">
                                                    By <span>{property.owner_name}</span>
                                                </p>
                                                <p>{formatDate(property.registered.split(' ').join(''))}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RecentPost;