import { useEffect, useState } from "react";

export default function useAdmin(email) {
  const [isAdmin, setIsAdmin] = useState(false);

  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      const checkAdmin = async function () {
        try {
          const res = await fetch(
            `https://server-fare-bd.vercel.app/users/checkAdmin?email=${email}`
          );

          const data = await res.json();

          if (data) {
            setIsAdmin(data.isAdmin);
            // console.log(data);
            setIsAdminLoading(false);
          } else if (!data) {
            setIsAdminLoading(false);
          }
        } catch (err) {
          setIsAdminLoading(false);
          console.error(err);
        }
      };
      checkAdmin();
    }
  }, []);

  return [isAdmin, isAdminLoading];
}
