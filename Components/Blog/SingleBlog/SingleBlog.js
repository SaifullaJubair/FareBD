import Loader from "@/Components/Shared/Loader/Loader";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const SingleBlog = ({ singleblog }) => {
    // console.log(singleblog);
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const data = new Date().toJSON().slice(0, 10);

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
                    fetch(`http://localhost:5000/postBlog`, {
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
                            console.log('Success log');
                        })
                }
            })

    }

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className="max-w-[1440px] w-[95%] mx-auto">
            <section className="md:pb-[120px] pb-20">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div>
                            <img src={singleblog?.image} className="w-[100vh] mx-auto" alt="" />
                            <div className="mrelative max-w-[752px] mx-auto space-y-10 md:space-y-12">
                                <div className="space-y-6">
                                    <div className="border-l-4 border-green pl-6 mt-8">
                                        <h3 className="font-semibold text-[22px] leading-9 ">{singleblog?.title}</h3>
                                    </div>

                                    <p className="text-[15px] leading-7 text-dark-light">
                                        {singleblog?.message}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:py-[120px] py-20">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="max-w-[752px] text-center mx-auto">
                            <h3 className="font-semibold text-4xl leading-snug md:text-5xl md:leading-[62px]">New Add Blog</h3>
                        </div>
                    </div>
                    {
                        user?.email ? <div className="grid grid-cols-1 gap-6 mt-12">
                            <form className="max-w-[752px] w-full mx-auto " onSubmit={handel}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <input type="text" required name="title" className="form-input w-full" placeholder="Enter Blog Title" />
                                    </div>
                                    <div>
                                        <input type="file" required name="image" className="form-input w-full" placeholder="Enter your email" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <textarea type="text" required name="message" rows="4" className=" w-full" Value="Write your message"> </textarea>
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
        </div>
    );
};

export default SingleBlog;