import DashboardSideBar from "@/Components/Dashboard/DashboardSideBar/DashboardSideBar";
import MyWishList from "@/Components/Dashboard/MyWishList/MyWishList";

const mywishlist = () => {
   return (
      <div>
         <DashboardSideBar></DashboardSideBar>
         <MyWishList></MyWishList>
      </div>
   );
};

export default mywishlist;