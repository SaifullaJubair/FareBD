import Dashboard from "@/Components/Dashboard/Dashboard/Dashboard";
import PleaseLogin from "@/Components/PleaseLogin/PleaseLogin";
import Loader from "@/Components/Shared/Loader/Loader";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import { useContext } from "react";

const DashboardPage = () => {
  const { user, loading } = useContext(AuthContext);
  if (!user?.email) {
    return <PleaseLogin></PleaseLogin>;
  }
  return (
    <div>
      <title>DashBoard</title>
      <Dashboard></Dashboard>
    </div>
  );
};

export default DashboardPage;
