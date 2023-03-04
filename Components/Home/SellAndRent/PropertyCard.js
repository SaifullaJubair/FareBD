import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
const PropertyCard = ({propertyData}) => {
  const { user } = useContext(AuthContext);
    // console.log(propertyData);


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

    }
    // console.log(wishItemInfo);

  const addWishlist = (wishItem) => {
      fetch('http://localhost:5000/add-wishlist',{
        method: 'POST',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(wishItem)
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return (
    <>
      <div propertyData={propertyData} className="w-full">
        <div className="single-product-wrap style-bottom ">
          <div className="thumb relative">
            <img
              className="w-full h-64"
              src={propertyData?.property_picture}
              alt="img"
            />
            <div className="product-wrap-details absolute bottom-0 left-0 w-full px-9 text-white">
              <div className="media flex items-center mb-4 justify-between">
                <div className="author">
                  <img
                    className=" mr-4 h-10 w-10 rounded-full"
                    src={propertyData?.user_image}
                    alt="img"
                  />
                </div>
                <div className="media-body text-xs font-medium">
                  <h6 className="">
                    <a href="#">{propertyData?.owner_name}</a>
                  </h6>
                  <p className="flex">
                    <span className="text-xl">
                      <CiLocationOn></CiLocationOn>
                    </span>
                    {propertyData?.location}
                  </p>
                </div>
                <div onClick={() => addWishlist(wishItemInfo)} className="fav-btn float-right cursor-pointer">
                  <span className="text-3xl hover:text-secondary ease-in duration-300">
                    <AiOutlineHeart> </AiOutlineHeart>
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <Link href={`/singleproperty/${propertyData?._id}`}>
            <div className="product-details-inner bg-gray-200 py-5 px-9 ">
              <h4 className="font-medium mb-3 text-primary text-2xl hover:text-secondary ease-in duration-300">
                <a href="property-details.html">{propertyData?.property_name}</a>
              </h4>
              <ul className="meta-inner flex mb-3 justify-items-start">
                <li className="flex mr-3 text-sm">
                  <span className="text-xl mr-2"></span>
                  <CiLocationOn></CiLocationOn>
                  {propertyData?.location}
                </li>
                <li className="bg-secondary text-sm text-white px-2">
                  {
                     propertyData?.property_condition==="toRent" ? "To Rent" : "For Sell"
                  }
                </li>
              </ul>
              <p>{propertyData?.property_heading}</p>
            </div>
            <div className="product-meta-bottom font-medium text-primary bg-gray-300 py-5 px-9">
              <span className="price">$ {propertyData?.price}</span>
              <span className="mx-4">
                  {
                     propertyData?.property_condition==="toRent" ? "To Rent" : "For Sell"
                  }
              </span>
              <span>{propertyData?.post_date}</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
