import React, { useState } from 'react'
import ModalContainer from '../ModalContainer'
import Select from '../Select'
import Button from '../Button'
import FormLabel from './FormLabel'
import { useDispatch } from 'react-redux'
import { addTask, editTask, deleteTask } from '../../features/boardsSlice'
import { Task, Board } from '../../types'
// import { StringDecoder } from 'string_decoder'

type TaskFormProps = {
  title: string
  currentTask?: Task | null
  board: Board
  column?: string 
  setShowTaskForm: React.Dispatch<React.SetStateAction<boolean>>
}

const TaskForm = ({ title, currentTask=null, board, column, setShowTaskForm }:TaskFormProps) => {
  const columns = board.columns.map(column => column.name)
  let columnName = column ? column : columns[0]

  const [subtaskInputs, setSubtaskInputs] = useState([{title: '', placeHolder: 'e.g. Make coffee'}, {title: '', placeHolder: 'e.g. Drink coffee and smile'}])

  const dispatch = useDispatch()

  const [task, setTask] = useState<Task>(currentTask 
                    ? {
                        title: currentTask.title, 
                        description: currentTask.description, 
                        status: currentTask.status,
                        subtasks: [...currentTask.subtasks]
                      } 
                    : {
                      title: "", 
                      description: "", 
                      status: columnName,
                      subtasks: [{title: '', isCompleted: false}]
                    })

  const inputTemplateStyle = "text-[13px] font-medium text-black dark:text-white border border-l-lines dark:border-m-gray rounded dark:bg-d-gray"

  const changeSubtaskInput = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newSubtasks = task.subtasks.map(sub => ({ ...sub }))
    newSubtasks[index].title = e.target.value
    setTask(prev => ({
      ...prev,
      subtasks: newSubtasks
    }))
  }

  const addSubtask = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newSubtasks = task.subtasks.map(sub => ({ ...sub }))
    newSubtasks.push({ title: "", isCompleted: false })
    setTask((prev) => ({
      ...prev, 
      subtasks: newSubtasks
    }))
  }

  const removeSubtask = (index: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const newSubtasks = [...subtaskInputs]
    newSubtasks.splice(index, 1)
    setSubtaskInputs(newSubtasks)
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTask = {title: task.title, description: task.description, status: task.status, subtasks: [...task.subtasks]}
    setShowTaskForm(false)
    if(!currentTask){
      console.log("NOT A CURRENT TASK")
      dispatch(addTask({task: newTask, boardName: board.name, columnName: columnName}))
    } else {
          console.log("move task to new column")
          dispatch(deleteTask({taskTitle: task.title, boardName: board.name, columnName: columnName}))
          dispatch(addTask({task: newTask, boardName: board.name, columnName: columnName}))      
    }
    
  }

  return (
    <ModalContainer>
        <div 
          className="z-10 opacity-100 w-120 p-8 bg-white dark:bg-d-gray rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg text-black mb-6 dark:text-white font-bold">{title}</h3> 
            <FormLabel>
              Title
              <input className={`${inputTemplateStyle} h-full w-full mr-4 mb-6 pl-4 py-2`} 
                     type="text" 
                     value={task.title}
                     onChange={e => setTask(prev => ({...prev, title: e.target.value}))}
                     placeholder="e.g. Take coffee break" 
                     required
              />
            </FormLabel>
            <FormLabel>
              Description
              <textarea 
                className={`${inputTemplateStyle} h-28 w-full mr-4 mb-6 pl-4 py-2`}
                value={task.description}
                onChange={e => setTask(prev => ({...prev, description: e.target.value}))}
                placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little." 
              />
            </FormLabel>
            <div className="flex flex-col mb-6">
            <h5 className="leading-6 mb-1 text-m-gray font-bold dark:text-white">Subtasks</h5>
            {
              task.subtasks.map((data, index)=>{
                  const {title}= data;
                  return(
                    <div className="h-10 flex items-center w-full mb-3" key={index}>
                    <input className={`${inputTemplateStyle} h-full w-full mr-4 pl-4 py-2`}
                           onChange={(e) => changeSubtaskInput(index, e)}
                           value={title}
                           type="text" 
                           placeholder={"e.g. Make coffee"} 
                           aria-label="new subtask"
                    /> 
                    {(task.subtasks.length!==1)? <button className="text-2xl font-bold" onClick={(e)=> removeSubtask(index, e)}>x</button>:''}
                    </div>
                  )
              })
            }
            <Button text="+ Add New Subtask" onClick={addSubtask} primary={false} />
            </div>
            <div className="mb-6">
            <FormLabel>
              Status
              <Select 
                currentStatus={task.status} 
                handleStatusChange={(e) => setTask(prev => ({...prev, status: e.target.value}))} 
                columns={columns} 
              />
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