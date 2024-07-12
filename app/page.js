'use client'

import Todo from "@/components/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  })

  const [todoData,setTodoData] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      //api code
      const response = await axios.post('/api', formData)
      setFormData({
        title: "",
        description: ""
      })
      fetchData()
      toast.success(response.data.msg)
    } catch (error) {
      toast.error("Error")
    }
  }

  const deleteTodo = async(id)=>{
    try {
      const response = await axios.delete(`/api`,{
        params:{
          mongoId:id
        }
      })
      toast.success('Deleted')
      fetchData()
    } catch (error) {
      toast.error(error)
    }
  }

  const completeTodo = async(id)=>{
    const response = await axios.put('/api',{},{
      params:{
        mongoId:id
      }
    })
    toast.success(response.data.msg)
    fetchData()
  }
  const fetchData = async()=>{
    const response = await axios.get('/api')
    setTodoData(response.data)
    // console.log(response);
  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log(formData);
  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input type="text" name="title" placeholder="Enter Title " className="px-3 py-2 border-2 w-full" onChange={(e) => setFormData({ ...formData, title: e.target.value })} value={formData.title}/>
        <textarea name="description" placeholder="Enter description" className="px-3 py-2 border-2 w-full" onChange={(e) => setFormData({ ...formData, description: e.target.value })} value={formData.description}/>
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
            {/* <Todo  /> */}
            {
              todoData.map((todo,index)=>(
                <Todo id={index}  todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
              ))
            }

          </tbody>
        </table>
      </div>
      <ToastContainer />
    </>
  );
}
