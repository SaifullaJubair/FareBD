import { Button, Card, Dropdown, Tabs } from "flowbite-react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "next/link";


const SellAndRent = () => {

   const [toSell, setToSell] = useState([]);
   const [toRent, setToRent] = useState([]);
   const [singleProperty, setSingleProperty] = useState({});

   // Date Formatter function 
   function formatDate(dateStr) {
      const date = new Date(dateStr);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return (date.toLocaleDateString('en-US', options))
   }

   useEffect(() => {
      fetch('http://localhost:5000/forSell')
         .then(res => res.json())
         .then(data => {
            setToSell(data)
            // console.log(data);
         })
   }, []);
   const forSell = toSell.slice(-3)

   useEffect(() => {
      fetch('http://localhost:5000/forRent')
         .then(res => res.json())
         .then(data => {
            setToRent(data)
            // console.log(data);
         })
   }, []);
   const forRent = toRent.slice(-6)

   return (
      <div className="max-w-[1440px] w-[95%] mx-auto mt-24">
         <div className="proparte-title text-center mb-16">
            <p className=" text-sm font-medium text-secondary">Our Propartes</p>
            <h2 className="text-5xl font-bold text-primary">Our Propartes</h2>
         </div>

         <Tabs.Group
            aria-label="Default tabs"
            style="default"
            className="proparte-tab"
         >

            {/* rent properties */}

            <Tabs.Item
               active={true}
               title="Rent"
            >
               <div className="gap-8  grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
                  {
                     forRent?.map(rent =>

                        <div className="w-full">
                           <div className="single-product-wrap style-bottom ">
                              <div className="thumb relative">
                                 <img className="w-full h-64" src={rent?.property_picture} alt="img" />
                                 <div className="product-wrap-details absolute bottom-0 left-0 w-full px-9 text-white">
                                    <div className="media flex items-center mb-4 justify-between">
                                       <div className="author">
                                          <img className=" mr-4 h-10 w-10 rounded-full" src={rent?.user_image} alt="img" />
                                       </div>
                                       <div className="media-body text-xs font-medium">
                                          <h6 className=""><a href="#">{rent?.owner_name}</a></h6>
                                          <p className="flex"><span className="text-xl"><CiLocationOn ></CiLocationOn></span>{rent?.location}</p>
                                       </div>
                                       <a className="fav-btn float-right" href="#"><span className="text-3xl hover:text-secondary ease-in duration-300"><AiOutlineHeart> </AiOutlineHeart></span> </a>
                                    </div>
                                 </div>
                              </div>
                              <Link href={`/singleproperty/${rent?._id}`}>
                                 <div className="product-details-inner bg-gray-200 py-5 px-9 h-48">
                                    <div className="flex justify-between mb-4"><h4 className="font-medium mb-3 text-primary text-2xl hover:text-secondary ease-in duration-300"><a href="property-details.html">{rent?.property_name}</a></h4>
                                       {/* <ul className="meta-inner flex mb-5 justify-between">
                                       <li className="flex mr-3 text-sm"><span className="text-xl mr-2">
                                          </span><CiLocationOn className="mt-1 mr-1"></CiLocationOn>{rent?.location}</li>
                                    </ul> */}
                                       <Button className="bg-secondary text-sm text-white px-2" size="xs">For Rent</Button>
                                    </div>
                                    <p >{rent?.property_heading}</p>
                                 </div>


                                 <div className="flex justify-between product-meta-bottom font-medium text-primary bg-gray-300 py-5 px-9">
                                    <span className="price">$ {rent?.price}</span>
                                    <span className="mx-4">{rent?.property_type}</span>
                                    <span>{formatDate(rent?.post_date.split(' ').join(''))}</span>
                                    {/* <span>{rent?.post_date}</span> */}
                                 </div>
                              </Link>
                           </div>
                        </div>
                     )
                  }

               </div>
            </Tabs.Item>



            {/* sell properties */}

            <Tabs.Item title="Sell">
               <div className="gap-8  grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
                  {
                     toSell?.map(sell =>
                        <div className="w-full">
                           <div className="single-product-wrap style-bottom ">
                              <div className="thumb relative">
                                 <img className="w-full h-64" src={sell?.property_picture} alt="img" />
                                 <div className="product-wrap-details absolute bottom-0 left-0 w-full px-9 text-white">
                                    <div className="media flex items-center mb-4 justify-between">
                                       <div className="author">
                                          <img className=" mr-4 h-10 w-10 rounded-full" src={sell?.user_image} alt="img" />
                                       </div>
                                       <div className="media-body text-xs font-medium">
                                          <h6 className=""><a href="#">{sell?.owner_name}</a></h6>
                                          <p className="flex"><span className="text-xl"><CiLocationOn ></CiLocationOn></span>{sell?.location}
                                          </p>
                                       </div>
                                       <a className="fav-btn float-right" href="#"><span className="text-3xl hover:text-secondary ease-in duration-300"><AiOutlineHeart> </AiOutlineHeart></span> </a>
                                    </div>
                                 </div>
                              </div>
                              <Link href={`/singleproperty/${sell?._id}`}> <div className="product-details-inner bg-gray-200 py-5 px-9 h-48">
                                 <div className="flex justify-between mb-4">
                                    <h4 className="font-medium mb-3 text-primary text-2xl hover:text-secondary ease-in duration-300"><a href="property-details.html">{sell?.property_name}</a></h4>
                                    {/* <ul className="meta-inner flex mb-5 justify-between">
                                    <li className="flex mr-3 text-sm"><span className="text-xl mr-2"></span><CiLocationOn className="mt-1 mr-1"></CiLocationOn>{sell?.location}</li>
                                 </ul> */}
                                    <Button className="bg-secondary text-sm font-medium text-white px-4" size="xs">For Sell</Button>
                                 </div>
                                 <p >{sell?.property_heading}</p>
                              </div>
                                 <div className="flex justify-between product-meta-bottom font-medium text-primary bg-gray-300 py-5 px-9">
                                    <span className="price">$ {sell?.price}</span>
                                    <span className="mx-4">{sell?.property_type}</span>
                                    <span>{formatDate(sell?.post_date.split(' ').join(''))}</span>
                                    {/* <span>{sell?.post_date}</span> */}
                                 </div></Link>
                           </div>
                        </div>

                     )

                  }


               </div>
            </Tabs.Item>


         </Tabs.Group>





      </div>
   );
};

export default SellAndRent;