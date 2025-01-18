// import React from 'react'

// import { useSelector } from "react-redux";

// export default function EditProfile() {

//     const { user } = useSelector((state) => state.auth);
//     return (
//         <>
//           <h1 className="text-2xl font-bold text-red-500 mb-6">Edit Profile</h1>
//           <form className="space-y-6">
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//               <div className="w-full md:w">
//                 <label className="block text-sm font-medium  mb-1">User Name</label>
//                 <input type="text" className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400" value={user?.username} readOnly />
//               </div>
//             </div>
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//               <div className="w-full md:w-1/2">
//                 <label className="block text-sm font-medium  mb-1">Email</label>
//                 <input type="email" className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400" value={user?.email} readOnly />
//               </div>
//               <div className="w-full md:w-1/2">
//                 <label className="block text-sm font-medium  mb-1">Address</label>
//                 <input type="text" className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400" value={user?.address} readOnly />
//               </div>
//             </div>
//             <div className="flex">
//               <button
//                 type="submit"
//                 className="w-full inline-flex items-center justify-center rounded-lg bg-red-500 px-6 py-2.5 text-white font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200"
//               >
//            Save Changes
//               </button>
//             </div>
//           </form>
//         </>
//       );
// }

// Frontend - EditProfile.jsx

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../action/AuthAction";
import { toast } from "sonner";
import { Loader } from "../../utils/Loader";
export default function EditProfile() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    address: user?.address || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(updateProfile(formData));
    if (result.success) {
      // You can add a success notification here
      console.log("Profile updated successfully");
      toast.success("Profile updated successfully");
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-red-500 mb-6">Edit Profile</h1>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
        </div>

        <div className="flex">
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center rounded-lg bg-red-500 px-6 py-2.5 text-white font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50"
          >
            {loading ? <Loader /> : "Save Changes"}
          </button>
        </div>
      </form>
    </>
  );
}
