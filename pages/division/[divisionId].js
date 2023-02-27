const { useRouter } = require("next/router")
import { Card } from 'flowbite-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Division = () => {
    const router = useRouter();
    const divisionId = router.query.divisionId;
    const [divisions, setDivision] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/searchByDivision/${divisionId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setDivision(data);

            });
    }, []);

    return (
        <div className='max-w-[1440px] w-[95%] mx-auto text-center'>
            <h1 className=' my-12 text-3xl font-bold'>Properties of {divisionId} Division</h1>


            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>



                {
                    divisions?.map(division =>
                        <Link href={`/singleproperty/${division?._id}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-cover w-full rounded-t-lg  h-full md:rounded-none" src={division?.property_picture} alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of  so far, in reverse chronological order.</p>
                            </div>
                        </Link>

                    )
                }



            </div>

        </div>
    );
};

export default Division;