import React, { useState } from 'react'
import ModalContainer from '../ModalContainer'
import Select from '../Select'
import Button from '../Button'
import FormLabel from './FormLabel'
import { Task } from '../../types'

type TaskFormProps = {
  setShowTaskForm: React.Dispatch<React.SetStateAction<boolean>>
  title: string
}

const TaskForm = ({ setShowTaskForm, title }:TaskFormProps) => {
  const columns = ["TODO", "DOING", "DONE"]
  const [taskTitle, setTaskTitle] = useState("")
  const [description, setDescription] = useState("")
  const [statusValue, setStatusValue] = useState(columns[0])
  const [subtaskInputs, setSubtaskInputs] = useState([{title: '', placeHolder: 'e.g. Make coffee'}, {title: '', placeHolder: 'e.g. Drink coffee and smile'}])
  const [newTask, setNewTask] = useState<Task | {}>({})

  const inputTemplateStyle = "text-[13px] font-medium text-black dark:text-white border border-l-lines dark:border-m-gray rounded dark:bg-d-gray"

  const changeTaskInput = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    const newSubtasks = [...subtaskInputs]
    newSubtasks[index].title = e.target.value
    setSubtaskInputs(newSubtasks)
  }

  const addTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSubtaskInputs((prev) => [
      ...prev,
      { title: "", placeHolder: "enter subtask" }
    ])
  }

  const removeSubtask = (index: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const newSubtasks = [...subtaskInputs]
    newSubtasks.splice(index, 1)
    setSubtaskInputs(newSubtasks)
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNewTask({title: taskTitle, description: description, status: statusValue, subtasks: subtaskInputs})
    setShowTaskForm(false)

    console.log(newTask)
  }

  return (
    <ModalContainer>
        <div 
          className="opacity-100 w-120 p-8 bg-white dark:bg-d-gray rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg text-black mb-6 dark:text-white font-bold">{title}</h3> 
            <FormLabel>
              Title
              <input className={`${inputTemplateStyle} h-full w-full mr-4 mb-6 pl-4 py-2`} 
                     type="text" 
                     value={taskTitle}
                     onChange={e => setTaskTitle(e.target.value)}
                     placeholder="e.g. Take coffee break" />
            </FormLabel>
            <FormLabel>
              Description
              <textarea 
                className={`${inputTemplateStyle} h-28 w-full mr-4 mb-6 pl-4 py-2`}
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little." 
              />
            </FormLabel>
            <div className="flex flex-col mb-6">
            <h5 className="leading-6 mb-1 text-m-gray font-bold dark:text-white">Subtasks</h5>
            {
              subtaskInputs.map((data, index)=>{
                  const {title, placeHolder}= data;
                  return(
                    <div className="h-10 flex items-center w-full mb-3" key={index}>
                    <input className={`${inputTemplateStyle} h-full w-full mr-4 pl-4 py-2`}
                           onChange={(e) => changeTaskInput(index, e)}
                           value={title}
                           type="text" 
                           placeholder={placeHolder} 
                           aria-label="new subtask"
                    /> 
                    {(subtaskInputs.length!==1)? <button className="text-2xl font-bold" onClick={(e)=> removeSubtask(index, e)}>x</button>:''}
                    </div>
                  )
              })
            }
            <Button text="+ Add New Subtask" onClick={addTask} primary={false} />
            </div>
            <div className="mb-6">
            <FormLabel>
              Status
              <Select currentStatus={statusValue} handleStatusChange={(e) => setStatusValue(e.target.value)} columns={columns} />
            </FormLabel>
            </div>
            <div className="flex flex-col">
              <Button type="submit" text={title === "Add New Task" ? "Create Task" : "Save Changes"} onClick={() => console.log("Create TASK")} />
            </div>
          </form>
        </div>
    </ModalContainer>
  )
}

export default TaskForm