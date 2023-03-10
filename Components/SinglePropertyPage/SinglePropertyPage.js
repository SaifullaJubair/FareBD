import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {
  FaBed,
  FaBath,
  FaBorderAll,
  FaMapMarkerAlt,
  FaRegHeart,
  FaComment,
  FaLock,
  FaAngleDown,
  FaHome,
  FaHeart,
} from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { BiInfoCircle, BiPurchaseTagAlt, BiSend } from "react-icons/bi";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Comment from "./Comment";
import { Avatar, Button, TextInput } from "flowbite-react";
import Loader from "../Shared/Loader/Loader";
import { IoCall } from "react-icons/io5";
import ConfirmationModal from "../Shared/ConfirmationModal/ConfirmationModal";

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
}

// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const SinglePropertyPage = ({ propertyDetails }) => {
  const data = propertyDetails;
  const [recommendations, setRecommendations] = useState(null);
  const [singleProperty, setSingleProperty] = useState({});
  const [loading, setLoading] = useState(false);
  const [showCallNowModal, setShowCallNowModal] = useState(false);
  const [wishList, setWishList] = useState(false);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://server-fare-bd.vercel.app/searchByDivision/${data?.division}`)
      .then((res) => res.json())
      .then((data) => {
        setRecommendations(data);
      });
  }, [data]);

  // checking if the wishlist exist or not
  useEffect(() => {
    if (!user?.email) return;
    fetch(`https://server-fare-bd.vercel.app/wishlist/${data?._id}?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.userEmail === user.email) {
          setWishList(true);
        } else setWishList(false);
      });
  }, [data?._id, user?.email]);

  // console.log(data._id);
  const priceWithCommas = numberWithCommas(data.price);

  const {
    property_picture,
    property_type,
    area_type,
    division,
    authorName,
    _id,
    location,
    property_name,
    owner_name,
    price,
    property_condition,
  } = data;
  // console.log(data);

  const { data: comments = [], refetch } = useQuery({
    queryKey: ["comment"],

    queryFn: async () => {
      const res = await fetch(`https://server-fare-bd.vercel.app/comment/${_id}`);
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  const handleComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    // console.log(comment,  createdAt, user?.email, user?.displayName,
    // )
    setLoading(true);
    const AddComment = {
      propertyId: _id,
      property_name,
      property_picture,
      property_type,
      owner_name,
      price,
      area_type,
      division,
      location,
      property_condition,
      username: user?.displayName,
      email: user?.email,
      img: user?.photoURL,
      comment,
      createdAt: new Date().toISOString(),
    };
    fetch(`https://server-fare-bd.vercel.app/addcomment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(AddComment),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        toast("Comment  added", {
          position: toast.POSITION.TOP_CENTER,
        });
        refetch();
        setLoading(false);
        form.reset("");
      });
    // console.log(AddComment);
  };

  const handleWishList = (propertyData) => {
    setWishList((prevState) => !prevState);

    const wishItemInfo = {
      // UserInfo
      userId: user?.uid,
      userName: user?.displayName,
      userEmail: user?.email,
      userPhoto: user?.photoURL,
      // PropertyInfo
      propertyId: propertyData?._id,
      propertyName: propertyData?.property_name,
      propertyPicture: propertyData?.property_picture,
      propertyPrice: propertyData?.price,
      propertyCondition: propertyData?.property_condition,
      // SellerInfo
      sellerName: propertyData?.user_name,
      sellerEmail: propertyData?.user_email,
      sellerPhoto: propertyData?.user_image,
    };
    // console.log(wishItemInfo);

    if (wishList) {
      return fetch(
        `https://server-fare-bd.vercel.app/wishlist/${data?._id}?email=${user?.email}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) setWishList(false);
        })
        .catch((err) => console.log(err));
    } else {
      return fetch("https://server-fare-bd.vercel.app/add-wishlist", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(wishItemInfo),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="my-16 mb-16 max-w-[1440px] w-[95%] mx-auto overflow-x-auto">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-1 lg:col-span-4 md:col-span-2">
          <img
            className="h-auto w-full"
            src={data.property_picture}
            alt="property_picture"
          />
          <div className="my-5 text-area text-primary">
            <div className="m">
              <div className="flex justify-between">
                <h2 className="text-3xl font-semibold text-orange-600">
                  <span className="text-2xl">BDT </span>
                  {priceWithCommas}/-
                  <TbCurrencyTaka className="inline mb-2 -ml-2 text-4xl" />
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleWishList(data)}
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-md font-medium text-primary focus:outline-none bg-primary/5
                     rounded-md transition duration-300 hover:bg-primary/10 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-[108px]"
                  >
                    {wishList ? (
                      <>
                        <FaHeart className="inline mr-2 font-bold text-secondary" />
                        Saved
                      </>
                    ) : (
                      <>
                        <FaRegHeart className="inline mr-2 font-bold" />
                        Save
                      </>
                    )}
                  </button>
                  {user?.email && !data?.paid && (
                    <Link
                      href={`/purchase/${data?._id}`}
                      type="button"
                      className="py-2.5 px-5 mr-2 mb-2 text-md font-medium text-primary focus:outline-none bg-primary/5
                     rounded-md transition duration-300 hover:bg-primary/10 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      <BiPurchaseTagAlt className="inline mr-2 font-bold" />
                      {data.property_condition === "toRent"
                        ? "Rent Now"
                        : "Buy Now"}
                    </Link>
                  )}
                </div>
              </div>

              <h2 className="mb-2 text-xl font-semibold">
                <FaMapMarkerAlt className="inline mb-1 mr-2" />
                {data.location}
              </h2>

              <div className="flex text-lg flat-features">
                <div className="flex justify-start align-middle">
                  <FaBed className="my-1" />
                  <span className="mx-5 ml-2">
                    {data.flat_feature[0].room} Beds
                  </span>
                </div>
                <div className="flex justify-start align-middle">
                  <FaBath className="my-1" />
                  <span className="mx-5 ml-2">
                    {data.flat_feature[0].bathroom} Baths
                  </span>
                </div>
                <div className="flex justify-start align-middle">
                  <FaBorderAll className="my-1" />
                  <span className="mx-5 ml-2">{data.size}</span>
                </div>
              </div>
            </div>
            <h2 className="py-3 my-3 text-2xl font-semibold border-t-2 border-secondary">
              {data.property_heading}
            </h2>
            <div className="property-details">
              <p className="my-3 text-lg text-gray-500">{data.details}</p>
            </div>
            <div className="m">
              <h2 className="py-3 mt-3 text-2xl font-semibold">
                PROPERTY INFORMATION
              </h2>

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Type
                      </th>
                      <td className="px-6 py-4">{data.property_type}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Purpose
                      </th>
                      <td className="px-6 py-4">{data.property_condition}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Division Status
                      </th>
                      <td className="px-6 py-4">{data.division}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Completation Status
                      </th>
                      <td className="px-6 py-4">{data.completation_status}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Registered
                      </th>
                      <td className="px-6 py-4">{data.registered}</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Reference no.
                      </th>
                      <td className="px-6 py-4">FBD-{data._id}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* User Comment Box*/}
          <div className="review-section">
            <div className="mt-8 ">
              <hr />
            </div>
            <div className="my-8">
              <h1 className="flex items-center gap-2 pb-4 text-lg text-gray-500">
                <span>
                  {" "}
                  <FaComment></FaComment>
                </span>{" "}
                Post a comment
              </h1>
              <form onSubmit={handleComment}>
                {user?.uid ? (
                  !loading ? (
                    <div className="flex items-center gap-2">
                      <Avatar rounded={true} />
                      <TextInput
                        id="md"
                        type="text"
                        sizing="md"
                        name="comment"
                        className="w-full lg:w-7/12"
                      />
                      <Button size="sm" color="gray" type="submit">
                        <BiSend className="mr-1"></BiSend>{" "}
                        <span className="font-semibold">Post</span>
                      </Button>
                    </div>
                  ) : (
                    <Loader></Loader>
                  )
                ) : (
                  <div></div>
                )}
              </form>
              {user?.uid ? (
                <p></p>
              ) : (
                <div>
                  <p className="flex items-center gap-2 mt-4 ">
                    Please
                    <Link
                      className="text-lg font-semibold text-blue-500"
                      href="/login"
                    >
                      <span className="flex items-center gap-1">
                        <FaLock className="text-gray-800"></FaLock> Login
                      </span>
                    </Link>{" "}
                    first to comment.
                  </p>
                </div>
              )}
            </div>
            <div className="mb-6">
              <hr />
            </div>
            {/* right side  */}

            <Comment
              id={_id}
              comments={comments}
              commentRefetch={refetch}
            ></Comment>
            <div className="flex justify-start gap-2 my-8 ">
              <Button outline={true}>
                <span className="flex items-center">
                  <FaAngleDown className="mr-1"></FaAngleDown>{" "}
                  <span>Load More</span>
                </span>
              </Button>
              <Link href="/" className="text-gray-600 ">
                <Button outline={true} gradientDuoTone="purpleToBlue">
                  <span className="flex items-center">
                    <FaHome className="mr-2"></FaHome> <span>Home</span>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* comments section ends here  */}

        {/*--------- right sidebar -------- */}
        <div className="col-span-1 mx-auto lg:col-span-2 md:col-span-1">
          <h3 className="mb-6 text-xl font-semibold text-primary">
            Contact us for more information
          </h3>
          <form className="mb-14">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone
              </label>
            </div>
            <div className="mb-6">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-primary focus:border-blue-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="text-white bg-secondary hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-900 dark:hover:bg-blue-900 dark:focus:ring-blue-900"
              >
                Submit
              </button>
              <span
                onClick={() => setShowCallNowModal(!showCallNowModal)}
                className="text-white bg-secondary hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-900 dark:hover:bg-blue-900 dark:focus:ring-blue-900 flex items-center gap-1 cursor-pointer"
              >
                <IoCall /> Call Now
              </span>
            </div>
          </form>
          {
            // Call Now Modal
            showCallNowModal && (
              <div
                id="popup-modal"
                tabIndex="-1"
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
              >
                <div className="relative w-full h-full max-w-md rounded-lg md:h-auto">
                  <div className="relative bg-gray-200 rounded-lg shadow dark:bg-gray-700">
                    <button
                      onClick={() => setShowCallNowModal(!showCallNowModal)}
                      type="button"
                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-modal-hide="popup-modal"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center">
                      <p className="my-1 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Call Us Now
                      </p>
                      <p className="my-1 text-lg font-normal text-gray-500 dark:text-gray-400"></p>
                      <p className="flex items-center justify-center gap-2 my-1 text-lg font-normal text-primary dark:text-gray-400">
                        <IoCall size={24} className="text-center" />
                        +8801923-868397
                      </p>
                      <p className="my-1 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Please tell us the Property ID
                      </p>
                      <p className="my-1 text-lg font-normal text-primary dark:text-gray-400">
                        ID-{propertyDetails._id.slice(-10).toUpperCase()}
                      </p>
                      <button
                        onClick={() => setShowCallNowModal(!showCallNowModal)}
                        data-modal-hide="popup-modal"
                        type="button"
                        className={`text-white bg-secondary hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2`}
                      >
                        Okay!
                      </button>
                      {/* <button onClick={() => setData(null)} data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">{cancelActionName}</button> */}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          {/* RECENT CARDS */}
          {recommendations?.map((recommendation) => (
            <Link
              href={`/singleproperty/${recommendation?._id}`}
              className="flex my-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-44 md:rounded-none md:rounded-l-lg"
                src={recommendation.property_picture}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {recommendation.price}/-???
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {" "}
                  {recommendation.location}{" "}
                </p>
                <div className="flex text-lg flat-features">
                  <div className="flex justify-start align-middle">
                    <FaBed className="my-1" />
                    <span className="mx-5 ml-2">
                      {recommendation.flat_feature[0].room}
                    </span>
                  </div>
                  <div className="flex justify-start align-middle">
                    <FaBath className="my-1" />
                    <span className="mx-5 ml-2">
                      {recommendation.flat_feature[0].bathroom}
                    </span>
                  </div>
                </div>

                <div className="flex justify-start my-2 align-middle">
                  <FaBorderAll className="my-1" />
                  <span className="mx-5 ml-2">{recommendation.size}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyPage;
