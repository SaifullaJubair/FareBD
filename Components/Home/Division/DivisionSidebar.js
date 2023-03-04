import { Carousel } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';

const DivisionSidebar = () => {
    return (
        <div>
            <div className="h-64 sm:h-64 xl:h-80 2xl:h-96 mt-4">
                <Carousel>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
                        style={{
                            background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthQem9i29JDeaBaJx5dUJlNXhIhvXoYPW_A&usqp=CAU)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            width: '100%'
                        }}>
                        <h2 className='text-yellow-300 font-bold '>We provide your <br />   dream house</h2>
                    </div>

                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
                        style={{
                            background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7RJv-k6xi5JBwa12Zqsgc_Q1_V9bt2lSrA&usqp=CAU)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            width: '100%'
                        }}>
                        <h2 className='text-yellow-300 font-bold '>Buy, sell, and <br /> rent homes</h2>
                    </div>

                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
                        style={{
                            background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8HQpPwf8AttMwgMVzjvlSb8rxsgL8vDPEVQ&usqp=CAU)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            width: '100%'
                        }}>
                        <h2 className='text-yellow-300 font-bold '>Join our community <br /> to spread yours</h2>
                    </div>
                </Carousel>
            </div>
            <ul class="list-none my-8 border font-bold text-blue-600">

                <Link href={`/division/Dhaka`}><li className='border py-2'>Dhaka</li></Link>
                <Link href={`/division/Rajshahi`}><li className='border py-2'>Rajshahi</li></Link>
                <Link href={`/division/Khulna`}><li className='border py-2'>Khulna</li></Link>
                <Link href={`/division/Chattogram`}><li className='border py-2'>Chittagong</li></Link>
                <Link href={`/division/Sylhet`}><li className='border py-2'>Sylhet</li></Link>
                <Link href={`/division/Rangpur`}><li className='border py-2'>Rangpur</li></Link>
                <Link href={`/division/Mymonsing`}><li className='border py-2'>Mymonsing</li></Link>
                <Link href={`/division/Barishal`}><li className='border py-2'>Barishal</li></Link>

            </ul>
            <div className="h-64 sm:h-64 xl:h-80 2xl:h-96 mb-12">

                <div className=" shadow-md h-full w-full duration-300 hover:-translate-y-2" style={{
                    background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://i0.wp.com/marketbusinessnews.com/wp-content/uploads/2020/02/Buy-and-sell-you-property-image-of-street-with-houses-1.jpg?fit=755%2C650&ssl=1)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: '100%'
                }}>
                    <div className="flex items-end h-full  justify-center">
                        <div className="p-4 text-white">
                            <h2 className="text-lg mb-1 w-full p-1 rounded text-center">
                                <img className='h-12 bg-white rounded-lg' src="https://lh3.googleusercontent.com/pw/AMWts8D7jqd4R67XBB7IKs6Hi8jRKjgJ-2XmxdiU66iGxHdTNdqGNjtsTaPNYu-xcXf7ZOzAvzwtf_zJZzKfA0H7MFaNGFwcuEBsK1nQBXSC6Uxk_lz5eCCKOnf8MsAA0URa3-TL3W-88iNp0tN5eEK94LRq=w538-h274-no?authuser=0" alt="" />
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DivisionSidebar;