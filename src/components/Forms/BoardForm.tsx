import React, { useState } from 'react'
import ModalContainer from '../ModalContainer'
import Button from '../Button'
import FormLabel from './FormLabel'
import { Task } from '../../types'

type BoardFormProps = {
  setShowBoardForm: React.Dispatch<React.SetStateAction<boolean>>
  title: string
}

const BoardForm = ({ setShowBoardForm, title }:BoardFormProps) => {
  const columns = ["TODO", "DOING", "DONE"]
  const [taskTitle, setTaskTitle] = useState("")
  const [description, setDescription] = useState("")
  const [statusValue, setStatusValue] = useState(columns[0])
  const [columnInputs, setColumnInputs] = useState(['Todo', 'Doing'])
  const [newTask, setNewTask] = useState<Task | {}>({})

  const changeTaskInput = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    const newColumns = [...columnInputs]
    newColumns[index] = e.target.value
    setColumnInputs(newColumns)
  }

  const addTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setColumnInputs((prev) => [
      ...prev,
      ""
    ])
  }

  const removeColumn = (index: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const newColumns = [...columnInputs]
    newColumns.splice(index, 1)
    setColumnInputs(newColumns)
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNewTask({title: taskTitle, description: description, status: statusValue, columns: columnInputs})
    setShowBoardForm(false)

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
              <input className="h-full w-full mr-4 mb-6 pl-4 py-2 font-normal border border-l-lines dark:border-m-gray rounded dark:bg-d-gray" 
                     type="text" 
                     value={taskTitle}
                     onChange={e => setTaskTitle(e.target.value)}
                     placeholder="e.g. Take coffee break" />
            </FormLabel>
            <FormLabel>
              Description
              <textarea 
                className="h-28 w-full mr-4 mb-6 pl-4 py-2 font-normal border border-l-lines dark:border-m-gray rounded dark:bg-d-gray" 
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little." 
              />
            </FormLabel>
            <div className="flex flex-col mb-6">
            <h5 className="text-[13px] leading-6 mb-1 text-m-gray font-bold dark:text-white">Columns</h5>
            {
              columnInputs.map((title, index)=>{
                  return(
                    <div className="h-10 flex items-center w-full mb-3" key={index}>
                    <input className="h-full w-full mr-4 pl-4 py-2 border border-l-lines dark:border-m-gray rounded dark:bg-d-gray" 
                           onChange={(e) => changeTaskInput(index, e)}
                           value={title}
                           type="text" 
                           aria-label="new column"
                    />
                    {(columnInputs.length!==1)? <button className="text-2xl font-bold" onClick={(e)=> removeColumn(index, e)}>x</button>:''}
                    </div>
                  )
              })
            }
            <Button text="+ Add New Column" onClick={addTask} primary={false} />
            </div>
            <div className="flex flex-col">
              <Button type="submit" text={title === "Add New Board" ? "Create New Board" : "Save Changes"} onClick={() => console.log("Create TASK")} />
            </div>
          </form>
        </div>
    </ModalContainer>
  )
}

export default BoardForm