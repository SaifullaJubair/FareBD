import { Button } from "flowbite-react";


const Division = () => {
   return (
      <div>


         <div className="my-16">
            <h3 className="text-secondary text-sm text-center font-semibold">We are offering the best real estate</h3>
            <h1 className="font-bold mb-8 mt-2 text-center text-primary lg:text-5xl md:text-4xl text-3xl">Popular Neighborhoods</h1>
            <div className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-4 gap-4">

               <div className="  md:col-span-2 duration-300 hover:-translate-y-2 ">
                  <div className="flex min-h-[400px] h-full  items-end justify-center " style={{
                     background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 6, 6, 0) 100%) , url(https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                  }}>


                     <div className=" text-white p-6  ">
                        <h2 className="text-xl mb-2 bg-secondary px-3 py-2  text-center">Khulna</h2>
                        <div className="flex text-sm ">
                           <p className="pr-5 ">
                              By <span>BDBL</span>
                           </p>
                           <p>26/06/2022</p>
                        </div>
                     </div>

                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-4  ">
                  {/* 1 */}


                  <div className=" shadow-md h-52 w-full duration-300 hover:-translate-y-2 " style={{
                     background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                     // backgroundImage: `url(${news?.img})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     width: '100%'
                  }}>

                     <div className="flex items-end h-full  justify-center">
                        <div className="p-4 text-white">
                           <h2 className="text-sm mb-1 bg-secondary w-1/2 py-1 text-center">Dhaka</h2>
                           <div className="flex text-sm ">
                              <p className="pr-2">
                                 By <span>Monayem</span>
                              </p>
                              <p>12/12/2022</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className=" shadow-md h-52 w-full duration-300 hover:-translate-y-2 " style={{
                     background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://images.pexels.com/photos/11301576/pexels-photo-11301576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                     // backgroundImage: `url(${news?.img})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     width: '100%'
                  }}>

                     <div className="flex items-end h-full  justify-center">
                        <div className="p-4 text-white">
                           <h2 className="text-sm mb-1 bg-secondary w-1/2 py-1 text-center">Barisal</h2>
                           <div className="flex text-sm ">
                              <p className="pr-2">
                                 By <span>Monayem</span>
                              </p>
                              <p>12/12/2022</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className=" shadow-md h-52 w-full duration-300 hover:-translate-y-2 " style={{
                     background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://images.pexels.com/photos/12918660/pexels-photo-12918660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                     // backgroundImage: `url(${news?.img})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     width: '100%'
                  }}>

                     <div className="flex items-end h-full  justify-center">
                        <div className="p-4 text-white">
                           <h2 className="text-sm mb-1 bg-secondary w-1/2 py-1 text-center">Chittagong</h2>
                           <div className="flex text-sm ">
                              <p className="pr-2">
                                 By <span>Monayem</span>
                              </p>
                              <p>12/12/2022</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className=" shadow-md h-52 w-full duration-300 hover:-translate-y-2 " style={{
                     background: `linear-gradient(0deg, #0D1741 12%, rgba(6, 10, 10, 0) 100%) , url(https://images.pexels.com/photos/6043123/pexels-photo-6043123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                     // backgroundImage: `url(${news?.img})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     width: '100%'
                  }}>

                     <div className="flex items-end h-full  justify-center">
                        <div className="p-4 text-white">
                           <h2 className="text-sm mb-1 bg-secondary w-1/2 py-1 text-center">Rajshahi </h2>
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
            <div className="justify-center items-center flex my-8 " >
               <Button gradientMonochrome="success" size='lg' className="rounded-none ">
                  View All
               </Button>
            </div>
         </div >

      </div>
   );
};

export default Division;