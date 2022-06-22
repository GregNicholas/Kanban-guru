// in progress

import React, { useState, useEffect, createContext, useContext, FC } from "react";
import data from '../data.json'
import { Board } from '../types'

interface BoardsContextProps {
  boardsData: Board[];
  currentBoard: Board;
  changeDisplayBoard: (board: Board) => void;
}

const contextDefaultValues: BoardsContextProps = {
  boardsData: [{name: '', columns: []}],
  currentBoard: {name: '', columns: []},
  changeDisplayBoard: () => {}
}

export const BoardsContext = createContext<BoardsContextProps>(
  contextDefaultValues
);

export function useBoards() {
  return useContext(BoardsContext);
}

// const BoardsContextProvider: FC = ({ children }) => {
//     const [boardsData, setBoardsData] = useState(useState<Board[]>(contextDefaultValues.boardsData))
//     const [currentBoard, setCurrentBoard] = useState<Board>(contextDefaultValues.currentBoard)

//     const changeDisplayBoard = (board: Board) => setCurrentBoard(board)

//     useEffect(() => {
//       if(data){
//         const boards = [data.boards]
//         setBoardsData(boards)
//         setCurrentBoard(data.boards[0])
//       }
//     }, [])
    

//   return (
//     <BoardsContext.Provider
//       value={{
//         boardsData,
//         currentBoard,
//         changeDisplayBoard
//       }}
//     >
//       {children}
//     </BoardsContext.Provider>
//   );
// }

// //export { BoardsContextProvider, BoardsContext };
