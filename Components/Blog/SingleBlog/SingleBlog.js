import Link from "next/link";
import { BiLeftArrowCircle } from "react-icons/bi";


const SingleBlog = ({ singleblog }) => {
    // console.log(singleblog);
    return (
        <div className="max-w-[1440px] w-[95%] mx-auto mt-16">
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
                        <div className="mx-auto mt-12">

                            <Link href="/blog" className="border flex items-center justify-center p-2 gap-2 text-white bg-primary" ><BiLeftArrowCircle size={20} /> Go to Blog Page</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleBlog;