import React from 'react'

const Todo = ({todo,id,deleteTodo,completeTodo}) => {
  
  return (
    <>
     <tr className="bg-white border-b ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                {id+1}
              </th>
              <td className={`px-6 py-4 ${todo.isComplete?'line-through':""}`}>
                {todo.title}
              </td>
              <td className={`px-6 py-4 ${todo.isComplete?'line-through':""}`}>
                {todo.description}
              </td>
              <td className="px-6 py-4">
                {todo.isComplete?'Completed':"Pending"}
              </td>
              <td className="px-6 py-4 gap-1 flex">
                <button className='py-2 px-4 bg-red-500 text-white' onClick={()=>deleteTodo(todo._id)}>Delete</button>
                {!todo.isComplete &&<button className='py-2 px-4 bg-green-500 text-white' onClick={()=>completeTodo(todo._id)}>Done</button>}
              </td>
            </tr>
    </>
  )
}

export default Todo