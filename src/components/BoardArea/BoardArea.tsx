import Button from '../Button'
import { Board } from '../../types'

type BoardAreaProps = {
    displayBoard: Board
}

const BoardArea = ({ displayBoard }:BoardAreaProps) => {
    const addColumn = () => {
        console.log("Add a new column")
    }

    return (
        <main className="flex-1 bg-l-gray dark:bg-v-dark-gray">

            { 
              displayBoard.name !== "" ? 
              <div className="text-center relative top-1/3 font-bold">
                <p className="text-m-gray text-lg pb-8">This board is empty. Create a new column to get started.</p>
                <Button text="+ Add New Column" onClick={addColumn} />
              </div>
              :
              <div>SHOW BOARD STUFF </div>
            }
        </main>
    )
}

export default BoardArea