import { Task } from '../../types'
import ViewTask from './ViewTask'

type TaskItemProps = {
  task: Task;
}

const TaskItem = ({ task }:TaskItemProps) => {

  return (
    <div onClick={() => console.log(task.title, "clicked")} className="px-4 py-[23px] mb-5  bg-white text-black hover:text-main-purple dark:text-white dark:hover:text-main-purple dark:bg-d-gray rounded-lg shadow-task cursor-pointer">
      <div className="text-15 mb-2">{task.title}</div>
      <div className="text-xs text-m-gray">{task.subtasks.filter(sub => sub.isCompleted).length} of {task.subtasks.length} subtasks</div>
    </div>
  )
}

export default TaskItem