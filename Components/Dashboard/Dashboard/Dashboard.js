import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import DashboardSideBar from "../DashboardSideBar/DashboardSideBar";


const Dashboard = () => {
   const [userData, setUserData] = useState(null)
   const { user } = useContext(AuthContext)

   useEffect(() => {
      fetch(`http://localhost:5000/singleuser/${user?.email}`)
         .then(res => res.json())
         .then(data => {
            console.log(data.role);
            setUserData(data)

         })
   }, [user?.email])

   const router = useRouter()
   // if (userData?.role == 'user') {
   //    router.push('/dashboard')
   // }
   // else if (userData?.role == 'user') {
   //    router.push('/dashboard/allnews')
   // }

   return (
      <div className=" mx-auto flex gap-6">
         <DashboardSideBar></DashboardSideBar>
         <h2 className="text-2xl font-bold flex-grow text-center">Welcome to Dashboard</h2>

      </div>
   );
};

export default Dashboard;