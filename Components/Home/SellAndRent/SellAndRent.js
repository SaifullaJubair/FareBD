import { Card, Dropdown, Tabs } from "flowbite-react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "next/link";


const SellAndRent = () => {

   const [toSell, setToSell] = useState([]);
   const [toRent, setToRent] = useState([]);
   const [singleProperty, setSingleProperty] = useState({});

   useEffect(() => {
      fetch('http://localhost:5000/forSell')
         .then(res => res.json())
         .then(data => {
            setToSell(data)
            // console.log(data);
         })
   }, []);

   useEffect(() => {
      fetch('http://localhost:5000/forRent')
         .then(res => res.json())
         .then(data => {
            setToRent(data)
            // console.log(data);
         })
   }, []);

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
                     toRent?.map(rent =>

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
                                 <div className="product-details-inner bg-gray-200 py-5 px-9 ">
                                    <h4 className="font-medium mb-3 text-primary text-2xl hover:text-secondary ease-in duration-300"><a href="property-details.html">{rent?.property_name}</a></h4>
                                    <ul className="meta-inner flex mb-3 justify-items-start">
                                       <li className="flex mr-3 text-sm"><span className="text-xl mr-2"></span><CiLocationOn ></CiLocationOn>{rent?.location}</li>
                                       <li className="bg-secondary text-sm text-white px-2">For Rent</li>
                                    </ul>
                                    <p >{rent?.property_heading}</p>
                                 </div>
                                 <div className="product-meta-bottom font-medium text-primary bg-gray-300 py-5 px-9">
                                    <span className="price">$ {rent?.price}</span>
                                    <span className="mx-4">For sale</span>
                                    <span>{rent?.post_date}</span>
                                 </div></Link>
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
                              <Link href={`/singleproperty/${sell?._id}`}> <div className="product-details-inner bg-gray-200 py-5 px-9 ">
                                 <h4 className="font-medium mb-3 text-primary text-2xl hover:text-secondary ease-in duration-300"><a href="property-details.html">{sell?.property_name}</a></h4>
                                 <ul className="meta-inner flex mb-3 justify-items-start">
                                    <li className="flex mr-3 text-sm"><span className="text-xl mr-2"></span><CiLocationOn ></CiLocationOn>{sell?.location}</li>
                                    <li className="bg-secondary text-sm font-medium text-white px-4">For Sell</li>
                                 </ul>
                                 <p >{sell?.property_heading}</p>
                              </div>
                                 <div className="product-meta-bottom font-medium text-primary bg-gray-300 py-5 px-9">
                                    <span className="price">$ {sell?.price}</span>
                                    <span className="mx-4">For sale</span>
                                    <span>{sell?.post_date}</span>
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