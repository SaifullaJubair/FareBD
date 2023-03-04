import Loader from "@/Components/Shared/Loader/Loader";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import { useContext } from "react";
import { useRouter } from "next/router";
import useAdmin from "@/Hooks/useAdmin";

function AdminRoute({ children }) {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  if (loading || isAdminLoading) return <Loader />;
  if (user?.uid && isAdmin) return children;
  if (!user?.email) return router.push("/login");
  else router.push("/login");
}

export default AdminRoute;
