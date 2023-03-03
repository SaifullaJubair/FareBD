
import ConfirmationModal from "@/Components/Shared/ConfirmationModal/ConfirmationModal";
import Loader from "@/Components/Shared/Loader/Loader";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import { Tooltip } from "flowbite-react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FaAdversal, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import DashboardSideBar from "../DashboardSideBar/DashboardSideBar";


const AllProperties = () => {
  const { user } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedPostForAd, setSelectedPostForAd] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleDeletePost = (id) => {
    setLoading(true);
    fetch(`http://localhost:5000/singleproperty/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount > 0) {
          setRefetch(!refetch)
          toast.success(`Post deleted successfully`, {
            position: toast.POSITION.TOP_CENTER

          })
          setSelectedPost(null)
        }
      })
    setLoading(false);
  }
  const handleAdvertisePost = async (post) => {
    setLoading(true);
    const res = await fetch(`http://localhost:5000/advertise`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    const data = await res.json();

    if (data.acknowledged) {
      setLoading(false);
      toast.success('Your product added for advertised!', {
        position: toast.POSITION.TOP_CENTER

      });
      setRefetch(!refetch);
      setSelectedPostForAd(null);
    } else {
      console.log(data);
      toast.error(data.message, {
        position: toast.POSITION.TOP_CENTER

      });
      setSelectedPostForAd(null);
      setLoading(false);
    }
  }

  const getMyPosts = async () => {
    const res = await fetch(`http://localhost:5000/all-properties`);
    const data = await res.json();
    setMyPosts(data);
  };

  useEffect(() => {
    getMyPosts();
  }, [user, refetch])
  console.log(myPosts);

  if (loading || !user) {
    return <Loader />
  }
  return (
    <div className='flex'>
      <DashboardSideBar></DashboardSideBar>
      <div className='mx-auto flex-grow'>
        <h2 className='title uppercase p-10 text-center mb-10 bg-secondary text-white text-2xl font-semibold'>All Properties </h2>

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
                myPosts?.map(post => <tr key={post._id} className="bg-white border-b border-b-gra dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-32 p-4">
                    <Image src={post.property_picture} width={64} height={32} alt="Apple Watch" />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {post.property_name}
                  </td>
                  <td className="px-6 py-4">
                    <Tooltip content={post.location} className={post.location.length < 30 && "hidden"}>
                      {post.location.length > 30 ? post.location.slice(0, 30) + '...' : post.location}
                    </Tooltip>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {post.property_condition === 'toRent' ? 'To Rent' : 'For Sell'}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {post.property_type}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${post.price}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white flex gap-2 justify-center items-center">
                    <Tooltip content="Advertise Post">
                      <span onClick={() => setSelectedPostForAd(post)} className="cursor-pointer w-full"><FaAdversal className="hover:bg-gray-300 border p-1 rounded-md text-secondary" size={24} /></span>
                    </Tooltip>
                    <Tooltip content="Delete Post">
                      <span onClick={() => setSelectedPost(post._id)} className="cursor-pointer w-full"><FaTrashAlt className="hover:bg-gray-300 border p-1 rounded-md text-red-600" size={24} /></span>
                    </Tooltip>
                    {/* <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a> */}
                  </td>
                </tr>)
              }


            </tbody>

          </table>
          {
            selectedPostForAd && <ConfirmationModal
              message={`Are you sure to advertise this post?`}
              data={selectedPostForAd}
              setData={setSelectedPostForAd}
              successAction={handleAdvertisePost}
              successActionName="Yes, I'm Sure!"
              cancelActionName="No, Cancel"
              successBtnColor="green"
            />

          }
          {
            selectedPost && <ConfirmationModal
              message={`Are you sure to delete this post?`}
              data={selectedPost}
              setData={setSelectedPost}
              successAction={handleDeletePost}
              successActionName="Yes, I'm Sure!"
              cancelActionName="No, Cancel"
              successBtnColor="red"
            />

          }
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
