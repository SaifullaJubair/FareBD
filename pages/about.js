import About from "@/Components/Home/About/About";
import Review from "@/Components/Home/Review/Review";
import { SiBuildkite } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiOutlineGlobal } from "react-icons/ai";
const about = () => {

  const teamMembers = [
    {
      name: "Saifulla Jubair",
      photoUrl: "",
      designation: "",
      bio: "",
      githubLink: "",
      linkedinLink: "",
      portfolioLink: "",
    },
    {
      name: "Amit Paul",
      photoUrl: "",
      designation: "",
      bio: "",
      githubLink: "",
      linkedinLink: "",
      portfolioLink: "",
    },
    {
      name: "Anik Datta",
      photoUrl: "",
      designation: "",
      bio: "",
      githubLink: "",
      linkedinLink: "",
      portfolioLink: "",
    },
    {
      name: "Md Rezaul Karim",
      photoUrl: "",
      designation: "",
      bio: "",
      githubLink: "",
      linkedinLink: "",
      portfolioLink: "",
    },
    {
      name: "Mostafizur Rahman",
      photoUrl: "",
      designation: "",
      bio: "",
      githubLink: "",
      linkedinLink: "",
      portfolioLink: "",
    },
    {
      name: "Zahid Hasan",
      photoUrl: "",
      designation: "",
      bio: "",
      githubLink: "",
      linkedinLink: "",
      portfolioLink: "",
    },
  ]



  return (
    <div>
      <img
        alt="Signage"
        src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        className="h-56 w-full object-cover sm:h-64 lg:h-72"
      />

      <section className=" bg-gray-100 -mt-96">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                <div className="px-4 flex-auto"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-16">
            <div className="mt-36 sm:mt-52 md:mt-24 lg:mt-8 w-full md:w-5/12 mr-auto ml-auto  rounded-tl-3xl rounded-br-3xl  bg-gray-200 bg-opacity-80 p-4">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-user-friends text-xl">
                  <SiBuildkite className="text-4xl text-primary" />
                </i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Get to know what we do,
              </h3>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-600">
                Our Customers want to be able to research, browse, and pay for
                rentals online, just like they do for other products.
              </p>
              <p className="text-lg leading-relaxed mt-0 mb-4 text-blueGray-600">
                To meet the needs of customers and sellers, we must have our own
                website. Renters will be customers, while homeowners will be
                vendors. There will be an admin panel to control the entire
                system.
              </p>
              <a href="../index.html" className="font-bold text-blueGray-700 mt-8">
                Keep in touch with us...
              </a>
            </div>
          </div>
        </div>
        <footer className="relative pt-8 pb-6 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Made with{" "}
                  <a
                    href="https://nextjs.org/"
                    className="text-blueGray-500 hover:text-gray-800"
                    target="_blank"
                  >
                    Next JS
                  </a>{" "}
                  by <> Tim Confidence</>.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>

      <section className=" mx-auto py-10">
        <div className="mb-16">
          <div className="container flex justify-center mx-auto pb-4">
            <div>
              <p className="text-gray-500 text-lg text-center font-normal pb-3">
                BUILDING TEAM
              </p>
              <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                The Talented People Behind the Scenes of the Organization
              </h1>
            </div>
          </div>
          <div className="w-full bg-gray-100 px-10 pt-10">
            <div className="container mx-auto">
              <div
                role="list"
                aria-label="Behind the scenes People "
                className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
              >
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://media.licdn.com/dms/image/D5603AQGJsZPbrhfyCA/profile-displayphoto-shrink_200_200/0/1670503861276?e=1683158400&v=beta&t=5gAeALdjrFG4X81QkTbb6xRaBOgH3S3tANLp_VSMKkc"
                          alt="Display Picture of Andres Berlin"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Saifulla Jubair
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Group Leader of Team confidence
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        The team leader's role in increasing a company's
                        corporate IQ is to establish an environment that
                        encourages knowledge sharing and collaboration.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        {/* GitHub */}
                        <a
                          href="https://github.com/"
                          target={"_blank"}
                          className="mx-5">
                          <AiFillGithub
                            className="text-3xl text-gray-400" />
                        </a>
                        {/*linkedin */}
                        <a
                          href="https://www.linkedin.com/"
                          target={"_blank"}
                          className="mx-5">
                          <AiFillLinkedin
                            className="text-3xl text-gray-400" />
                        </a>
                        {/* Portfolio */}
                        <a
                          href="Portfolio"
                          target={"_blank"}
                          className="mx-5">
                          <AiOutlineGlobal
                            className="text-3xl text-gray-400" />
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/318735109_3311092059104047_8348304615011473732_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG5gCoRqgBeIqDUcBnEnxdic4-4oAs2up9zj7igCza6n1IcKdMgrdcd1bKAX0II04kg2kp7Ume2H4j_iibxut5J&_nc_ohc=csNM4FBDo0gAX-TrbsI&_nc_ht=scontent.fzyl2-1.fna&oh=00_AfDjARnezFjr9qplNp-nY8TVCzjCowB1W4ChjQMrtPImeQ&oe=640B8BFD"
                          alt="Display Picture of Silene Tokyo"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Amit Paul
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Full-Stack developer at Team Confidence
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        The emphasis on innovation and technology in our
                        companies has resulted in a few of them establishing
                        global benchmarks in product design and development.
                      </p>

                      <div className="w-full flex justify-center pt-5 pb-5">
                        {/* GitHub */}
                        <a
                          href="https://github.com/"
                          target={"_blank"}
                          className="mx-5">
                          <AiFillGithub
                            className="text-3xl text-gray-400" />
                        </a>
                        {/*linkedin */}
                        <a
                          href="https://www.linkedin.com/"
                          target={"_blank"}
                          className="mx-5">
                          <AiFillLinkedin
                            className="text-3xl text-gray-400" />
                        </a>
                        {/* Portfolio */}
                        <a
                          href="Portfolio"
                          target={"_blank"}
                          className="mx-5">
                          <AiOutlineGlobal
                            className="text-3xl text-gray-400" />
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/326839616_1604980509954526_482004591251444655_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFkCji1R7ccmE_5YWHO4j3YJo74yEWezKsmjvjIRZ7Mq9IbgpSwgseAvGFA2xaRZKzaPpbDQMrNcif9bt8hBnUv&_nc_ohc=QrfOErP9Vs4AX9FJW3Q&_nc_ht=scontent.fzyl2-1.fna&oh=00_AfAjGmxVoMHB6-K-cVBs7NfoauMsUCqZKKnu44HFaFNebA&oe=640B6ECA"
                          alt="Display Picture of Johnson Stone"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Anik Datta
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Full-Stack developer at Team Confidence
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        In FullStack development, both front and backend work is
                        undertaken. Therefore, they can work on any project
                        Developing web applications.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        {/* GitHub */}
                        <a
                          href="https://github.com/"
                          target={"_blank"}
                          className="mx-5">
                          <AiFillGithub
                            className="text-3xl text-gray-400" />
                        </a>
                        {/*linkedin */}
                        <a
                          href="https://www.linkedin.com/"
                          target={"_blank"}
                          className="mx-5">
                          <AiFillLinkedin
                            className="text-3xl text-gray-400" />
                        </a>
                        {/* Portfolio */}
                        <a
                          href="Portfolio"
                          target={"_blank"}
                          className="mx-5">
                          <AiOutlineGlobal
                            className="text-3xl text-gray-400" />
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/71272230_810788342652430_393077369729974272_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEjWpm9cSzvXSbGK2jy6fe45qS2-hhc6urmpLb6GFzq6lAuwyrCluw1XmIC5qWrL0JjUVArYAAQo7dMvB5M0X3V&_nc_ohc=TxqGelWu2I0AX-JE2Z8&_nc_ht=scontent.fzyl2-1.fna&oh=00_AfCnagxswXrthxX2IS4jZF9wKti-b8YRihQmMAklXYdc8w&oe=642E7DC5"
                          alt="Display Picture of Dean Jones"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Md Rezaul Karim
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Full-Stack developer at Team Confidence
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        In FullStack development, both front and backend work is
                        undertaken. Design, developed and maintained fully
                        functioning platforms.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        {/* GitHub */}
                        <a
                          href="https://github.com/"
                          target={"_blank"}
                          className="mx-5">
                          <AiFillGithub
                            className="text-3xl text-gray-400" />
                        </a>
                        {/*linkedin */}
                        <a
                          href="https://www.linkedin.com/"
                          target={"_blank"}
                          className="mx-5">
                          <AiFillLinkedin
                            className="text-3xl text-gray-400" />
                        </a>
                        {/* Portfolio */}
                        <a
                          href="Portfolio"
                          target={"_blank"}
                          className="mx-5">
                          <AiOutlineGlobal
                            className="text-3xl text-gray-400" />
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://z-p3-scontent.fdac12-1.fna.fbcdn.net/v/t1.18169-9/29595475_2013195842268966_3529602498824942470_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=M3_Tr2j2pcgAX8fVu3G&_nc_ht=z-p3-scontent.fdac12-1.fna&oh=00_AfA9WLUTM7PHCwCuiCFm6iWE9FTAvjcHqFRTZgq72CgyLg&oe=64209921"
                          alt="Display Picture of Rachel Adams"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Mostafizur Rahman
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Full-Stack developer at Team Confidence
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        In Full-Stack development, both front-end and back-end
                        work are undertaken. Designed, developed, and maintained
                        fully-functioning platforms.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        {/* GitHub */}
                        <a
                          href="https://github.com/"
                          target={"_blank"}
                          className="mx-5">
                          <AiFillGithub
                            className="text-3xl text-gray-400" />
                        </a>
                        {/*linkedin */}
                        <a
                          href="https://www.linkedin.com/"
                          target={"_blank"}
                          className="mx-5">
                          <AiFillLinkedin
                            className="text-3xl text-gray-400" />
                        </a>
                        {/* Portfolio */}
                        <a
                          href="Portfolio"
                          target={"_blank"}
                          className="mx-5">
                          <AiOutlineGlobal
                            className="text-3xl text-gray-400" />
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://z-p3-scontent.fdac12-1.fna.fbcdn.net/v/t1.6435-9/185980281_3855132261249012_6623407936060771232_n.jpg?stp=c161.0.960.960a_dst-jpg_p960x960&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2YjRoMeSdroAX_gIfnZ&_nc_ht=z-p3-scontent.fdac12-1.fna&oh=00_AfBdYXFcREmHFb5zHqaFA_Ec6pGklxhOiivFyXEie75_JA&oe=6420877D"
                          alt="Display Picture of Zahid Hasan"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Zahid Hasan
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Full-Stack developer at Team Confidence
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        In Full-Stack development, both front-end and back-end
                        work are undertaken. Designed, developed, and maintained
                        fully-functioning platforms.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        {/* GitHub */}
                        <a
                          href="https://github.com/"
                          target={"_blank"}
                          className="mx-5">
                          <AiFillGithub
                            className="text-3xl text-gray-400" />
                        </a>
                        {/*linkedin */}
                        <a
                          href="https://www.linkedin.com/"
                          target={"_blank"}
                          className="mx-5">
                          <AiFillLinkedin
                            className="text-3xl text-gray-400" />
                        </a>
                        {/* Portfolio */}
                        <a
                          href="Portfolio"
                          target={"_blank"}
                          className="mx-5">
                          <AiOutlineGlobal
                            className="text-3xl text-gray-400" />
                        </a>

                      </div>
                    </div>
                  </div>
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
