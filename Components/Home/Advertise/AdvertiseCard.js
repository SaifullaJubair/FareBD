import Link from "next/link";
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
} from "react-icons/fa";

const AdvertiseCard = ({ adData }) => {

  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }
  const priceWithCommas = numberWithCommas(adData?.price);

  return (
    <>
      <div className="relative mx-auto w-full">
        <Link
          href={`/singleproperty/${adData?._id}`}
          className="relative inline-block transition-transform transform w-full"
        >
          <div className="shadow p-4 rounded-lg bg-white">
            <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
              <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                <div className="absolute inset-0">
                  <img className="w-full" src={adData.property_picture} alt="" srcset="" />
                </div>
              </div>

              <div className="absolute flex justify-center bottom-0 mb-3">
                <div className="flex bg-white px-4 py-1 pb-5 -mb-4 space-x-5 rounded-t-lg overflow-hidden">
                  <p className="flex items-center font-medium text-gray-800">
                    <svg
                      className="w-5 h-5 fill-current mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path>
                    </svg>
                    {adData.flat_feature[0].room}
                  </p>

                  <p className="flex items-center font-medium text-gray-800">
                    <svg
                      className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path>
                    </svg>
                    {adData.flat_feature[0].floor}
                  </p>

                  <p className="flex items-center font-medium text-gray-800">
                    <svg
                      className="w-5 h-5 fill-current mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"></path>
                    </svg>
                    {adData.flat_feature[0].bathroom}
                  </p>
                </div>
              </div>

              <span className="absolute top-0 left-0 inline-flex  px-3 py-2 rounded-br-3xl z-10 bg-secondary text-sm font-medium text-white select-none">
                Featured
              </span>
            </div>

            <div className="mt-4">
              <h2
                className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                title="New York"
              >
                {adData.property_name}
              </h2>
              <p
                className="mt-2 text-sm text-gray-800 line-clamp-1"
                title="New York, NY 10004, United States"
              >
                {adData.location}, {adData.division}
              </p>
            </div>

            <div className="grid grid-cols-2 mt-8">
              <div className="flex items-center">
                <div className="relative">
                  <div className="">
                    <img className="border-2 border-secondary rounded-full w-8 h-8 md:w-10 md:h-10 bg-gray-200" src={adData.user_image} alt="" srcset="" />
                  </div>
                  <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full">
                  </span>
                </div>

                <p className="ml-2 text-gray-800 line-clamp-1">John Doe</p>
              </div>

              <div className="flex justify-end">
                <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                  <span className="text-3xl font-bold uppercase">৳</span>
                  <span className="text-lg">{priceWithCommas}</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default AdvertiseCard;
