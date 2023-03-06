import ConfirmationModal from "@/Components/Shared/ConfirmationModal/ConfirmationModal";
import Loader from "@/Components/Shared/Loader/Loader";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { GrView } from "react-icons/gr";
import { MdOutlinePageview } from "react-icons/md";
import { toast } from "react-toastify";
import DashboardSideBar from "../DashboardSideBar/DashboardSideBar";

const MyBlog = () => {
<<<<<<< HEAD
  const { user } = useContext(AuthContext);
=======
    const { user } = useContext(AuthContext);
    const [showDeleteModal, setShowDeleteModal] = useState(null);
>>>>>>> c83e4629a6a03989c59aaa8248ef5b1b97a5c326

  const {
    data: blogs,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/getBlog", {});
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  // delete
  const deleteBlog = (id) => {
    fetch(`http://localhost:5000/getBlog/${id}`, {
      method: "DELETE",
      headers: {
        // authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);

<<<<<<< HEAD
        refetch();
      });
  };

  // loading
  if (isLoading) {
    return <Loader></Loader>;
  }
=======
    // delete
    const deleteBlog = (blog) => {
        fetch(`http://localhost:5000/getBlog/${blog?._id}`, {
            method: 'DELETE',
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success(data.message)
                setShowDeleteModal(null);
                refetch()
            })
    }
>>>>>>> c83e4629a6a03989c59aaa8248ef5b1b97a5c326

  const userBlog = blogs?.data?.filter((blog) => blog?.email === user?.email);
  console.log(userBlog);
  return (
    <div className="flex">
      <DashboardSideBar></DashboardSideBar>
      <div className="mx-auto flex-grow">
        <h2 className="title uppercase p-10 text-center mb-10 bg-secondary text-white text-2xl font-semibold">
          All Users{" "}
        </h2>
        <Table>
          <Table.Head>
            <Table.HeadCell>Blog image</Table.HeadCell>
            <Table.HeadCell>Blog name</Table.HeadCell>

<<<<<<< HEAD
            <Table.HeadCell>Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {userBlog?.map((blog) => (
              <Table.Row
                key={blog._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>
                  <img
                    className=" lg:w-28  lg:h-28 md:h-20 md:w-full w-16 h-16  "
                    src={blog?.image}
                    alt=""
                  />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {blog?.title}
                </Table.Cell>

                <Table.Cell>
                  <div className=" mt-8">
                    {" "}
                    <button
                      className="ml-2 text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => deleteBlog(blog._id)}
                    >
                      Delete
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
=======
    const userBlog = blogs?.data?.filter(blog => blog?.email === user?.email)
    console.log(userBlog);
    return (
        <div className='flex'>
            <DashboardSideBar></DashboardSideBar>
            <div className='mx-auto flex-grow overflow-x-auto'>
                <h2 className='title uppercase p-10 text-center mb-10 bg-secondary text-white text-2xl font-semibold'>My Blogs </h2>
                <Table>
                    <Table.Head>
                        <Table.HeadCell
                            align="center">
                            Blog image
                        </Table.HeadCell>
                        <Table.HeadCell
                            align="center">
                            Blog Title
                        </Table.HeadCell>
                        <Table.HeadCell
                            align="center">
                            Blog Description
                        </Table.HeadCell>
                        <Table.HeadCell
                            align="center">
                            Action
                        </Table.HeadCell>

                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            userBlog.map(blog => <Table.Row key={blog._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell align="center">
                                    <Image width={80} height={80} className=" " src={blog?.image} alt="" />
                                </Table.Cell>
                                <Table.Cell align="center" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {blog?.title}
                                </Table.Cell>
                                <Table.Cell align="center" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {blog?.message.slice(0, 60) + '...'}
                                </Table.Cell>

                                <Table.Cell align="center" className="flex gap-2">

                                    <Link href={`/singleblog/${blog._id}`} ><div className=""> <button className="text-white bg-secondary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2.5 mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-2"><MdOutlinePageview size={20} className="text-white" />View</button></div></Link>
                                    <div className=""> <button className="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setShowDeleteModal(blog)}>Delete</button></div>

                                </Table.Cell>

                            </Table.Row>)
                        }


                    </Table.Body>
                </Table>
                {
                    showDeleteModal && <ConfirmationModal
                        data={showDeleteModal}
                        setData={setShowDeleteModal}
                        message={`Are You Sure to Delete "${showDeleteModal?.title.slice(0, 40) + '...'}" Blog?`}
                        successAction={deleteBlog}
                        successActionName="Yes! I'm Sure"
                        cancelActionName="No! Cancel"
                        successBtnColor="green"

                    />
                }
            </div>
        </div>
    );
>>>>>>> c83e4629a6a03989c59aaa8248ef5b1b97a5c326
};

export default MyBlog;
