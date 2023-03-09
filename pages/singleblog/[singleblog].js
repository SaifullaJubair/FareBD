import SingleBlog from "@/Components/Blog/SingleBlog/SingleBlog";
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';


const singleblog = () => {
    const router = useRouter();
    const SingleBlogId = router.query.singleblog;
    const [singleblog, setSingleBlog] = useState(null);

    useEffect(() => {
        fetch(`https://server-fare-bd.vercel.app/getBlog/${SingleBlogId}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setSingleBlog(data);

            });
    }, [SingleBlogId]);

    return (
        <div>
            {
                <SingleBlog singleblog={singleblog}
                ></SingleBlog>
            }
        </div>
    );
};

export default singleblog;