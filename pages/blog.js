import Blogs from "@/Components/Blog/Blogs/Blogs";
import Loader from "@/Components/Shared/Loader/Loader";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { RxCrossCircled } from 'react-icons/rx'
import { IoMdAddCircleOutline } from "react-icons/io";



const blog = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const data = new Date().toJSON().slice(0, 10);
    const [showAddBlog, setShowAddBlog] = useState(false)


    const handel = (e) => {
        e.preventDefault()
        setLoading(true)
        const title = e.target.title.value
        const message = e.target.message.value
        // const file = e.target.title.file
        const image = e.target.image.files[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=9b886ea0069808da69e30cf31f29ca72`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {
                if (image.success) {
                    const blogsData = {
                        image: image.data.display_url,
                        title,
                        message,
                        email: user?.email,
                        data,
                    }
                    fetch(`https://server-fare-bd.vercel.app/postBlog`, {
                        method: 'POST',
                        headers: {

                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(blogsData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            setLoading(false)
                            toast.success('Success')
                            refetch();
                            // console.log('Success log');
                        })
                }
            })

    }


    const { data: blogs, isLoading, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const res = await fetch('https://server-fare-bd.vercel.app/getBlog', {


                })
                const data = await res.json();
                return data;
            } catch (error) {
                // console.log(error);
            }
        }
    })

    // loading
    if (isLoading || loading) {
        return <Loader></Loader>
    }


    return (
        <div className="bg-green-300 py-24 w-full mx-auto">
            <div className="max-w-[1440px] w-[95%] mx-auto ">
                <div className="container">
                    <section className="mb-8 relative">
                        {user ?
                            <button onClick={() => setShowAddBlog(!showAddBlog)} className="flex justify-center items-center btn btn-primary text-white bg-primary py-2 px-3 text-xl absolute -top-16 right-0">{showAddBlog ? <p className="flex items-center gap-2">Not Now <RxCrossCircled size={28} /></p> : <p className="flex items-center gap-2"><IoMdAddCircleOutline size={28} /> Add New Blog</p>}</button>
                            :
                            <div className="text-center"> <Link href={'/login'}><button className="flex justify-center items-center btn btn-primary text-white bg-red-500 py-2 px-3 text-xl absolute -top-16 right-0">Please Login to Add Blog</button></Link></div>
                        }
                        <div id="add-blog" className={`container ${!showAddBlog && 'hidden'}`}>

                            {
                                user?.email ? <div className="grid grid-cols-1 gap-6 mt-12">
                                    <div className="grid grid-cols-1">
                                        <div className="max-w-[752px] text-center mx-auto">
                                            <h3 className="font-semibold text-4xl leading-snug md:text-5xl md:leading-[62px]">New Add Blog</h3>
                                        </div>
                                    </div>
                                    <form className="max-w-[752px] w-full mx-auto " onSubmit={handel}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <input type="text" required name="title" className="form-input w-full" placeholder="Enter Blog Title" />
                                            </div>
                                            <div>
                                                <input type="file" required name="image" className="form-input w-full" placeholder="Enter your email" />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <textarea type="text" required name="message" rows="4" className=" w-full" placeholder="Write your message"> </textarea>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <input type="submit" className=" bg-green-500 hover:bg-primary text-white py-4 w-full" defaultValue="Submit comment" />
                                            </div>
                                        </div>
                                    </form>
                                </div> : <div className="text-center mt-8"> <Link className="ml-2 text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href={'/login'}>Login</Link></div>
                            }

                        </div>
                    </section>
                    <section>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
                            {
                                blogs?.data?.map(blogtext =>
                                    <Blogs key={blogtext._id} blogtext={blogtext}></Blogs>
                                )
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default blog;