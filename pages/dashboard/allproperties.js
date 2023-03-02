import AllProperties from "@/Components/Dashboard/AllProperties/AllProperties";
import DashboardSideBar from "@/Components/Dashboard/DashboardSideBar/DashboardSideBar";

const allproperties = () => {
   return (
      <div>
         <DashboardSideBar></DashboardSideBar>
         <AllProperties></AllProperties>
      </div>
   );
};

export default allproperties;