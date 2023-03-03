import { useRouter } from 'next/router';
import React from 'react';

const blogdetails = () => {
    const router = useRouter();
    let { blogid } = router.query;
    return (
        <div>
            hi
        </div>
    );
};

export default blogdetails;