import { useQuery } from "@tanstack/react-query";
import { BsPersonFill, BsArrowRight } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import Loader from "@/Components/Shared/Loader/Loader";
import Link from "next/link";
import AdvertiseCard from "./AdvertiseCard";
const Advertise = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/advertise", {});
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  // loading
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="mt-28 mb-16 max-w-[1440px] w-[95%] mx-auto ">
      <div>
        <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
          Advertised
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {/* card 1 */}
        {products?.map(
          (adData) => (
            <AdvertiseCard key={adData._id} adData={adData}></AdvertiseCard>
          )
          // <Link href={`/singleproperty/${advertised?._id}`}><div key={advertised?._id}>
          //   <div
          //     style={{
          //       backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0.8)), url(${advertised?.property_picture})`,
          //       backgroundSize: "cover",
          //     }}
          //     className="w-[375px] h-80 object-cover object-center relative "
          //   >
          //     {/* Inner Pop Up Div */}
          //   </div>
          //   <div className="bg-gray-50 w-[330px] mx-auto px-5 pt-5 pb-7 transfrom -translate-y-11">
          //     <div className="flex items-center gap-5 text-gray-600">
          //       <div className="flex items-center gap-1">
          //         <img
          //           src={advertised?.user_image}
          //           className=" w-8 h-8 rounded-full"
          //           alt=""
          //         />
          //         <span>{advertised?.user_name}</span>
          //       </div>
          //       <div className="flex items-center gap-1">
          //         <BiCalendar className="text-xl" />
          //         <span>{advertised?.post_date}</span>
          //       </div>
          //     </div>
          //     <h4 className="text-2xl my-3 font-semibold hover:text-secondary transition duration-200">
          //       { }
          //     </h4>
          //     <p>{ }</p>
          //     <BsArrowRight className="text-2xl font-semibold absolute left-1/2 transform -translate-x-1/2 -bottom-3 bg-secondary/90 transtion duration-300 cursor-pointer hover:bg-secondary w-8 h-8 rounded-full p-1 text-white" />
          //   </div>
          // </div>
          // </Link>
        )}
      </div>
    </div>
  );
};

export default Advertise;
