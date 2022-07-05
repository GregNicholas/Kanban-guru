import { useState } from 'react'
import ModalContainer from '../ModalContainer'
import SubtaskItem from './SubtaskItem'
import Select from '../Select'
import EditModal from '../EditModal'
import TaskForm from '../Forms/TaskForm'
import DeleteWarning from '../DeleteWarning'
import { Task } from '../../types'

type TaskModalProps = {
    task: Task;
    columns: string[];
    toggleTaskView: () => void;
}

const TaskModal = ({ task, columns, toggleTaskView }:TaskModalProps) => {
  const [currentStatus, setCurrentStatus] = useState(task.status)
  const [subtasks, setSubtasks] = useState(task.subtasks)
  const [showModal, setShowModal] = useState(false)
  const [showEditTask, setShowEditTask] = useState(false)
  const [showDeleteWarning, setShowDeleteWarning] = useState(false)

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentStatus(e.target.value)
  }

  const changeSubtaskStatus = (title: string, isChecked: boolean) => {
    const newSubtasks = [...subtasks]
    const index = newSubtasks.findIndex(el => el.title === title)
    newSubtasks[index].isCompleted = isChecked
    setSubtasks(newSubtasks)
  }

  const handleDeleteWarning = () => {
    setShowDeleteWarning(true)
  }
  
  return (
    <ModalContainer>
      {
        showEditTask ? <TaskForm title="Edit Task" setShowTaskForm={setShowEditTask}/>
        : showDeleteWarning 
        ? <DeleteWarning 
            closeModal={() => setShowDeleteWarning(false)} 
            title="Delete this task?" 
            message={`Are you sure you want to delete the ‘${task.title}’ task and its subtasks? This action cannot be reversed.`}
          />
        : <div 
          className="opacity-100 w-120 p-8 bg-white dark:bg-d-gray rounded-lg cursor-default"
          onClick={(e) => {
              e.stopPropagation()
            }
          }
        >
          <div className="flex mb-6 justify-between gap-6 relative">
            <h3 className="text-lg text-black dark:text-white">{task.title}</h3> 
            <img 
                 className="h-5 px-0.5 inline cursor-pointer" 
                 onClick={() => setShowModal(prev => !prev)}
                 src={`${process.env.PUBLIC_URL}/assets/icon-vertical-ellipsis.svg`} 
                 alt="board options" 
            />
            {showModal && <EditModal 
                            editText="Edit Task" 
                            deleteText="Delete Task"
                            handleEdit={setShowEditTask}
                            handleDelete={handleDeleteWarning}
                          />}
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
      }
        
      </ModalContainer>
  )
}

export default TaskModal