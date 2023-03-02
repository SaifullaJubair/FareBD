import AllUsers from '@/Components/Dashboard/AllUsers/AllUsers';
import DashboardSideBar from '@/Components/Dashboard/DashboardSideBar/DashboardSideBar';

const allusers = () => {
   return (
      <div>
         <DashboardSideBar></DashboardSideBar>
         <AllUsers></AllUsers>
      </div>
   );
};

export default allusers;