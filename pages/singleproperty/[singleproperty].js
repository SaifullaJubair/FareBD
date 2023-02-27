import SinglePropertyPage from '@/Components/SinglePropertyPage/SinglePropertyPage';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';


const singleproperty = () => {
    const router = useRouter();
    let { propertyid } = router.query;
    // console.log(propertyid);

    return (
        <div>
            <SinglePropertyPage></SinglePropertyPage>
        </div>
    );
};

export default singleproperty;