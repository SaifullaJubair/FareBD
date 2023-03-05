import AddProperty from '@/Components/Dashboard/AddProperty/AddProperty';
import PleaseLogin from '@/Components/PleaseLogin/PleaseLogin';
import { useContext } from 'react';
import useSeller from "@/Hooks/useSeller";
import { AuthContext } from '@/Contexts/AuthProvider/AuthProvider';

const addproperty = () => {
   const { user, loading } = useContext(AuthContext);
   const [isSeller, isSellerLoading] = useSeller(user?.email)
   if (!user?.email || user?.role === "seller") {
      return <PleaseLogin></PleaseLogin>;
   }

   return (

      <div>
         <AddProperty></AddProperty>
      </div>
   );
};

export default addproperty;