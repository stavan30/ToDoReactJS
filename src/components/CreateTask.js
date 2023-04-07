import React from 'react'
import { useState } from 'react'

const CreateTask = ({ onCreate }) => {
  const [task, setTask] = useState('')
  
  const handleChange = (event) => {
    setTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(task)
    setTask('')
  }

  return (
    <div>
        <form className='flex flex-col justify-center items-center pt-10 gap-5' onSubmit={handleSubmit}>
            <h1 className='text-2xl'>Add Tasks!!</h1>
            <input className='border-2 border-rose-500 rounded' value={task} onChange={handleChange}/>
            <button className='border-2 px-2 rounded py-1 border-blue-500'>Add</button>
        </form>
    </div>
  )
}

export default CreateTask