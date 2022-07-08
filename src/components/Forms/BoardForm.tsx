import React, { useState } from 'react'
import ModalContainer from '../ModalContainer'
import Button from '../Button'
import FormLabel from './FormLabel'
import { useDispatch } from 'react-redux'
import { addBoard } from '../../features/boardsSlice'
import { Board } from '../../types'

type BoardFormProps = {
  setShowBoardForm: React.Dispatch<React.SetStateAction<boolean>>
  title: string
}

type boardInfo = {
  name: string
  columns: string[]
}

const BoardForm = ({ setShowBoardForm, title }:BoardFormProps) => {
  const [boardName, setBoardName] = useState("")
  const [board, setBoard] = useState<boardInfo>({
                                name: "",
                                columns: ['Todo', 'Dong']
                            })

  const dispatch = useDispatch()

  const inputTemplateStyle = "text-[13px] font-medium text-black dark:text-white border border-l-lines dark:border-m-gray rounded dark:bg-d-gray"

  const changeColumnInput = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newColumns = [...board.columns]
    newColumns[index] = e.target.value
    setBoard(prev => ({
      ...prev,
      columns: newColumns
    }))
  }

  const addColumn = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setBoard(prev => ({
      ...prev,
      columns: [...prev.columns, ""]
    }))
  }

  const removeColumn = (index: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const newColumns = [...board.columns]
    newColumns.splice(index, 1)
    setBoard(prev => ({...prev, columns: newColumns}))
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const columnData = board.columns.map(col => ({name: col, tasks: []}))
    const boardData = {
          name: board.name,
          columns: columnData
      }
    dispatch(addBoard(boardData))
    setShowBoardForm(false)
  }

  return (
    <ModalContainer closeModal={setShowBoardForm}>
        <div 
          className="z-10 opacity-100 w-120 p-8 bg-white dark:bg-d-gray rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg text-black mb-6 dark:text-white font-bold">{title}</h3> 
            <FormLabel>
              Name
              <input className={`${inputTemplateStyle} h-full w-full mr-4 mb-6 pl-4 py-2`}
                     type="text" 
                     value={board.name}
                     onChange={e => setBoard(prev => ({...prev, name: e.target.value}))}
                     placeholder="e.g. Web Design" />
            </FormLabel>
            <div className="flex flex-col mb-6">
            <h5 className="text-3 leading-6 mb-1 text-m-gray font-bold dark:text-white">Columns</h5>
            {
              board.columns.map((title, index)=>{
                  return(
                    <div className="h-10 flex items-center w-full mb-3" key={index}>
                    <input className={`${inputTemplateStyle} h-full w-full mr-4 pl-4 py-2`}
                           onChange={(e) => changeColumnInput(index, e)}
                           value={title}
                           type="text" 
                           placeholder="Column Name"
                           aria-label="new column"
                    />
                    {(board.columns.length!==1)? <button className="text-2xl font-bold" onClick={(e)=> removeColumn(index, e)}>x</button>:''}
                    </div>
                  )
              })
            }
            <Button text="+ Add New Column" onClick={addColumn} primary={false} />
            </div>
              <Button type="submit" text={title === "Add New Board" ? "Create New Board" : "Save Changes"} />
          </form>
        </div>
    </ModalContainer>
  )
}

export default BoardForm