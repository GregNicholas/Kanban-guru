import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import BoardArea from './components/BoardArea/BoardArea'
import ShowSidebar from './components/ShowSidebar'
import { RootState } from "./app/store";
import { Board } from './types'
import { useSelector, useDispatch } from 'react-redux'
import { getExistingBoards } from './features/boardsSlice'
import data from './data.json'

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [showSidebar, setShowSidebar] = useState<boolean>(true)
  const [boardsData, setBoardsData] = useState<Board[] | null>(data ? data.boards : null)
  const boardzData = useSelector((state: RootState) => state.boards.value)
  const [displayBoard, setDisplayBoard] = useState<Board>({name: "", columns: []})

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getExistingBoards(data.boards))
  }, [])

console.log("BoardsData from slice ", boardzData)

  return (
    <div className={`flex h-full ${isDarkMode && "dark"}`}>
      <Sidebar 
          boardsData={boardzData} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} 
          showSidebar={showSidebar} setShowSidebar={setShowSidebar} 
          displayBoard={displayBoard} setDisplayBoard={setDisplayBoard}      
      />
      <div className="flex flex-col flex-1 overflow-scroll">
        <Header displayBoard={displayBoard} isDarkMode={isDarkMode} showSidebar={showSidebar} />
        <BoardArea displayBoard={displayBoard}/>
      </div>
      {!showSidebar && <ShowSidebar setShowSidebar={setShowSidebar} />}
    </div>
  )
}

export default App;
