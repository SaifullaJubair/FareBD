import AllFeedBack from "@/Components/Dashboard/AllFeedBack/AllFeedBack";
import DashboardSideBar from "@/Components/Dashboard/DashboardSideBar/DashboardSideBar";

const allfeedback = () => {
   return (
      <div>
         <DashboardSideBar></DashboardSideBar>
         <AllFeedBack></AllFeedBack>
      </div>
   );
};

export default allfeedback;