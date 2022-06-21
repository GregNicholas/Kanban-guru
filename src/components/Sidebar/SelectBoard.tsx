import SelectBoardTitle from "./SelectBoardTitle"
import { Board } from '../../types'

type SelectBoardProps = {
    boardsData: Board[];
}

const SelectBoard = ({ boardsData }:SelectBoardProps) => {
  return (
    <section className="text-base font-bold text-m-gray">
        <h3 className="text-xs mb-4 pl-8">ALL BOARDS (3)</h3>
        <ul className="cursor-pointer">
            {boardsData.map(board => {
                return <SelectBoardTitle key={board.name} title={board.name} />
            })}
        </ul>
    </section>
  )
}

export default SelectBoard