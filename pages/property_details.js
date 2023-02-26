import { useState } from "react";
import { FaBed, FaBath, FaBorderAll, FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
const data = {
    _id: "63f5b49a9a0e5906cc0ad60a",
    property_name: "ISOPOP",
    property_heading: "Properly Designed This 2215 Sq Ft Home Is Now Up For Sale In Bashundha",
    owner_name: "Farrell Sosa",
    property_picture: "https://cdn.houseplansservices.com/product/rha5899pgdi8roarldmfhleap2/w800x533.jpg?v=18",
    location: "345 Townsend Street, Alderpoint, Pennsylvania, 8521",
    details: "Modern and spectacular under construction apartments in Bashundhara residential area are on sale !!! OPPORTUNITY TO BUY RESIDENTIAL FLATS WITH EASY INSTALLMENT FACILITIES, BEFORE PRICE INCREASE!! Project Name: Japasty Novera Address: Plot 1248 - 1249, Road-20, Block - I, Bashundhara Residential Area. Flat Description: 4 Beds, 4 Toilets, Living, Family Living, Dining, Kitchen and 4 Balconies.  Other Amenities: Spacious Community Zone Rooftop Garden Ample Car Parking Ground Floor Caretaker and Drivers Room",
    property_condition: "toSell",
    property_type: "Duplex",
    completation_status: "Complete",
    Area_type: "Recidensial",
    price: "1500000",
    size: "24 sq'f",
    rating: 8,
    registered: "2020-12-10T02:45:52 -06:00",
    flat_feature: [{
        feature_img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/410505066.jpg?k=…",
        floor: 2,
        room: 3,
        bathroom: 2,
        balcony: 2,
    }],
    author_info: [{
        author_name: "Roslyn Edwards",
        author_contact: "+8801700000021",
        author_email: "roslynedwards@duflex.com",
        autor_image: "https://pixlr.com/studio/template/6264364c-b8cc-4f4f-92d8-28c69a2b756w/thumbnail.webp",
    }],
    post_date: "2018-06-15T06:37:43 -06:00",
    feedback: "Excelent",
    wishlist: "property_name",
    division: "Rangpur"
}

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
const priceWithCommas = numberWithCommas(data.price);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const property_details = () => {
    return (
        <div className="my-16 mb-16 max-w-[1440px] w-[95%] mx-auto">
            
            <div className="flex    flex-col lg:flex-row">
                <div className="max-w-4xl">
                    <img class="h-auto w-full" src={data.property_picture} alt="property_picture"/>
                    <div className="text-area text-primary my-5">
                        <div className="m">
                            <div className="flex justify-between">
                                <h2 className="text-3xl font-semibold text-orange-600">
                                    <span className="text-2xl">BDT </span>
                                    {priceWithCommas}/-
                                    <TbCurrencyTaka className="inline mb-2 -ml-2 text-4xl"/>
                                </h2>
                                <button type="button"
                                    className="py-2.5 px-5 mr-2 mb-2 text-md font-medium text-primary focus:outline-none bg-teal-50 rounded-md hover:bg-pink-50 hover:text-pink-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    >
                                    <FaRegHeart className="inline font-bold mr-2"/>
                                    Save
                                </button>
                            </div>
                            
                            <h2 className="text-xl font-semibold mb-2">
                                <FaMapMarkerAlt className="inline mb-1 mr-2"/>
                                {data.location}
                            </h2>

                            <div className="flat-features flex text-lg">
                                <div className="flex align-middle justify-start">
                                    <FaBed className="my-1"/>
                                    <span className="mx-5 ml-2">{data.flat_feature[0].room} Beds</span>
                                </div>
                                <div className="flex align-middle justify-start">
                                    <FaBath className="my-1"/>
                                    <span className="mx-5 ml-2">{data.flat_feature[0].bathroom} Baths</span>
                                </div>
                                <div className="flex align-middle justify-start">
                                    <FaBorderAll className="my-1"/>
                                    <span className="mx-5 ml-2">{data.size}</span>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold border-secondary border-t-4 my-3 py-3">
                            {data.property_heading}
                        </h2>
                        <div className="property-details">
                            <p className="text-lg text-gray-500 my-3">
                                {data.details}
                            </p>
                        </div>
                        <div className="m">
                            <h2 className="text-2xl font-semibold mt-3 py-3">
                                PROPERTY INFORMATION
                            </h2>
                            
                                <div class="relative overflow-x-auto">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Type
                                                </th>
                                                <td class="px-6 py-4">
                                                    {data.property_type}
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Purpose
                                                </th>
                                                <td class="px-6 py-4">
                                                    {data.property_condition}
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Division Status
                                                </th>
                                                <td class="px-6 py-4">
                                                    {data.division}
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Completation Status
                                                </th>
                                                <td class="px-6 py-4">
                                                    {data.completation_status}
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Registered
                                                </th>
                                                <td class="px-6 py-4">
                                                    {data.registered}
                                                </td>
                                            </tr>
                                            
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Reference no.
                                                </th>
                                                <td class="px-6 py-4">
                                                    FBD-{data._id}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* <h2 className="text-2xl font-semibold mt-3 py-3">
                                    MAIN FEATURES
                                </h2> */}
                                
                        </div>

                        
                    </div>
                </div>
                <div className=" w-full mx-0 lg:mx-6 text-primary">
                    <h3 className="text-xl font-semibold mb-6 text-primary">Contact us for more information</h3>
                    <form className="mb-14">
                        
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_name" id="floating_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer" placeholder=" " required />
                            <label for="floating_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer" placeholder=" " required />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="number" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer" placeholder=" " required />
                            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                        </div>
                        <div className="mb-6">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-primary focus:border-blue-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" class="text-white bg-secondary hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-900 dark:hover:bg-blue-900 dark:focus:ring-blue-900">Submit</button>
                    </form>
                    {/* RECENT CARDS */}
                    <a href="#" class="flex my-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-44 md:rounded-none md:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNlyoezM-XEc6zY5hM38kW1wBVbghCszsrTQ&usqp=CAU" alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">1,95,00,000/-৳</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Bashundhara, Dhaka </p>
                            <div className="flat-features flex text-lg">
                                <div className="flex align-middle justify-start">
                                    <FaBed className="my-1"/>
                                    <span className="mx-5 ml-2">{data.flat_feature[0].room}</span>
                                </div>
                                <div className="flex align-middle justify-start">
                                    <FaBath className="my-1"/>
                                    <span className="mx-5 ml-2">{data.flat_feature[0].bathroom}</span>
                                </div>
                            </div>
                            
                            <div className="flex align-middle my-2 justify-start">
                                    <FaBorderAll className="my-1"/>
                                    <span className="mx-5 ml-2">{data.size}</span>
                            </div>
                        </div>
                    </a>
                    <a href="#" class="flex my-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-44 md:rounded-none md:rounded-l-lg" src="https://de51gn.com/wp-content/uploads/2020/04/TOUCH_House_Enfold_003.jpg" alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">1,95,00,000/-৳</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Bashundhara, Dhaka </p>
                            <div className="flat-features flex text-lg">
                                <div className="flex align-middle justify-start">
                                    <FaBed className="my-1"/>
                                    <span className="mx-5 ml-2">{data.flat_feature[0].room}</span>
                                </div>
                                <div className="flex align-middle justify-start">
                                    <FaBath className="my-1"/>
                                    <span className="mx-5 ml-2">{data.flat_feature[0].bathroom}</span>
                                </div>
                            </div>
                            
                            <div className="flex align-middle my-2 justify-start">
                                    <FaBorderAll className="my-1"/>
                                    <span className="mx-5 ml-2">{data.size}</span>
                            </div>
                        </div>
                    </a>
                    <a href="#" class="flex my-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-44 md:rounded-none md:rounded-l-lg" src="https://de51gn.com/wp-content/uploads/2020/04/TOUCH_House_Enfold_003.jpg" alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">1,95,00,000/-৳</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Bashundhara, Dhaka </p>
                            <div className="flat-features flex text-lg">
                                <div className="flex align-middle justify-start">
                                    <FaBed className="my-1"/>
                                    <span className="mx-5 ml-2">{data.flat_feature[0].room}</span>
                                </div>
                                <div className="flex align-middle justify-start">
                                    <FaBath className="my-1"/>
                                    <span className="mx-5 ml-2">{data.flat_feature[0].bathroom}</span>
                                </div>
                            </div>
                            
                            <div className="flex align-middle my-2 justify-start">
                                    <FaBorderAll className="my-1"/>
                                    <span className="mx-5 ml-2">{data.size}</span>
                            </div>
                        </div>
                    </a>
                    <a href="#" class="flex my-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-44 md:rounded-none md:rounded-l-lg" src="https://static.dezeen.com/uploads/2018/05/square-house-suzuki-architecture-residential-japan-shops_dezeen_sq-1.jpg" alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">1,95,00,000/-৳</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Bashundhara, Dhaka </p>
                            <div className="flat-features flex text-lg">
                                <div className="flex align-middle justify-start">
                                    <FaBed className="my-1"/>
                                    <span className="mx-5 ml-2">{data.flat_feature[0].room}</span>
                                </div>
                                <div className="flex align-middle justify-start">
                                    <FaBath className="my-1"/>
                                    <span className="mx-5 ml-2">{data.flat_feature[0].bathroom}</span>
                                </div>
                            </div>
                            
                            <div className="flex align-middle my-2 justify-start">
                                    <FaBorderAll className="my-1"/>
                                    <span className="mx-5 ml-2">{data.size}</span>
                            </div>
                        </div>
                    </a>

                </div>
                
               

            </div>
        </div>
    );
};

export default property_details;