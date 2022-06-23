import { Task } from '../../types'

type TaskItemProps = {
  task: Task;
}

const TaskItem = ({ task }:TaskItemProps) => {

  return (
    <div className="px-4 py-[23px] mb-5  bg-white dark:bg-d-gray rounded-lg shadow-task cursor-pointer">
      <div className="text-15 mb-2 text-black dark:text-white hover:text-main-purple dark:hover:text-main-purple">{task.title}</div>
      <div className="text-xs">{task.subtasks.filter(sub => sub.isCompleted).length} of {task.subtasks.length} subtasks</div>
    </div>
  )
}

export default TaskItem