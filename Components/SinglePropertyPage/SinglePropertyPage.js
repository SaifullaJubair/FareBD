import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBed, FaBath, FaBorderAll, FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const SinglePropertyPage = ({propertyDetails}) => {
    const data = propertyDetails;
    const [recommendations, setRecommendations] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/searchByDivision/${data?.division}`)
           .then(res => res.json())
           .then(data => {
            setRecommendations(data)
           })
     }, [data]);

    console.log(recommendations);
    const priceWithCommas = numberWithCommas(data.price);
    
    return (
        <div className="my-16 mb-16 max-w-[1440px] w-[95%] mx-auto">

            <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
                    <div className="lg:col-span-4 md:col-span-2 col-span-1">
                        <img class="h-auto w-full" src={data.property_picture} alt="property_picture" />
                        <div className="text-area text-primary my-5">
                            <div className="m">
                                <div className="flex justify-between">
                                    <h2 className="text-3xl font-semibold text-orange-600">
                                        <span className="text-2xl">BDT </span>
                                        {priceWithCommas}/-
                                        <TbCurrencyTaka className="inline mb-2 -ml-2 text-4xl" />
                                    </h2>
                                    <button type="button"
                                        className="py-2.5 px-5 mr-2 mb-2 text-md font-medium text-primary focus:outline-none bg-teal-50 rounded-md hover:bg-pink-50 hover:text-pink-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    >
                                        <FaRegHeart className="inline font-bold mr-2" />
                                        Save
                                    </button>
                                </div>

                                <h2 className="text-xl font-semibold mb-2">
                                    <FaMapMarkerAlt className="inline mb-1 mr-2" />
                                    {data.location}
                                </h2>

                                <div className="flat-features flex text-lg">
                                    <div className="flex align-middle justify-start">
                                        <FaBed className="my-1" />
                                        <span className="mx-5 ml-2">{data.flat_feature[0].room} Beds</span>
                                    </div>
                                    <div className="flex align-middle justify-start">
                                        <FaBath className="my-1" />
                                        <span className="mx-5 ml-2">{data.flat_feature[0].bathroom} Baths</span>
                                    </div>
                                    <div className="flex align-middle justify-start">
                                        <FaBorderAll className="my-1" />
                                        <span className="mx-5 ml-2">{data.size}</span>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-2xl font-semibold border-secondary border-t-2 my-3 py-3">
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

                            </div>


                        </div>

                        {/* =================================== */}
                        <div className="review-section">
                            {/* User Comment Box*/}
                        <form>
                            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                    <label for="comment" class="sr-only">Your comment</label>
                                    <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
                                </div>
                                <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                    <button type="submit" class="text-white bg-secondary hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-900 dark:hover:bg-blue-900 dark:focus:ring-blue-900">
                                        Post comment
                                    </button>
                                    <div class="flex pl-0 space-x-1 sm:pl-2">
                                        <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                                            <span class="sr-only">Attach file</span>
                                        </button>
                                        <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                                            <span class="sr-only">Set location</span>
                                        </button>
                                        <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                                            <span class="sr-only">Upload image</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>


                            {/* Comments */}
                            
                            <figure class="max-w-screen-md">
                                <div class="flex items-center mb-4 text-yellow-300">
                                    <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <blockquote>
                                    <p class="text-2xl font-semibold text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                                </blockquote>
                                <figcaption class="flex items-center mt-6 space-x-3">
                                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture"/>
                                    <div class="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                                        <cite class="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
                                        <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
                                    </div>
                                </figcaption>
                            </figure>

                        </div>
                    </div>
                    <div className="lg:col-span-2 md:col-span-1 col-span-1 mx-auto">
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
                        {
                            recommendations?.map(recommendation=>
                                <Link href={`/singleproperty/${recommendation?._id}`} class="flex my-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-44 md:rounded-none md:rounded-l-lg" src={recommendation.property_picture} alt="" />
                                    <div class="flex flex-col justify-between p-4 leading-normal">
                                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{recommendation.price}/-৳</h5>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {recommendation.location} </p>
                                        <div className="flat-features flex text-lg">
                                            <div className="flex align-middle justify-start">
                                                <FaBed className="my-1" />
                                                <span className="mx-5 ml-2">{recommendation.flat_feature[0].room}</span>
                                            </div>
                                            <div className="flex align-middle justify-start">
                                                <FaBath className="my-1" />
                                                <span className="mx-5 ml-2">{recommendation.flat_feature[0].bathroom}</span>
                                            </div>
                                        </div>

                                        <div className="flex align-middle my-2 justify-start">
                                            <FaBorderAll className="my-1" />
                                            <span className="mx-5 ml-2">{recommendation.size}</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                        {/* <a href="#" class="flex my-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-44 md:rounded-none md:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNlyoezM-XEc6zY5hM38kW1wBVbghCszsrTQ&usqp=CAU" alt="" />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">1,95,00,000/-৳</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Bashundhara, Dhaka </p>
                                <div className="flat-features flex text-lg">
                                    <div className="flex align-middle justify-start">
                                        <FaBed className="my-1" />
                                        <span className="mx-5 ml-2">{data.flat_feature[0].room}</span>
                                    </div>
                                    <div className="flex align-middle justify-start">
                                        <FaBath className="my-1" />
                                        <span className="mx-5 ml-2">{data.flat_feature[0].bathroom}</span>
                                    </div>
                                </div>

                                <div className="flex align-middle my-2 justify-start">
                                    <FaBorderAll className="my-1" />
                                    <span className="mx-5 ml-2">{data.size}</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="flex my-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-44 md:rounded-none md:rounded-l-lg" src="https://de51gn.com/wp-content/uploads/2020/04/TOUCH_House_Enfold_003.jpg" alt="" />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">1,95,00,000/-৳</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Bashundhara, Dhaka </p>
                                <div className="flat-features flex text-lg">
                                    <div className="flex align-middle justify-start">
                                        <FaBed className="my-1" />
                                        <span className="mx-5 ml-2">{data.flat_feature[0].room}</span>
                                    </div>
                                    <div className="flex align-middle justify-start">
                                        <FaBath className="my-1" />
                                        <span className="mx-5 ml-2">{data.flat_feature[0].bathroom}</span>
                                    </div>
                                </div>

                                <div className="flex align-middle my-2 justify-start">
                                    <FaBorderAll className="my-1" />
                                    <span className="mx-5 ml-2">{data.size}</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="flex my-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-44 md:rounded-none md:rounded-l-lg" src="https://de51gn.com/wp-content/uploads/2020/04/TOUCH_House_Enfold_003.jpg" alt="" />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">1,95,00,000/-৳</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Bashundhara, Dhaka </p>
                                <div className="flat-features flex text-lg">
                                    <div className="flex align-middle justify-start">
                                        <FaBed className="my-1" />
                                        <span className="mx-5 ml-2">{data.flat_feature[0].room}</span>
                                    </div>
                                    <div className="flex align-middle justify-start">
                                        <FaBath className="my-1" />
                                        <span className="mx-5 ml-2">{data.flat_feature[0].bathroom}</span>
                                    </div>
                                </div>

                                <div className="flex align-middle my-2 justify-start">
                                    <FaBorderAll className="my-1" />
                                    <span className="mx-5 ml-2">{data.size}</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="flex my-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-44 md:rounded-none md:rounded-l-lg" src="https://static.dezeen.com/uploads/2018/05/square-house-suzuki-architecture-residential-japan-shops_dezeen_sq-1.jpg" alt="" />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">1,95,00,000/-৳</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Bashundhara, Dhaka </p>
                                <div className="flat-features flex text-lg">
                                    <div className="flex align-middle justify-start">
                                        <FaBed className="my-1" />
                                        <span className="mx-5 ml-2">{data.flat_feature[0].room}</span>
                                    </div>
                                    <div className="flex align-middle justify-start">
                                        <FaBath className="my-1" />
                                        <span className="mx-5 ml-2">{data.flat_feature[0].bathroom}</span>
                                    </div>
                                </div>

                                <div className="flex align-middle my-2 justify-start">
                                    <FaBorderAll className="my-1" />
                                    <span className="mx-5 ml-2">{data.size}</span>
                                </div>
                            </div>
                        </a> */}

                    </div>
            </div>
        </div>
        // <div>
        //     hello
        // </div>
    );
};

export default SinglePropertyPage;