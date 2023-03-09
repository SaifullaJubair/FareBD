import Loader from "@/Components/Shared/Loader/Loader";
import AdvertiseCard from "./AdvertiseCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
const Advertise = () => {

  const { user, loading } = useContext(AuthContext);
  const [advertises, setAdvertises] = useState([])

  useEffect(() => {
    fetch(`https://server-fare-bd.vercel.app/advertise`)
      .then(res => res.json())
      .then(data => setAdvertises(data))
  }, [user])

  // console.log(advertises);

  // loading
  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="mt-28 mb-16 max-w-[1440px] w-[95%] mx-auto ">
      <div>
        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
          Advertised
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {advertises?.map(
          (adData) => (
            <AdvertiseCard key={adData._id} adData={adData}></AdvertiseCard>
          )
        )}
      </div>
    </div>
  );
};

export default Advertise;
