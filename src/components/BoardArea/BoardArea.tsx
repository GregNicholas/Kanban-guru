import Button from '../Button'
import BoardColumn from './BoardColumn'
import NewColumn from './NewColumn'
import { Board } from '../../types'

type DisplayBoardProps = {
    displayBoard: Board;
}

const BoardArea = ({ displayBoard }:DisplayBoardProps) => {
    const addColumn = () => {
        console.log("Add a new column")
    }

    return (
        <main className="flex-1 bg-l-gray dark:bg-v-dark-gray p-6 overflow-scroll">
            { 
              displayBoard.name === "" ? 
              <div className="text-center relative top-1/3 font-bold">
                <p className="text-m-gray text-lg pb-8">This board is empty. Create a new column to get started.</p>
                <Button text="+ Add New Column" onClick={addColumn} />
              </div>
              :
              <div className="flex gap-6 w-fit overflow-scroll">
                {displayBoard.columns.map((column, index) => (
                    <BoardColumn key={`${column.name}${index}`} index={index} column={column} />
                )) }
                <NewColumn onClick={addColumn} />
              </div>
            }
        </main>
    )
}

export default BoardArea