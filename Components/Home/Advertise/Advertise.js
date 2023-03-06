import { useQuery } from "@tanstack/react-query";
import { BsPersonFill, BsArrowRight } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import Loader from "@/Components/Shared/Loader/Loader";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
const Advertise = () => {

  const { user } = useContext(AuthContext);
  const [advertises, setAdvertises] = useState([])


  useEffect(() => {
    fetch(`http://localhost:5000/advertise`)
      .then(res => res.json())
      .then(data => setAdvertises(data))
  }, [user])



  return (
    <div className="mt-28 mb-16 max-w-[1440px] w-[95%] mx-auto ">
      <h2 className="mb-10 text-4xl font-semibold text-center">Advertised</h2>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {/* card 1 */}
        {
          advertises?.map(advertised =>
            <Link href={`/singleproperty/${advertised?._id}`}><div key={advertised?._id}>
              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0.8)), url(${advertised?.property_picture})`,
                  backgroundSize: "cover",
                }}
                className="w-[375px] h-80 object-cover object-center relative "
              >
                {/* Inner Pop Up Div */}
              </div>
              <div className="bg-gray-50 w-[330px] mx-auto px-5 pt-5 pb-7 transfrom -translate-y-11">
                <div className="flex items-center gap-5 text-gray-600">
                  <div className="flex items-center gap-1">
                    <img
                      src={advertised?.user_image}
                      className=" w-8 h-8 rounded-full"
                      alt=""
                    />
                    <span>{advertised?.user_name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BiCalendar className="text-xl" />
                    <span>{advertised?.post_date}</span>
                  </div>
                </div>
                <h4 className="text-2xl my-3 font-semibold hover:text-secondary transition duration-200">
                  { }
                </h4>
                <p>{ }</p>
                <BsArrowRight className="text-2xl font-semibold absolute left-1/2 transform -translate-x-1/2 -bottom-3 bg-secondary/90 transtion duration-300 cursor-pointer hover:bg-secondary w-8 h-8 rounded-full p-1 text-white" />
              </div>
            </div>
            </Link>
          )}
      </div>

    </div>
  );
};

export default Advertise;
