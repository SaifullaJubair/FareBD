import { Button, Card, Dropdown, Tabs } from "flowbite-react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "next/link";
import PropertyCard from "./PropertyCard";


const SellAndRent = () => {

   const [toSell, setToSell] = useState([]);
   const [toRent, setToRent] = useState([]);
   const [singleProperty, setSingleProperty] = useState({});

   // Date Formatter function 
   function formatDate(dateStr) {
      const date = new Date(dateStr);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return (date.toLocaleDateString('en-US', options))
   }

   useEffect(() => {
      fetch('https://server-fare-bd.vercel.app/forSell')
         .then(res => res.json())
         .then(data => {
            setToSell(data)
         })
   }, []);
   const forSell = toSell.slice(-6)

   useEffect(() => {
      fetch('https://server-fare-bd.vercel.app/forRent')
         .then(res => res.json())
         .then(data => {
            setToRent(data)
         })
   }, []);
   const forRent = toRent.slice(-6)


   return (
      <div className="max-w-[1440px] w-[95%] mx-auto mt-24">
         <div className="proparte-title text-center mb-16">
            <p className=" text-sm font-medium text-secondary">Our Propartes</p>
            <h2 className="text-5xl font-bold text-primary">Our Propartes</h2>
         </div>

         <Tabs.Group
            aria-label="Default tabs"
            style="default"
            className="proparte-tab"
         >


            {/* rent properties */}
            <Tabs.Item
               active={true}
               title="Rent"
            >
               <div className="gap-8  grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
                  {
                     forRent?.map(propertyData =>
                        <PropertyCard
                           key={propertyData._id}
                           propertyData={propertyData}
                        ></PropertyCard>
                     )
                  }

               </div>
            </Tabs.Item>



            {/* sell properties */}

            <Tabs.Item title="Sell">
               <div className="gap-8  grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
                  {
                     forSell?.map(propertyData =>
                        <PropertyCard
                           key={propertyData._id}
                           propertyData={propertyData}
                        ></PropertyCard>
                     )

                  }


               </div>
            </Tabs.Item>


         </Tabs.Group>





      </div>
   );
};

export default SellAndRent;