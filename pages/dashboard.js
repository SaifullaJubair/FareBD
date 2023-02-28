import React, { useContext } from 'react';
import Dashboard from '../components/Dashboard/Dashboard/Dashboard';
import PleaseLogin from '../components/PleaseLogin/PleaseLogin';
import Loader from '../components/Shared/Loader/Loader';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const DashboardPage = () => {
   const { user, loading } = useContext(AuthContext)
   if (loading) {
      return <Loader></Loader>
   }
   if (!user?.email) {
      return <PleaseLogin></PleaseLogin>
   }
   return (

      <div>
         <title>DashBoard</title>
         <Dashboard></Dashboard>
      </div>
   );
};

export default DashboardPage;