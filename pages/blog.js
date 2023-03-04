import Blogs from "@/Components/Blog/Blogs";
import Loader from "@/Components/Shared/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";



const blog = () => {


    const { data: blogs, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/getBlog', {


                })
                const data = await res.json();
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    })

    // loading
    if (isLoading) {
        return <Loader></Loader>
    }


    return (
        <div className="bg-green-300 py-24">
            <div className="max-w-[1440px] w-[95%] mx-auto ">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            blogs?.data?.map(blogtext =>
                                <Blogs key={blogtext._id} blogtext={blogtext}></Blogs>

                            )
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default blog;