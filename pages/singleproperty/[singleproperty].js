import SinglePropertyPage from '@/Components/SinglePropertyPage/SinglePropertyPage';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// if(){
    
// }

const singleproperty = () => {
    const [propertyDetails, setPropertyDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter();
    const PropertyId = (router.query.singleproperty);
    
        useEffect(() => {
            fetch(`http://localhost:5000/singleproperty/${PropertyId ? PropertyId: ''}`)
               .then(res => res.json())
               .then(data => {
                  setPropertyDetails(data)
               })
         }, [PropertyId]);
    

    return (
        <div>
            {propertyDetails?<SinglePropertyPage
            propertyDetails={propertyDetails}
            ></SinglePropertyPage>:''}
        </div>
    );
};

export default singleproperty;