import { useState } from 'react'
import Button from '../Button'
import Logo from '../Logo'
import EditModal from '../EditModal'
import TaskForm from '../Forms/TaskForm'
import DeleteWarning from '../DeleteWarning'
import { Board } from '../../types'

type HeaderProps = {
    displayBoard: Board;
    isDarkMode: boolean;
    showSidebar: boolean;
}

const Header = ({ displayBoard, isDarkMode, showSidebar }:HeaderProps) => {
    const [showModal, setShowModal] = useState(false)
    const [showTaskForm, setShowTaskForm] = useState(false)
    const [showDeleteWarning, setShowDeleteWarning] = useState(false)

    const toggleShowTaskForm = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        setShowTaskForm(prev => !prev)
        console.log("BUTTON CLICK TASK FORM")
    }

    const addTask = () => {
        console.log("add task to current board")
    }
    const nameClasses = !showSidebar ? "ml-44" : "ml-0"

    const hideModal = () => setShowModal(false)

    const handleDeleteWarning = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        setShowDeleteWarning(true)
      }
    
    return (
        <header onClick={(e) => {
            hideModal()
            setShowTaskForm(false)
        }} 
            className="w-full h-24 pl-6 pr-8 flex items-center justify-between border-b border-l-lines bg-white dark:bg-d-gray dark:border-d-lines">
            {!showSidebar && <Logo isDarkMode={isDarkMode} showSidebar={showSidebar} /> }
            <div className={`flex items-center h-full ${nameClasses}`}>
                {!showSidebar && <div className="w-px h-full mr-8 border-l border-l-lines dark:border-d-lines"></div>}
                <h2 className={`font-bold font-sans text-black dark:text-white text-center text-2xl`}>{displayBoard.name}</h2>
            </div>
            <div>
                    <Button text=" + Add New Task " onClick={toggleShowTaskForm} />
                    <div className="ml-4 p-2 inline cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation()
                                setShowModal(prev => !prev)}}
                    >
                    <img className="h-5 inline" src={`${process.env.PUBLIC_URL}/assets/icon-vertical-ellipsis.svg`} 
                        alt="board options" 
                    />
                    </div>
                    {showTaskForm && <TaskForm setShowTaskForm={setShowTaskForm} title="Add New Task" />}
                    {showModal && <EditModal 
                                    editText="Edit Board" 
                                    deleteText="Delete Board"
                                    handleEdit={() => console.log("Edit board")}
                                    handleDelete={(e:React.MouseEvent<HTMLDivElement, MouseEvent>) => handleDeleteWarning(e)}
                                />}
                    {showDeleteWarning && 
                        <DeleteWarning 
                            closeModal={() => setShowDeleteWarning(false)} 
                            title="Delete this board?"
                            message={`Are you sure you want to delete the ‘${displayBoard.name}’ board? This action will remove all columns and tasks and cannot be reversed.`}
                        />
                    }
            </div>
            
        </header>
    )
}

export default Header