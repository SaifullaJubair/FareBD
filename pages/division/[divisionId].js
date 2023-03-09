const { useRouter } = require("next/router")
import { Card, Carousel } from 'flowbite-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaGripLinesVertical } from 'react-icons/fa';
import { HiEnvelope, HiOutlineSquares2X2, HiPhone } from "react-icons/hi2";
import { MdApartment, MdOutlineApartment, MdOutlineBathroom, MdOutlineBedroomChild } from 'react-icons/md';
import { TbCurrencyTaka } from 'react-icons/tb';
import { TfiLocationPin } from 'react-icons/tfi';
import Review from "@/Components/Home/Review/Review";
import DivisionSidebar from '@/Components/Home/Division/DivisionSidebar';
import ReactPaginate from 'react-paginate';


const Division = () => {
    const router = useRouter();
    const divisionId = router.query.divisionId;
    const [divisions, setDivision] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        fetch(`https://server-fare-bd.vercel.app/searchByDivision/${divisionId}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setDivision(data);

            });
    }, []);

    const itemsPerPage = 4

    const endOffset = itemOffset + itemsPerPage;

    const currentItems = divisions.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(divisions.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % divisions.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemOffset(newOffset);
    };

    return (
        <div className='max-w-[1440px] w-[95%] mx-auto text-center'>
            <h1 className=' my-12 text-3xl font-bold'>Properties of {divisionId} Division</h1>

            <div className='gap-8 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>


                <div className='lg:col-span-3 md:col-span-2 col-span-1 mx-auto'>

                    {
                        currentItems?.map(division =>
                            <Link href={`/singleproperty/${division?._id}`} className="flex flex-col items-center bg-white border border-gray-200 shadow-lg md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-72 my-4 mb-8">

                                <img className="h-full w-96" src={division?.property_picture} alt="img" />

                                <div className="flex flex-col justify-start ml-8 p-4 leading-normal my-4">
                                    <div className='grid gap-1.5'>
                                        <p ><span className='flex font-bold text-xl'>{division?.price}<TbCurrencyTaka className='mt-1' /></span></p>
                                        {/* <FaGripLinesVertical className='mt-1' /> */}
                                        <p className='font-bold text-start'>{division?.property_type}</p>
                                        {/* <FaGripLinesVertical className='mt-1' /> */}
                                        <p><span className='flex text-xs'><TfiLocationPin className='mt-1' /> {division?.location} </span></p>
                                    </div>
                                    <h2 className='text-sm mt-4 text-start'>{division?.property_heading}</h2>

                                    <div className='flex justify-start gap-8 mt-4 font-bold text-secondary'>
                                        <div className='flex gap-1'><MdOutlineApartment className='mt-1' /><p>{division?.flat_feature[0]?.floor}</p></div>
                                        <div className='flex gap-1'><MdOutlineBedroomChild className='mt-1' /><p>{division?.flat_feature[0]?.room}</p></div>
                                        <div className='flex gap-1'><MdOutlineBathroom className='mt-1' /><p>{division?.flat_feature[0]?.bathroom}</p></div>
                                        <div className='flex gap-1'><HiOutlineSquares2X2 className='mt-1' /><p>{division?.size}</p></div>
                                    </div>

                                    <div className='flex justify-start gap-5 mt-4'>
                                        {/* <button className='flex justify-center items-center gap-1 text-white bg-primary px-3 rounded'><HiPhone className='mt-1' />Call</button> */}
                                        <img className=' h-10 w-10 rounded-full' src={division?.user_image} alt="" />
                                        {/* <button className='flex justify-center items-center gap-1 text-white bg-primary px-3 rounded'><HiEnvelope className='mt-1' />Email</button> */}
                                        <img className='h-12' src="https://lh3.googleusercontent.com/pw/AMWts8D7jqd4R67XBB7IKs6Hi8jRKjgJ-2XmxdiU66iGxHdTNdqGNjtsTaPNYu-xcXf7ZOzAvzwtf_zJZzKfA0H7MFaNGFwcuEBsK1nQBXSC6Uxk_lz5eCCKOnf8MsAA0URa3-TL3W-88iNp0tN5eEK94LRq=w538-h274-no?authuser=0" alt="" />
                                    </div>
                                </div>
                            </Link>
                        )
                    }

                    <div className="pagination mt-6">


                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                            containerClassName='pagination-menu'
                        />
                    </div>
                </div>

                <div>
                    <DivisionSidebar></DivisionSidebar>
                </div>
            </div>

        </div>
    );
};

export default Division;