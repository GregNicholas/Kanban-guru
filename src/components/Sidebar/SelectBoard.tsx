import SelectBoardTitle from "./SelectBoardTitle"
import { Board } from '../../types'

type SelectBoardProps = {
    boardsData: Board[] | null
    displayBoard: Board
    setDisplayBoard: React.Dispatch<React.SetStateAction<Board>>
}

const SelectBoard = ({ boardsData, displayBoard, setDisplayBoard }:SelectBoardProps) => {
  return (
    <section className="text-base font-bold text-m-gray fill-m-gray">
        <h3 className="text-xs mb-4 pl-8">ALL BOARDS ({boardsData?.length})</h3>
        {boardsData && <ul className="cursor-pointer">
            {boardsData.map(board => {
                return <SelectBoardTitle key={board.name} 
                          board={board} displayBoard={displayBoard} 
                          setDisplayBoard={setDisplayBoard} 
                />
            })}
        </ul>}
    </section>
  )
}

export default SelectBoard