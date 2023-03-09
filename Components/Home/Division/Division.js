import { Button } from "flowbite-react";
import Link from "next/link";
// import { useEffect, useState } from "react";

const Division = () => {
   // const [divisions, setdivision] = useState([]);
   // const [otherDivisions, setOtherDivisions] = useState([]);

   // useEffect(() => {
   //    fetch("https://server-fare-bd.vercel.app/property")
   //       .then((res) => res.json())
   //       .then((data) => {
   //          setdivision(data.slice(0, 4));
   //          setOtherDivisions(data.slice(4, 8));
   //       });
   // }, []);

   return (
      <div className="max-w-[1440px] w-[95%] mx-auto ">

         <div className="my-24">
            <div>
               <p className="text-gray-500 text-lg text-center font-normal pb-3">
                  Choose From
               </p>
               <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                  Divisions
               </h1>
            </div>
            <div className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-4 gap-4">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:col-span-4 gap-4  ">
                  {/* 1 */}


                  <Link href={`/division/Dhaka`}><div className=" shadow-md h-52 w-full duration-300 hover:-translate-y-2" style={{
                     background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/GulshanDhaka.jpg/300px-GulshanDhaka.jpg)`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     width: '100%'
                  }}>
                     <div className="flex items-end h-full  justify-center">
                        <div className="p-4 text-white">
                           <h2 className="text-lg mb-1 bg-secondary w-full p-1 rounded text-center">Dhaka</h2>
                        </div>
                     </div>
                  </div></Link>

                  <Link href={`/division/Rajshahi`}><div className=" shadow-md h-52 w-full duration-300 hover:-translate-y-2" style={{
                     background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://www.musafir.com.bd/images/locations/rajshahi-am.jpg)`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     width: '100%'
                  }}>
                     <div className="flex items-end h-full  justify-center">
                        <div className="p-4 text-white">
                           <h2 className="text-lg mb-1 bg-secondary w-full p-1 rounded text-center">Rajshahi</h2>
                        </div>
                     </div>
                  </div></Link>

                  <Link href={`/division/Khulna`}><div className=" shadow-md h-52 w-full duration-300 hover:-translate-y-2" style={{
                     background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://prod-media-eng.dhakatribune.com/uploads/2018/09/khulna-sky-view-1538131377879.jpg)`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     width: '100%'
                  }}>
                     <div className="flex items-end h-full  justify-center">
                        <div className="p-4 text-white">
                           <h2 className="text-lg mb-1 bg-secondary w-full p-1 rounded text-center">Khulna</h2>
                        </div>
                     </div>
                  </div></Link>

                  <Link href={`/division/Chattogram`}><div className=" shadow-md h-52 w-full duration-300 hover:-translate-y-2" style={{
                     background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://cdn.britannica.com/73/137173-050-EFEC85FB/Zia-Memorial-Museum-Chittagong-Bangl.jpg)`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     width: '100%'
                  }}>
                     <div className="flex items-end h-full  justify-center">
                        <div className="p-4 text-white">
                           <h2 className="text-lg mb-1 bg-secondary w-full p-1 rounded text-center">Chittagong</h2>
                        </div>
                     </div>
                  </div></Link>

                  <Link href={`/division/Sylhet`}><div className=" shadow-md h-52 w-full duration-300 hover:-translate-y-2" style={{
                     background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://tourismwindow.com/wp-content/uploads/sylhet-nature-tour-6-days-5-nights-1.jpg)`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     width: '100%'
                  }}>
                     <div className="flex items-end h-full  justify-center">
                        <div className="p-4 text-white">
                           <h2 className="text-lg mb-1 bg-secondary w-full p-1 rounded text-center">Sylhet</h2>
                        </div>
                     </div>
                  </div></Link>

                  <Link href={`/division/Rangpur`}><div className=" shadow-md h-52 w-full duration-300 hover:-translate-y-2" style={{
                     background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://live.staticflickr.com/8809/17151575150_db0029b708_b.jpg)`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     width: '100%'
                  }}>
                     <div className="flex items-end h-full  justify-center">
                        <div className="p-4 text-white">
                           <h2 className="text-lg mb-1 bg-secondary w-full p-1 rounded text-center">Rangpur</h2>
                        </div>
                     </div>
                  </div></Link>

                  <Link href={`/division/Mymonsing`}> <div className=" shadow-md h-52 w-full duration-300 hover:-translate-y-2" style={{
                     background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(http://photos.wikimapia.org/p/00/03/48/95/01_big.jpg)`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     width: '100%'
                  }}>
                     <div className="flex items-end h-full  justify-center">
                        <div className="p-4 text-white">
                           <h2 className="text-lg mb-1 bg-secondary w-full p-1 rounded text-center">Mymonsing</h2>
                        </div>
                     </div>
                  </div></Link>

                  <Link href={`/division/Barishal`}><div className=" shadow-md h-52 w-full duration-300 hover:-translate-y-2" style={{
                     background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://upload.wikimedia.org/wikipedia/commons/1/16/Barisal_Skyline.jpg)`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     width: '100%'
                  }}>
                     <div className="flex items-end h-full  justify-center">
                        <div className="p-4 text-white">
                           <h2 className="text-lg mb-1 bg-secondary w-full p-1 rounded text-center">Barishal</h2>
                        </div>
                     </div>
                  </div></Link>


               </div>
            </div>
         </div >

      </div >
   );
};

export default Division;
