import React from 'react'
import TaskShow from './TaskShow'

const TaskList = ({tasks, onDelete}) => {
    const renderedTasks = tasks.map((task) => {
        return <TaskShow onDelete={onDelete} key={task.id} task={task} />
    })

  return (
    <div>{renderedTasks}</div>
  )
}

export default TaskList