import React from 'react'
import { Task } from '../../types'

type ViewTaskProps = {
    task: Task;
    toggleTaskView: (e: any) => void;
}

const ViewTask = ({ task, toggleTaskView }:ViewTaskProps) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-filter flex items-center justify-center">
        <div 
          className="opacity-100 h-131 w-120 p-6 bg-white dark:bg-d-gray"
          onClick={(e) => e.stopPropagation()}
        >
          {task.title}
        </div>
    </div>
  )
}

export default ViewTask