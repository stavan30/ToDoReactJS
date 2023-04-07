import React from 'react'

const TaskShow = ({task, onDelete}) => {
    const handleClick = () => {
        onDelete(task.id)
    }
  return (
    <div className='flex justify-center items-center gap-5 py-2'>
        <div className='border-2 border-blue-500 h-max w-max p-2 rounded text-lg'>
            {task.task}
        </div>
        <button className='border-2 border-red-400 h-max w-max p-1 rounded' onClick={handleClick}>Done!</button>
    </div>
  )
}

export default TaskShow