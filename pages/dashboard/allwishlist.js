import AllWishList from "@/Components/Dashboard/AllWishList/AllWishList";
import DashboardSideBar from "@/Components/Dashboard/DashboardSideBar/DashboardSideBar";

const allwishlist = () => {
   return (
      <div>
         <DashboardSideBar></DashboardSideBar>
         <AllWishList></AllWishList>
      </div>
   );
};

export default allwishlist;