import Marquee from "react-marquee-slider";
import gallery1 from "../../../assets/images/gallery-1.jpg";
import gallery2 from "../../../assets/images/gallery-2.jpg";
import gallery3 from "../../../assets/images/gallery-3.jpg";
import gallery4 from "../../../assets/images/gallery-4.jpg";
import gallery5 from "../../../assets/images/gallery-5.jpg";
import gallery6 from "../../../assets/images/gallery-6.jpg";
const items = [
  {
    img: gallery1,
  },
  {
    img: gallery2,
  },
  {
    img: gallery3,
  },
  {
    img: gallery4,
  },
  {
    img: gallery5,
  },
  {
    img: gallery6,
  },
];
const PhotoGallery = () => {
  return (
    <div className="py-10">
      <div className="h-[208px]">
        <Marquee key={Math.random() * 100} velocity={8}>
          {items.map((el, i) => (
            <img
              className="w-[365px] h-52 rounded-sm object-cover object-center "
              src={el.img.src}
              key={i}
            />
          ))}
        </Marquee>
      </div>
      <div className="bg-yellow-600/60">
        <div className="w-2/3 mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between py-10 gap-8">
            <h4 className="text-4xl text-white ">Schedule A Visit</h4>
            <button className="uppercase bg-primary text-white px-5 py-[6px] rounded-sm flex items-center justify-center gap-1">
              <span>Contact us</span>
              <span className="text-2xl">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
