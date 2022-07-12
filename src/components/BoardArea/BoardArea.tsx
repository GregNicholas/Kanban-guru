import Button from '../Button'
import BoardColumn from './BoardColumn'
import NewColumn from './NewColumn'
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from 'react-redux'

const BoardArea = () => {
  const displayBoardIndex = useSelector((state: RootState) => state.board.value)
  const displayBoard = useSelector((state: RootState) => state.boards.value[displayBoardIndex])

    const addColumn = () => {
        console.log("Add a new column")
    }

const columns:string[] = displayBoard?.columns.map(column => column.name)

return (
    <main className="flex-1 bg-l-gray dark:bg-v-dark-gray p-6 overflow-scroll">
        { 
          (displayBoard?.name === "") || !displayBoard ? 
          <div className="text-center relative top-1/3 font-bold">
          { displayBoard 
            ? <>
                <p className="text-m-gray text-lg pb-8">This board is empty. Create a new column to get started.</p>
                <Button text="+ Add New Column" onClick={addColumn} />
              </>
            : <p className="text-m-gray text-lg pb-8">Select a board from the sidebar or create one</p>
          }
          </div>
          :
          <div className="flex gap-6 w-fit overflow-scroll">
            {displayBoard.columns.map((column, index) => (
                <BoardColumn key={`${column.name}${index}`} index={index} columns={columns} column={column} />
            )) }
            <NewColumn onClick={addColumn} />
          </div>
        }
    </main>
  )
}

export default BoardArea