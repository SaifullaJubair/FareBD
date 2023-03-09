import Link from "next/link";


const Blogs = ({ blogtext }) => {
    const { title, message, image, _id } = blogtext

    const titles = title.slice(0, 30)
    const messages = message.slice(0, 200)
    // console.log(titles, blogtext);
    return (
        <div>
            <Link href={`/blogdetails/${_id}`}>
                <div className="bg-white  items-center shadow-md  overflow-hidden">
                    <img src={image} className=" h-72   w-full md:object-cover" alt="" />
                    <div className="p-8 flex-1">
                        <p className="font-medium text-sm text-dark-semilight tracking-[0.86px] uppercase">April 17, 2022</p>
                        <h4 className="mt-4 hover:text-green-300 text-[22px] leading-[34px] font-semibold hover:text-green duration-300">{titles}</h4>
                        <p className="mt-4 text-dark-light leading-7 text-[15px]">{messages}</p>
                        <p className="text-green mt-6 inline-block hover:text-green-300 uppercase font-medium tracking-[0.86px]">Read more</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Blogs;