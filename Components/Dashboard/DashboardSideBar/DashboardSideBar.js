import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import useAdmin from "@/Hooks/useAdmin";
import useBuyer from "@/Hooks/useBuyer";
import useSeller from "@/Hooks/useSeller";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import {
  BiCategory,
  BiCommentDetail,
  BiDislike,
  BiGroup,
  BiLike,
} from "react-icons/bi";
import { BsGraphUp, BsNewspaper } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineAccountCircle } from "react-icons/md";

const DashboardSideBar = () => {
  const { user } = useContext(AuthContext);
  const [hide, setHide] = useState(true);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  console.log(isAdmin, isAdminLoading);

  const handleToggle = () => {
    setHide(!hide);
  };

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/singleuser/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUserData(data);
        });
    }
  }, [user]);

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div
      className="bg-primary min-h-screen text-white  w-fit "
      onMouseEnter={() => setHide(false)}
      onMouseLeave={() => setHide(true)}
    >
      <div
        className={
          hide
            ? `h-full p-3 space-y-2 w-[80px] `
            : `h-full p-3 space-y-2 w-[200px]  `
        }
      >
        <div
          className={
            hide
              ? `flex flex-col gap-4 py-2 items-center`
              : `flex flex-col gap-4 py-2 ml-4`
          }
        >
          <span
            onClick={() => handleToggle()}
            className={
              hide
                ? "flex items-center justify-center text-center text-xl"
                : `flex text-lg`
            }
          >
            <HiOutlineMenu className={`${!hide} && 'ml-20' `}></HiOutlineMenu>{" "}
          </span>
          <img
            src={userData?.img}
            alt=""
            className="w-12 h-12 rounded-full dark:bg-gray-500"
          />
          <div className={hide ? "hidden hover:block" : "block"}>
            <h2 className="text-lg font-semibold">{user?.displayName}</h2>
            <h4>{userData?.role}</h4>
          </div>
        </div>
        <div className="divide-y divide-gray-700">
          <ul className="pt-2 pb-4 space-y-1 text-lg flex flex-col gap-4">
            {isBuyer && (
              <>
                <li>
                  <BiLike className="inline-block ml-4 mr-6 h-7"></BiLike>
                  <Link href={`/dashboard/mywishlist`}>
                    <span className={hide ? "hidden" : "inline"}>
                      My Wishlist
                    </span>
                  </Link>
                </li>
                <li>
                  <BiDislike className="inline-block ml-4 mr-6 h-7"></BiDislike>
                  <Link href={`/dashboard/myfeedback`}>
                    <span className={hide ? "hidden" : "inline"}>
                      My Feedback
                    </span>
                  </Link>
                </li>
                <li>
                  <BiCommentDetail className="inline-block ml-4 mr-6 h-7"></BiCommentDetail>
                  <Link href={`/dashboard/mycomments`}>
                    <span className={hide ? "hidden" : "inline"}>
                      My Comments
                    </span>
                  </Link>
                </li>
              </>
            )}

            {isSeller && (
              <>
                <li className="dark:bg-gray-800 dark:text-gray-50">
                  <CgAddR className="inline-block ml-4 mr-6 h-7 text-white"></CgAddR>
                  <Link href={`/dashboard/addproperty`}>
                    <span className={hide ? "hidden" : "inline"}>
                      {" "}
                      Add Property
                    </span>
                  </Link>
                </li>
                <li>
                  <BsNewspaper className="inline-block ml-4 mr-6 h-7"></BsNewspaper>
                  <Link href={`/dashboard/myproperties`}>
                    <span className={hide ? "hidden" : "inline"}>
                      My Properties
                    </span>
                  </Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li>
                  <BiLike className="inline-block ml-4 mr-6 h-7"></BiLike>
                  <Link href={`/dashboard/allwishlist`}>
                    <span className={hide ? "hidden" : "inline"}>
                      All Wishlist
                    </span>
                  </Link>
                </li>

                <li>
                  <BiCommentDetail className="inline-block ml-4 mr-6 h-7"></BiCommentDetail>
                  <Link href={`/dashboard/allfeedback`}>
                    <span className={hide ? "hidden" : "inline"}>
                      All Feedback
                    </span>
                  </Link>
                </li>

                <li>
                  <BsNewspaper className="inline-block ml-4 mr-6 h-7"></BsNewspaper>
                  <Link href={`/dashboard/allproperties`}>
                    <span className={hide ? "hidden" : "inline"}>
                      All Properties
                    </span>
                  </Link>
                </li>

                <li>
                  <BiGroup className="inline-block ml-4 mr-6 h-7"></BiGroup>
                  <Link href={`/dashboard/allusers`}>
                    <span className={hide ? "hidden" : "inline"}>
                      All Users
                    </span>
                  </Link>
                </li>
              </>
            )}

            <li>
              <BsGraphUp className="inline-block ml-4 mr-6 h-7"></BsGraphUp>
              <Link href={`/dashboard/statistics`}>
                <span className={hide ? "hidden" : "inline"}>Statistics</span>
              </Link>
            </li>
            <li>
              <BsGraphUp className="inline-block ml-4 mr-6 h-7"></BsGraphUp>
              <Link href={`/dashboard/myblog`}>
                <span className={hide ? "hidden" : "inline"}>My Blog</span>
              </Link>
            </li>
          </ul>
          <hr className="bg-white border-0" />

          <ul className="pt-4 pb-2  text-lg flex flex-col gap-4">
            <li>
              <MdOutlineAccountCircle className="inline ml-4 mr-6 h-7"></MdOutlineAccountCircle>
              <Link href={`/userprofile`}>
                <span className={hide ? "hidden" : "inline"}>Profile</span>
              </Link>
            </li>
            <li>
              <AiOutlineLogout className="inline ml-4 mr-6 h-7"></AiOutlineLogout>
              <span
                className={hide ? "hidden" : "inline"}
                onClick={handleLogOut}
              >
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
