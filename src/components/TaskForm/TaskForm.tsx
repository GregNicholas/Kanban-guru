import React, { useState } from 'react'
import ModalContainer from '../ModalContainer'
import Select from '../Select'
import Button from '../Button'
import FormHeading from './FormHeading'

const TaskForm = () => {
  const [currentStatus, setCurrentStatus] = useState('TODO')
  const [subtaskInputs, setSubtaskInputs] = useState([{title: '', placeHolder: 'e.g. Make coffee'}, {title: '', placeHolder: 'e.g. Drink coffee and smile'}])

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentStatus(e.target.value)
  }

  return (
    <ModalContainer>
        <div 
          className="opacity-100 w-120 p-8 bg-white dark:bg-d-gray rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <form>
            <h3 className="text-lg text-black mb-6 dark:text-white font-bold">Add New Task</h3> 
            <FormHeading text="Title" />
            <input className="h-full w-full mr-4 mb-6 p-2 border border-l-lines dark:border-m-gray rounded dark:bg-d-gray" type="text" placeholder="e.g. Take coffee break" />
            <FormHeading text="Description" />
            <textarea 
              className="h-28 w-full mr-4 mb-6 p-2 border border-l-lines dark:border-m-gray rounded dark:bg-d-gray" 
              placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little." 
            />
        
            <div className="flex flex-col mb-6">
            <FormHeading text="Subtasks" />
            {
              subtaskInputs.map((data, index)=>{
                  const {title, placeHolder}= data;
                  return(
                    <div className="h-10 flex items-center w-full mb-3" key={index}>
                    <input className="h-full w-full mr-4 p-2 border border-l-lines dark:border-m-gray rounded dark:bg-d-gray" type="text" placeholder={placeHolder} />
                    {(subtaskInputs.length!==1)? <button className="text-2xl font-bold" onClick={()=> console.log("REMOVE INPUT")}>x</button>:''}
                    </div>
                  )
              })
            }
            <Button text="+ Add New Subtask" onClick={() => console.log("add new subtask")} primary={false} />
            </div>
            <div className="mb-6">
            <FormHeading text="Status" />
              <Select currentStatus={currentStatus} handleStatusChange={handleStatusChange} columns={['TODO', 'DONE']} />
            </div>
            <div className="flex flex-col">
              <Button text="+ Create Task" onClick={() => console.log("Create TASK")} />
            </div>
          </form>
        </div>
    </ModalContainer>
  )
}

export default TaskForm