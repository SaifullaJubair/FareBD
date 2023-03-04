import Loader from "@/Components/Shared/Loader/Loader";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import { useContext } from "react";
import { useRouter } from "next/router";

function BuyerRoute({ children }) {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loader />;

  if (user?.uid) return children;
  else router.push("/login");
}

export default BuyerRoute;
