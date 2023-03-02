import DashboardSideBar from "@/Components/Dashboard/DashboardSideBar/DashboardSideBar";
import MyProperties from "@/Components/Dashboard/MyProperties/MyProperties";

const myproperties = () => {
   return (
      <div>
         <DashboardSideBar></DashboardSideBar>
         <MyProperties></MyProperties>
      </div>
   );
};

export default myproperties;