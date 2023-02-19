import { Button } from "flowbite-react";
import Marquee from "react-fast-marquee";


const Branding = () => {
   return (
      <div>



         <div className=" my-20  ">
            <div className="p-8 bg-primary sm:p-16">
               <div className="flex flex-col lg:flex-row justify-center lg:items-center mt-10 mb-28">
                  <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                     <h2 className="font-sans text-3xl font-bold  text-white sm:text-4xl sm:leading-none">
                        Find Best Place For

                        <p className=" py-2 text-secondary">
                           Leaving
                        </p>
                     </h2>
                  </div>
                  <div className="lg:w-1/2">
                     <p className="mb-4 text-base text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                        perspiciatis unde omnis iste.
                     </p>
                     <Button className=" rounded-none" gradientMonochrome="success">Submit</Button>
                  </div>
               </div>
            </div>
         </div>

         <div className="-mt-48 mb-20">
            <div className="w-10/12 mx-auto bg-white">
               <Marquee speed={40}>
                  <img src="https://anwarlandmark.com/blog/wp-content/uploads/2022/11/landmark.png" alt="" />
                  <img src="https://asset.com.bd/wp-content/uploads/2021/03/ASSET-Logo-Transparent.png" alt="" className="h-32" />
                  <img src="https://i0.wp.com/glgassets.com/wp-content/uploads/2020/09/Glg-assets-ltd-logo.jpg" alt="" className="h-32" />
                  <img src="https://png.pngtree.com/template/20200610/ourmid/pngtree-home-and-building-logo-and-symbol-vector-image-image_381668.jpg" alt="" className="h-44" />
                  <img src="https://images.creativemarket.com/0.1.0/ps/6159919/1160/772/m1/fpnw/wm0/2-.jpg?1553836139&s=6147b9c6dce3d7ee4431f7fe3b23d8bc" alt="" className="h-44" />

               </Marquee>
            </div>

         </div>


      </div>
   );
};

export default Branding;