import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { BiPurchaseTagAlt } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Loader from "@/Components/Shared/Loader/Loader";
import CheckoutForm from "./checkoutForm";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
const stripePromise = loadStripe(
  "pk_test_51M5tTOKnej6sIH3rVMIsxguAqm18XGZR02SC20g8iK1BNNbFfESn0w8VEPo1zEZAXcQFMfUfZylKD2jJaMeqauWf00b9CPAVTd"
);

function purchase() {
  const router = useRouter();
  const id = router.query?.purchaseId;

  const { user } = useContext(AuthContext);
  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!router.isReady) return;
      try {
        const res = await fetch(`http://localhost:5000/singleproperty/${id}`);
        const data = await res.json();
        setLoading(false);
        setError("");
        return setProperty(data);
      } catch (err) {
        setLoading(false);
        setError(err);
        console.log(err);
      }
    };
    fetchData();
  }, [router.isReady]);

  return (
    <div className="my-16 mb-16 max-w-[1440px] w-[95%] mx-auto">
      {loading && <Loader />}
      <div className="w-3/4 mx-auto">
        <div className="space-y-5">
          {error && "An unknown error has occured ): Try to reload the page."}
          <div className="flex items-center gap-1">
            <BiPurchaseTagAlt className="text-2xl text-secondary/60 sm:text-xl" />
            <h1 className="text-lg font-semibold">
              You are{" "}
              {property?.property_condition === "toRent" ? "renting" : "paying"}{" "}
              for {property?.property_name}
            </h1>
          </div>
          <h2 className="text-lg font-semibold sm:text-xl">User Information</h2>
          <div className="flex items-center gap-1 outline-none">
            <BsPerson className="text-xl text-secondary/60" />
            <span className="w-full">{user?.displayName}</span>
          </div>
          <div className="flex items-center gap-1 outline-none">
            <MdOutlineEmail className="text-xl text-secondary/60" />
            <span className="w-full">{user?.email}</span>
          </div>
        </div>
        <div className="my-8 rounded-md shadow-md shadow-secondary/text-secondary/60/60">
          <Elements stripe={stripePromise}>
            <CheckoutForm property={property} />
          </Elements>
          {/* {!isLoading && !isError && (
          )} */}
        </div>
      </div>
    </div>
  );
}

export default purchase;
