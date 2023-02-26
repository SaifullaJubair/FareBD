const { useRouter } = require("next/router")
import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

const Division = () => {
    const router = useRouter();
    const divisionId = router.query.divisionId;

    const [division, setDivision] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/searchByDivision/${name}")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setDivision(data);

            });
    }, []);

    return (
        <div className='max-w-[1440px] w-[95%] mx-auto text-center'>
            <h1 className=' my-12 text-3xl font-bold'>Properties of {divisionId} Division</h1>


            <Card className='my-8'
                horizontal={true}
                imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>

            <Card
                horizontal={true}
                imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>

            <Card
                horizontal={true}
                imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>

        </div>
    );
};

export default Division;