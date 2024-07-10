'use client'

import Todo from "@/components/Todo";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      toast.success('Added Successfully')
    } catch (error) {
      toast.error("Error")
    }
  }

  console.log(formData);
  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input type="text" name="title" placeholder="Enter Title " className="px-3 py-2 border-2 w-full" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
        <textarea name="description" placeholder="Enter description" className="px-3 py-2 border-2 w-full" onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">Add Todo</button>
      </form>



      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <Todo />
            <Todo />
            <Todo />

          </tbody>
        </table>
      </div>
      <ToastContainer />
    </>
  );
}
