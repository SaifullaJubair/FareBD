import { Card, Dropdown, Tabs } from "flowbite-react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";

const SellAndRent = () => {
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
            <Tabs.Item
               active={true}
               title="Rent"
            >
               <div className="gap-8  grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">

                  <div className="w-full">
                     <div className="single-product-wrap style-bottom ">
                        <div className="thumb relative">
                           <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="img" />
                           <div className="product-wrap-details absolute bottom-0 left-0 w-full px-9 text-white">
                              <div className="media flex items-center mb-4 justify-between">
                                 <div className="author">
                                    <img className=" mr-4" src="https://solverwp.com/demo/html/mingrand/assets/img/author/4.png" alt="img" />
                                 </div>
                                 <div className="media-body text-xs font-medium">
                                    <h6 className=""><a href="#">Owner Name</a></h6>
                                    <p className="flex"><span className="text-xl"><CiLocationOn ></CiLocationOn></span>New York real
                                       estate </p>
                                 </div>
                                 <a className="fav-btn float-right" href="#"><span className="text-3xl hover:text-secondary ease-in duration-300"><AiOutlineHeart> </AiOutlineHeart></span> </a>
                              </div>
                           </div>
                        </div>
                        <div className="product-details-inner bg-gray-200 py-5 px-9 ">
                           <h4 className="font-medium mb-3 text-primary text-2xl hover:text-secondary ease-in duration-300"><a href="property-details.html">Daily Apartment</a></h4>
                           <ul className="meta-inner flex mb-3 justify-items-start">
                              <li className="flex mr-3 text-sm"><span className="text-xl mr-2"></span><CiLocationOn ></CiLocationOn>New York</li>
                              <li className="bg-secondary text-sm font-medium text-white px-4"><a href="#">For Sell</a></li>
                           </ul>
                           <p >Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet,
                              costur adipisicing eiusmod.</p>
                        </div>
                        <div className="product-meta-bottom font-medium text-primary bg-gray-300 py-5 px-9">
                           <span className="price">$ 80,650.00</span>
                           <span className="mx-4">For sale</span>
                           <span>1 year ago</span>
                        </div>
                     </div>
                  </div>
                  <div className="w-full">
                     <div className="single-product-wrap style-bottom ">
                        <div className="thumb relative">
                           <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="img" />
                           <div className="product-wrap-details absolute bottom-0 left-0 w-full px-9 text-white">
                              <div className="media flex items-center mb-4 justify-between">
                                 <div className="author">
                                    <img className=" mr-4" src="https://solverwp.com/demo/html/mingrand/assets/img/author/4.png" alt="img" />
                                 </div>
                                 <div className="media-body text-xs font-medium">
                                    <h6 className=""><a href="#">Owner Name</a></h6>
                                    <p className="flex"><span className="text-xl"><CiLocationOn ></CiLocationOn></span>New York real
                                       estate </p>
                                 </div>
                                 <a className="fav-btn float-right" href="#"><span className="text-3xl hover:text-secondary ease-in duration-300"><AiOutlineHeart> </AiOutlineHeart></span> </a>
                              </div>
                           </div>
                        </div>
                        <div className="product-details-inner bg-gray-200 py-5 px-9 ">
                           <h4 className="font-medium mb-3 text-primary text-2xl hover:text-secondary ease-in duration-300"><a href="property-details.html">Daily Apartment</a></h4>
                           <ul className="meta-inner flex mb-3 justify-items-start">
                              <li className="flex mr-3 text-sm"><span className="text-xl mr-2"></span><CiLocationOn ></CiLocationOn>New York</li>
                              <li className="bg-secondary text-sm font-medium text-white px-4"><a href="#">For Sell</a></li>
                           </ul>
                           <p >Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet,
                              costur adipisicing eiusmod.</p>
                        </div>
                        <div className="product-meta-bottom font-medium text-primary bg-gray-300 py-5 px-9">
                           <span className="price">$ 80,650.00</span>
                           <span className="mx-4">For sale</span>
                           <span>1 year ago</span>
                        </div>
                     </div>
                  </div>
                  <div className="w-full">
                     <div className="single-product-wrap style-bottom ">
                        <div className="thumb relative">
                           <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="img" />
                           <div className="product-wrap-details absolute bottom-0 left-0 w-full px-9 text-white">
                              <div className="media flex items-center mb-4 justify-between">
                                 <div className="author">
                                    <img className=" mr-4" src="https://solverwp.com/demo/html/mingrand/assets/img/author/4.png" alt="img" />
                                 </div>
                                 <div className="media-body text-xs font-medium">
                                    <h6 className=""><a href="#">Owner Name</a></h6>
                                    <p className="flex"><span className="text-xl"><CiLocationOn ></CiLocationOn></span>New York real
                                       estate </p>
                                 </div>
                                 <a className="fav-btn float-right" href="#"><span className="text-3xl hover:text-secondary ease-in duration-300"><AiOutlineHeart> </AiOutlineHeart></span> </a>
                              </div>
                           </div>
                        </div>
                        <div className="product-details-inner bg-gray-200 py-5 px-9 ">
                           <h4 className="font-medium mb-3 text-primary text-2xl hover:text-secondary ease-in duration-300"><a href="property-details.html">Daily Apartment</a></h4>
                           <ul className="meta-inner flex mb-3 justify-items-start">
                              <li className="flex mr-3 text-sm"><span className="text-xl mr-2"></span><CiLocationOn ></CiLocationOn>New York</li>
                              <li className="bg-secondary text-sm font-medium text-white px-4"><a href="#">For Sell</a></li>
                           </ul>
                           <p >Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet,
                              costur adipisicing eiusmod.</p>
                        </div>
                        <div className="product-meta-bottom font-medium text-primary bg-gray-300 py-5 px-9">
                           <span className="price">$ 80,650.00</span>
                           <span className="mx-4">For sale</span>
                           <span>1 year ago</span>
                        </div>
                     </div>
                  </div>



               </div>
            </Tabs.Item>
            <Tabs.Item title="Sell">
               <div className="gap-8  grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">

                  <div className="w-full">
                     <div className="single-product-wrap style-bottom ">
                        <div className="thumb relative">
                           <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="img" />
                           <div className="product-wrap-details absolute bottom-0 left-0 w-full px-9 text-white">
                              <div className="media flex items-center mb-4 justify-between">
                                 <div className="author">
                                    <img className=" mr-4" src="https://solverwp.com/demo/html/mingrand/assets/img/author/4.png" alt="img" />
                                 </div>
                                 <div className="media-body text-xs font-medium">
                                    <h6 className=""><a href="#">Owner Name</a></h6>
                                    <p className="flex"><span className="text-xl"><CiLocationOn ></CiLocationOn></span>New York real
                                       estate </p>
                                 </div>
                                 <a className="fav-btn float-right" href="#"><span className="text-3xl hover:text-secondary ease-in duration-300"><AiOutlineHeart> </AiOutlineHeart></span> </a>
                              </div>
                           </div>
                        </div>
                        <div className="product-details-inner bg-gray-200 py-5 px-9 ">
                           <h4 className="font-medium mb-3 text-primary text-2xl hover:text-secondary ease-in duration-300"><a href="property-details.html">Daily Apartment</a></h4>
                           <ul className="meta-inner flex mb-3 justify-items-start">
                              <li className="flex mr-3 text-sm"><span className="text-xl mr-2"></span><CiLocationOn ></CiLocationOn>New York</li>
                              <li className="bg-secondary text-sm font-medium text-white px-4"><a href="#">For Sell</a></li>
                           </ul>
                           <p >Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet,
                              costur adipisicing eiusmod.</p>
                        </div>
                        <div className="product-meta-bottom font-medium text-primary bg-gray-300 py-5 px-9">
                           <span className="price">$ 80,650.00</span>
                           <span className="mx-4">For sale</span>
                           <span>1 year ago</span>
                        </div>
                     </div>
                  </div>
                  <div className="w-full">
                     <div className="single-product-wrap style-bottom ">
                        <div className="thumb relative">
                           <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="img" />
                           <div className="product-wrap-details absolute bottom-0 left-0 w-full px-9 text-white">
                              <div className="media flex items-center mb-4 justify-between">
                                 <div className="author">
                                    <img className=" mr-4" src="https://solverwp.com/demo/html/mingrand/assets/img/author/4.png" alt="img" />
                                 </div>
                                 <div className="media-body text-xs font-medium">
                                    <h6 className=""><a href="#">Owner Name</a></h6>
                                    <p className="flex"><span className="text-xl"><CiLocationOn ></CiLocationOn></span>New York real
                                       estate </p>
                                 </div>
                                 <a className="fav-btn float-right" href="#"><span className="text-3xl hover:text-secondary ease-in duration-300"><AiOutlineHeart> </AiOutlineHeart></span> </a>
                              </div>
                           </div>
                        </div>
                        <div className="product-details-inner bg-gray-200 py-5 px-9 ">
                           <h4 className="font-medium mb-3 text-primary text-2xl hover:text-secondary ease-in duration-300"><a href="property-details.html">Daily Apartment</a></h4>
                           <ul className="meta-inner flex mb-3 justify-items-start">
                              <li className="flex mr-3 text-sm"><span className="text-xl mr-2"></span><CiLocationOn ></CiLocationOn>New York</li>
                              <li className="bg-secondary text-sm font-medium text-white px-4"><a href="#">For Sell</a></li>
                           </ul>
                           <p >Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet,
                              costur adipisicing eiusmod.</p>
                        </div>
                        <div className="product-meta-bottom font-medium text-primary bg-gray-300 py-5 px-9">
                           <span className="price">$ 80,650.00</span>
                           <span className="mx-4">For sale</span>
                           <span>1 year ago</span>
                        </div>
                     </div>
                  </div>
                  <div className="w-full">
                     <div className="single-product-wrap style-bottom ">
                        <div className="thumb relative">
                           <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="img" />
                           <div className="product-wrap-details absolute bottom-0 left-0 w-full px-9 text-white">
                              <div className="media flex items-center mb-4 justify-between">
                                 <div className="author">
                                    <img className=" mr-4" src="https://solverwp.com/demo/html/mingrand/assets/img/author/4.png" alt="img" />
                                 </div>
                                 <div className="media-body text-xs font-medium">
                                    <h6 className=""><a href="#">Owner Name</a></h6>
                                    <p className="flex"><span className="text-xl"><CiLocationOn ></CiLocationOn></span>New York real
                                       estate </p>
                                 </div>
                                 <a className="fav-btn float-right" href="#"><span className="text-3xl hover:text-secondary ease-in duration-300"><AiOutlineHeart> </AiOutlineHeart></span> </a>
                              </div>
                           </div>
                        </div>
                        <div className="product-details-inner bg-gray-200 py-5 px-9 ">
                           <h4 className="font-medium mb-3 text-primary text-2xl hover:text-secondary ease-in duration-300"><a href="property-details.html">Daily Apartment</a></h4>
                           <ul className="meta-inner flex mb-3 justify-items-start">
                              <li className="flex mr-3 text-sm"><span className="text-xl mr-2"></span><CiLocationOn ></CiLocationOn>New York</li>
                              <li className="bg-secondary text-sm font-medium text-white px-4"><a href="#">For Sell</a></li>
                           </ul>
                           <p >Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet,
                              costur adipisicing eiusmod.</p>
                        </div>
                        <div className="product-meta-bottom font-medium text-primary bg-gray-300 py-5 px-9">
                           <span className="price">$ 80,650.00</span>
                           <span className="mx-4">For sale</span>
                           <span>1 year ago</span>
                        </div>
                     </div>
                  </div>



               </div>
            </Tabs.Item>
         </Tabs.Group>

      </div>
   );
};

export default SellAndRent;