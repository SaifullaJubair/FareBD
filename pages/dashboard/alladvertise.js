import AllAdvertise from "@/Components/Dashboard/AllAdvertise/AllAdvertise";

const alladvertise = () => {
   return (
      <div>
         <div className="min-h-screen">
            <h3 className="text-center text-3xl font-semibold py-8">All my property post</h3>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
               <table className="sm:w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                     <tr>
                        <th scope="col" className="px-6 py-3">
                           Property Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                           Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                           Location
                        </th>
                        <th scope="col" className="px-6 py-3">
                           Condition
                        </th>
                        <th scope="col" className="px-6 py-3">
                           Property Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                           Price/Rent
                        </th>
                        <th scope="col" className="px-6 py-3">
                           Action
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        // post?.map(post => <tr key={post._id} className="bg-white border-b border-b-gra dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        //    <td className="w-32 p-4">
                        //       <Image src={post.property_picture} width={64} height={32} alt="Apple Watch" />
                        //    </td>
                        //    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        //       {post.property_name}
                        //    </td>
                        //    <td className="px-6 py-4">
                        //       <Tooltip content={post.location} className={post.location.length < 30 && "hidden"}>
                        //          {post.location.length > 30 ? post.location.slice(0, 30) + '...' : post.location}
                        //       </Tooltip>
                        //    </td>
                        //    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        //       {post.property_condition.charAt(0).toUpperCase() + post.property_condition.slice(1)}
                        //    </td>
                        //    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        //       {post.property_type}
                        //    </td>
                        //    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        //       ${post.price}
                        //    </td>
                        //    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white flex gap-2 justify-center items-center">
                        //       <Tooltip content="Advertise Post">
                        //          <span className="cursor-pointer w-full"><FaAdversal className="hover:bg-gray-300 border p-1 rounded-md text-secondary" size={24} /></span>
                        //       </Tooltip>
                        //       <Tooltip content="Delete Post">
                        //          <span className="cursor-pointer w-full"><FaTrashAlt className="hover:bg-gray-300 border p-1 rounded-md text-red-600" size={24} /></span>
                        //       </Tooltip>
                        //       {/* <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a> */}
                        //    </td>
                        // </tr>)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default alladvertise;