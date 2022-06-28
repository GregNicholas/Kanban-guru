import React, { useState } from 'react'
import ModalContainer from './ModalContainer'
import Select from './Select'

const TaskForm = () => {
  const [currentStatus, setCurrentStatus] = useState('TODO')

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentStatus(e.target.value)
  }

  return (
    <ModalContainer>
        <div 
          className="opacity-100 w-120 p-8 bg-white dark:bg-d-gray rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
            <h3 className="text-lg text-black mb-6 dark:text-white">Add New Task</h3> 
          <p className="text-[13px] font-medium mb-6 leading-6">Title</p>
          <div className="flex flex-col mb-6">
          <h5 className="mb-4">Subtasks</h5>
            
          </div>
          <div>
            <h5 className="mb-2">Status</h5>
            <Select currentStatus={currentStatus} handleStatusChange={handleStatusChange} columns={['TODO', 'DONE']} />
          </div>
        </div>
    </ModalContainer>
  )
}

export default TaskForm