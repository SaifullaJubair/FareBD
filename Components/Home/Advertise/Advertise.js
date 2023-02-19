import home4 from "./../../../assets/images/home-4.jpg";
import { BsPersonFill, BsArrowRight } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
const Advertise = () => {
  return (
    <div className="mt-28 mb-72">
      <h2 className="text-4xl text-center font-semibold mb-10">Advertised</h2>
      <div className="flex flex-wrap items-center gap-5 justify-center">
        {/* card 1 */}
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0.8)), url(${home4.src})`,
            backgroundSize: "cover",
          }}
          className="w-[375px] h-80 object-cover object-center relative mb-60"
        >
          {/* Inner Pop Up Div */}
          <div className="bg-gray-50 w-[330px] absolute -bottom-44 left-1/2 transform -translate-x-1/2 px-5 pt-5 pb-7">
            <div className="flex items-center gap-5 text-gray-600">
              <div className="flex items-center gap-1">
                <BsPersonFill className="text-xl" />
                <span>By Admin</span>
              </div>
              <div className="flex items-center gap-1">
                <BiCalendar className="text-xl" />
                <span>March 9, 2020</span>
              </div>
            </div>
            <h4 className="text-2xl my-3 font-semibold hover:text-secondary transition duration-200">
              Family House
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              aspernatur eligendi sed molestias necessitatibus quia.
            </p>
            <BsArrowRight className="text-2xl font-semibold absolute left-1/2 transform -translate-x-1/2 -bottom-3 bg-secondary/90 transtion duration-300 cursor-pointer hover:bg-secondary w-8 h-8 rounded-full p-1 text-white" />
          </div>
        </div>
        {/* card 2 */}
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0.8)), url(${home4.src})`,
            backgroundSize: "cover",
          }}
          className="w-[375px] h-80 object-cover object-center relative mb-60"
        >
          {/* Inner Pop Up Div */}
          <div className="bg-gray-50 w-[330px] absolute -bottom-44 left-1/2 transform -translate-x-1/2 px-5 pt-5 pb-7">
            <div className="flex items-center gap-5 text-gray-600">
              <div className="flex items-center gap-1">
                <BsPersonFill className="text-xl" />
                <span>By Admin</span>
              </div>
              <div className="flex items-center gap-1">
                <BiCalendar className="text-xl" />
                <span>March 9, 2020</span>
              </div>
            </div>
            <h4 className="text-2xl my-3 font-semibold hover:text-secondary transition duration-200">
              Family House
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              aspernatur eligendi sed molestias necessitatibus quia.
            </p>
            <BsArrowRight className="text-2xl font-semibold absolute left-1/2 transform -translate-x-1/2 -bottom-3 bg-secondary/90 transtion duration-300 cursor-pointer hover:bg-secondary w-8 h-8 rounded-full p-1 text-white" />
          </div>
        </div>
        {/* card 3 */}
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0.8)), url(${home4.src})`,
            backgroundSize: "cover",
          }}
          className="w-[375px] h-80 object-cover object-center relative"
        >
          {/* Inner Pop Up Div */}
          <div className="bg-gray-50 w-[330px] absolute -bottom-44 left-1/2 transform -translate-x-1/2 px-5 pt-5 pb-7">
            <div className="flex items-center gap-5 text-gray-600">
              <div className="flex items-center gap-1">
                <BsPersonFill className="text-xl" />
                <span>By Admin</span>
              </div>
              <div className="flex items-center gap-1">
                <BiCalendar className="text-xl" />
                <span>March 9, 2020</span>
              </div>
            </div>
            <h4 className="text-2xl my-3 font-semibold hover:text-secondary transition duration-200">
              Family House
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              aspernatur eligendi sed molestias necessitatibus quia.
            </p>
            <BsArrowRight className="text-2xl font-semibold absolute left-1/2 transform -translate-x-1/2 -bottom-3 bg-secondary/90 transtion duration-300 cursor-pointer hover:bg-secondary w-8 h-8 rounded-full p-1 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
