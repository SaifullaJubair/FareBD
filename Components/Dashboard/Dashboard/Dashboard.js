
import DashboardSideBar from "../DashboardSideBar/DashboardSideBar";


const Dashboard = () => {

   return (
      <div className=" mx-auto flex gap-6">
         <DashboardSideBar></DashboardSideBar>
         <h2 className="text-2xl font-bold flex-grow text-center">Welcome to Dashboard</h2>

      </div>
   );
};

export default Dashboard;