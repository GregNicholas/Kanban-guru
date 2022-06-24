import React from 'react'

type ViewTaskProps = {
    toggleTaskView: () => void;
}

const ViewTask = ({ toggleTaskView }:ViewTaskProps) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-filter flex items-center justify-center">
        <div className="opacity-100 h-131 w-120 bg-white dark:bg-d-gray"></div>
    </div>
  )
}

export default ViewTask