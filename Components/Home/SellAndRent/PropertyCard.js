import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
const PropertyCard = ({ propertyData }) => {
  console.log(propertyData);
  return (
    <Link href={`/singleproperty/${propertyData?._id}`}>
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
              </div>
            </div>
          </div>

          <div className="product-details-inner bg-gray-200 py-5 px-9 ">
            <h4 className="font-medium mb-3 text-primary text-2xl hover:text-secondary ease-in duration-300">
              <a href="property-details.html">{propertyData?.property_name}</a>
            </h4>
            <ul className="meta-inner flex items-center mb-3 justify-between">
              <li className="flex mr-3 text-sm items-center">
                <CiLocationOn></CiLocationOn>
                {propertyData?.location}
              </li>
              <li className="bg-secondary text-sm text-white px-2">
                {propertyData?.property_condition === "toRent"
                  ? "To Rent"
                  : "For Sell"}
              </li>
            </ul>
            <p className="min-h-[48px]">
              {propertyData?.details.length > 60
                ? propertyData?.details.slice(0, 60) + "..."
                : propertyData?.details}
            </p>
          </div>
          <div className="product-meta-bottom font-medium text-primary bg-gray-300 py-5 px-9">
            <span className="price">$ {propertyData?.price}</span>
            <span className="mx-4">
              {propertyData?.property_condition === "toRent"
                ? "To Rent"
                : "For Sell"}
            </span>
            <span>{propertyData?.post_date?.slice(0, 10)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
