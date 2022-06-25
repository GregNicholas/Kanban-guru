import React from 'react'
import { Task } from '../../types'
import TaskListItem from './TaskListItem';

type TaskModalProps = {
    task: Task;
    columns: string[];
    toggleTaskView: (e: any) => void;
}

const TaskModal = ({ task, columns, toggleTaskView }:TaskModalProps) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full text-xs text-m-gray bg-filter flex items-center justify-center">
        <div 
          className="opacity-100 h-131 w-120 p-8 bg-white dark:bg-d-gray rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex mb-6 justify-between gap-6">
            <h3 className="text-lg text-black dark:text-white">{task.title}</h3> 
            <img className="h-5 inline" src={`${process.env.PUBLIC_URL}/assets/icon-vertical-ellipsis.svg`} 
                 alt="board options" 
            />
          </div>
          <p className="text-[13px] font-medium mb-6 leading-6">{task.description}</p>
          <div className="flex flex-col mb-6">
            <h5 className="mb-4">Subtasks ({task.subtasks.filter(sub => sub.isCompleted).length} of {task.subtasks.length})</h5>
            <ul>
              {task.subtasks.map(subtask => {
                return <li><label><input type="checkbox" checked={subtask.isCompleted} className="checked:bg-main-purple ml-4 mr-[20px]" /><span>{subtask.title}</span></label></li>
              })}
            </ul>
          </div>
          <div>
            <h5 className="mb-2">Current Status</h5>
            <select className="w-full px-4 rounded h-10 bg-white dark:bg-d-gray border border-l-lines dark:border-m-gray">
              {columns.map(status => {
                return <option className="text-[13px] font-medium" value={status}>{status}</option>
              })}
            </select>
          </div>
        </div>
    </div>
  )
}

export default TaskModal