import Loader from '@/Components/Shared/Loader/Loader';
import { AuthContext } from '@/Contexts/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

const MyFeedBack = () => {
   const { user } = useContext(AuthContext)
   const { data: products, isLoading } = useQuery({
      queryKey: ['user'],
      queryFn: async () => {
         try {
            const res = await fetch('http://localhost:5000/feedback', {


            })
            const data = await res.json();
            return data;
         } catch (error) {
            console.log(error);
         }
      }
   })

   // loading
   if (isLoading) {
      return <Loader></Loader>
   }

   const userFeed = products?.data?.filter(userReview => userReview?.author_email === user?.email)

 
   return (
      <div>
         <div>
            <div className="min-h-screen">
               <h3 className="text-center text-3xl font-semibold py-8">My Review </h3>
               <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="sm:w-full text-sm text-left text-gray-500 dark:text-gray-400">
                     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                           <th scope="col" className="px-6 py-3">
                              User Email
                           </th>
                           <th scope="col" className="px-6 py-3">
                              User Name
                           </th>
                           <th scope="col" className="px-6 py-3">
                              Property Name
                           </th>
                           <th scope="col" className="px-6 py-3">
                              Review
                           </th>

                        </tr>
                     </thead>
                     <tbody>
                        {
                           userFeed?.map(post => <tr key={post._id} className="bg-white border-b border-b-gra dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="w-32 p-4">
                                 {post?.author_email}
                              </td>
                              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                 {post?.author_name}
                              </td>
                              <td className="px-6 py-4">

                                 {post?.property_name}

                              </td>
                              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                 {post?.rating}
                              </td>


                           </tr>)
                        }
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyFeedBack;
