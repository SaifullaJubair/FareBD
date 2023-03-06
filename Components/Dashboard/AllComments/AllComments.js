import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal, Select, Table, Textarea, TextInput } from 'flowbite-react';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import DashboardSideBar from '../DashboardSideBar/DashboardSideBar';
import { FaEdit, FaExternalLinkAlt, FaLink, FaMailBulk, FaTrash, FaUser } from 'react-icons/fa';
import Loader from '@/Components/Shared/Loader/Loader';
import { AuthContext } from '@/Contexts/AuthProvider/AuthProvider';
const AllComments = () => {
   const { user } = useContext(AuthContext)

   const [comments, setComment] = useState(null)

   const [refetch, setRefetch] = useState(false)

   const [deleteData, setDeleteData] = useState(null)
   const [editData, setEditData] = useState(null)
   const [commentUpdate, setCommentUpdate] = useState()
   console.log(editData?._id)



   useEffect(() => {
      fetch(`http://localhost:5000/comments/${user?.email}`)
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setComment(data)

         })
   }, [refetch, user?.email])


   return (
      <div className='flex'>
         <DashboardSideBar></DashboardSideBar>
         <div className='mx-auto flex-grow'>

         </div>

      </div>
   );
};

export default AllComments;