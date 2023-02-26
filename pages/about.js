import About from "@/Components/Home/About/About";
import Review from "@/Components/Home/Review/Review";
import img from '../assets/images/about.jpg'
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
const about = () => {
    return (
        <div>
            <div className="max-w-7xl w-full mx-auto py-20">
                <div className="nc-SectionHero relative ">
                    <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
                        <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7"><h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">👋 About Us.</h2><span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">Our Customers want to be able to research, browse, and pay for rentals online,
                            just like they do for other products. To meet the needs of customers and sellers, we must have
                            our own website. Renters will be customers, while homeowners will be vendors.
                            There will be an admin panel to control the entire system.</span>
                        </div>
                        <div className="flex-grow">
                            <img alt="" src={img.src} className="w-full rounded-lg" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>

            <section className=" mx-auto md:py-[120px] py-20 bg-primary">
                <div className=" m-auto max-w-7xl w-full">
                    <div className="grid grid-cols-1">
                        <div className="max-w-[461px] text-center mx-auto">

                            <h2 className="font-semibold  text-4xl leading-snug lg:text-5xl lg:leading-[62px] text-white">Our Team</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        <div className="single-team bg-white duration-300 group pt-14 p-8 text-center hover:shadow-custom rounded-2xl">
                            <div className="border-4 border-white duration-300 group-hover:border-green inline-block rounded-full p-1">
                                <img src="https://media.licdn.com/dms/image/D5603AQGJsZPbrhfyCA/profile-displayphoto-shrink_200_200/0/1670503861276?e=1683158400&v=beta&t=5gAeALdjrFG4X81QkTbb6xRaBOgH3S3tANLp_VSMKkc" className="mx-auto rounded-full team w-48" alt="" />
                            </div>
                            <h5 className="mb-9 font-semibold text-3xl leading-7">Saifulla Jubair</h5>

                            <div className="text-center mx-auto">

                                <div className="flex justify-center items-center">
                                    <a href=""> <BsFacebook className="text-3xl  hover:text-secondary"></BsFacebook></a>
                                    <a href=""><BsLinkedin className="mx-3   text-3xl hover:text-secondary"></BsLinkedin> </a>
                                    <a href=""><BsTwitter className="text-3xl  hover:text-secondary"></BsTwitter> </a>



                                </div>


                            </div>
                        </div>
                        <div className="single-team bg-white duration-300 group pt-14 p-8 text-center hover:shadow-custom rounded-2xl">
                            <div className="border-4 border-white duration-300 group-hover:border-green inline-block rounded-full p-1">
                                <img src="https://z-p3-scontent.fdac12-1.fna.fbcdn.net/v/t39.30808-6/318735109_3311092059104047_8348304615011473732_n.jpg?stp=c182.0.960.960a_dst-jpg_p960x960&_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dZEYFxutY-wAX-RQLUJ&_nc_ht=z-p3-scontent.fdac12-1.fna&oh=00_AfD5glXVUWLFVaTNh1lfUZ4yVMeXDDT1ns_e_xHyKP-hgA&oe=63FDB43D" className="mx-auto rounded-full team w-48" alt="" />
                            </div>
                            <h5 className="mb-9 font-semibold text-3xl leading-7">Amit Paul</h5>

                            <div className="text-center mx-auto">

                                <div className="flex justify-center items-center">
                                    <a href="https://www.facebook.com/profile.php?id=100006098568214"> <BsFacebook className="text-3xl  hover:text-secondary"></BsFacebook></a>
                                    <a href="https://www.linkedin.com/in/amit-kumar-paul-p1/"><BsLinkedin className="mx-3   text-3xl hover:text-secondary"></BsLinkedin> </a>
                                    <a href="https://twitter.com/AmitPaultl"><BsTwitter className="text-3xl  hover:text-secondary"></BsTwitter> </a>



                                </div>


                            </div>
                        </div>
                        <div className="single-team bg-white duration-300 group pt-14 p-8 text-center hover:shadow-custom rounded-2xl">
                            <div className="border-4 border-white duration-300 group-hover:border-green inline-block rounded-full p-1">
                                <img src="https://z-p3-scontent.fdac12-1.fna.fbcdn.net/v/t39.30808-6/326839616_1604980509954526_482004591251444655_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RuoF-oOxMPYAX8MCDNS&_nc_ht=z-p3-scontent.fdac12-1.fna&oh=00_AfAbXFBAy8xMJRG7iY85KYkVY76ghK9_VX4wU3sJsl66kw&oe=63FD970A" className="mx-auto rounded-full team w-48" alt="" />
                            </div>
                            <h5 className="mb-9 font-semibold text-3xl leading-7">Anik Kumaar Datta</h5>

                            <div className="text-center mx-auto">

                                <div className="flex justify-center items-center">
                                    <a href="https://www.facebook.com/anik.kumaardatta"> <BsFacebook className="text-3xl  hover:text-secondary"></BsFacebook></a>
                                    <a href="https://www.linkedin.com/in/anik-datta-7809a2203"><BsLinkedin className="mx-3   text-3xl hover:text-secondary"></BsLinkedin> </a>
                                    <a href=""><BsTwitter className="text-3xl  hover:text-secondary"></BsTwitter> </a>



                                </div>


                            </div>
                        </div>
                        <div className="single-team bg-white duration-300 group pt-14 p-8 text-center hover:shadow-custom rounded-2xl">
                            <div className="border-4 border-white duration-300 group-hover:border-green inline-block rounded-full p-1">
                                <img src="https://z-p3-scontent.fdac12-1.fna.fbcdn.net/v/t39.30808-6/291682695_1535156690215588_2447617644819108838_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DbGxbMXPcdoAX8QGEhy&tn=gpyLWXAAZMWpvbIC&_nc_ht=z-p3-scontent.fdac12-1.fna&oh=00_AfD0PjzOGqvw2z5959u-3R1rzsFym9gUdzwesnRTNoiSDQ&oe=63FE4CDC" className="mx-auto rounded-full team w-48" alt="" />
                            </div>
                            <h5 className="mb-9 font-semibold text-3xl leading-7">Md Rezaul Karim</h5>

                            <div className="text-center mx-auto">

                                <div className="flex justify-center items-center">
                                    <a href="https://www.facebook.com/profile.php?id=100011638141120"> <BsFacebook className="text-3xl  hover:text-secondary"></BsFacebook></a>
                                    <a href=""><BsLinkedin className="mx-3   text-3xl hover:text-secondary"></BsLinkedin> </a>
                                    <a href=""><BsTwitter className="text-3xl  hover:text-secondary"></BsTwitter> </a>



                                </div>


                            </div>
                        </div>
                        <div className="single-team bg-white duration-300 group pt-14 p-8 text-center hover:shadow-custom rounded-2xl">
                            <div className="border-4 border-white duration-300 group-hover:border-green inline-block rounded-full p-1">
                                <img src="https://z-p3-scontent.fdac12-1.fna.fbcdn.net/v/t1.18169-9/29595475_2013195842268966_3529602498824942470_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=M3_Tr2j2pcgAX8fVu3G&_nc_ht=z-p3-scontent.fdac12-1.fna&oh=00_AfA9WLUTM7PHCwCuiCFm6iWE9FTAvjcHqFRTZgq72CgyLg&oe=64209921" className="mx-auto rounded-full team w-48" alt="" />
                            </div>
                            <h5 className="mb-9 font-semibold text-3xl leading-7">Mostafizur Rahman</h5>

                            <div className="text-center mx-auto">

                                <div className="flex justify-center items-center">
                                    <a href="https://www.facebook.com/infected.mr"> <BsFacebook className="text-3xl  hover:text-secondary"></BsFacebook></a>
                                    <a href=""><BsLinkedin className="mx-3   text-3xl hover:text-secondary"></BsLinkedin> </a>
                                    <a href=""><BsTwitter className="text-3xl  hover:text-secondary"></BsTwitter> </a>



                                </div>


                            </div>
                        </div>
                        <div className="single-team bg-white duration-300 group pt-14 p-8 text-center hover:shadow-custom rounded-2xl">
                            <div className="border-4 border-white duration-300 group-hover:border-green inline-block rounded-full p-1">
                                <img src="https://z-p3-scontent.fdac12-1.fna.fbcdn.net/v/t1.6435-9/185980281_3855132261249012_6623407936060771232_n.jpg?stp=c161.0.960.960a_dst-jpg_p960x960&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2YjRoMeSdroAX_gIfnZ&_nc_ht=z-p3-scontent.fdac12-1.fna&oh=00_AfBdYXFcREmHFb5zHqaFA_Ec6pGklxhOiivFyXEie75_JA&oe=6420877D" className="mx-auto rounded-full team w-48" alt="" />
                            </div>
                            <h5 className="mb-9 font-semibold text-3xl leading-7">Zahid Hasan</h5>

                            <div className="text-center mx-auto">

                                <div className="flex justify-center items-center">
                                    <a href="https://www.facebook.com/imran.skat"> <BsFacebook className="text-3xl  hover:text-secondary"></BsFacebook></a>
                                    <a href=""><BsLinkedin className="mx-3   text-3xl hover:text-secondary"></BsLinkedin> </a>
                                    <a href=""><BsTwitter className="text-3xl  hover:text-secondary"></BsTwitter> </a>



                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <About></About>
            <Review></Review>


        </div>
    );
};

export default about;