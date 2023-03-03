import Loader from "@/Components/Shared/Loader/Loader";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import { useContext } from "react";
import { useRouter } from "next/router";
import useSeller from "@/Hooks/useSeller";

function SellerRoute({ children }) {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);

  if (loading || isSellerLoading) return <Loader />;

  if (user?.uid && isSeller) return children;
  else router.push("/login");
}

export default SellerRoute;
