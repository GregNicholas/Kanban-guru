import { useState } from 'react'
import ModalContainer from '../ModalContainer'
import SubtaskItem from './SubtaskItem'
import Select from '../Select'
import { Task } from '../../types'

type TaskModalProps = {
    task: Task;
    columns: string[];
    toggleTaskView: () => void;
}

const TaskModal = ({ task, columns, toggleTaskView }:TaskModalProps) => {
  const [currentStatus, setCurrentStatus] = useState(task.status)
  const [subtasks, setSubtasks] = useState(task.subtasks)

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentStatus(e.target.value)
  }

  const changeSubtaskStatus = (title: string, isChecked: boolean) => {
    const newSubtasks = [...subtasks]
    const index = newSubtasks.findIndex(el => el.title === title)
    newSubtasks[index].isCompleted = isChecked
    setSubtasks(newSubtasks)
  }
  
  return (
    <ModalContainer>
      <div 
          className="opacity-100 w-120 p-8 bg-white dark:bg-d-gray rounded-lg"
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
              {subtasks.map(subtask => {
                return <SubtaskItem 
                          key={subtask.title}
                          subtask={subtask} 
                          changeSubtaskStatus={changeSubtaskStatus}
                       />
              })}
            </ul>
          </div>
          <div>
            <h5 className="mb-2">Current Status</h5>
            <Select currentStatus={currentStatus} handleStatusChange={handleStatusChange} columns={columns} />
          </div>
        </div>
      </ModalContainer>
  )
}

export default TaskModal