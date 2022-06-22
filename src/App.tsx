import React, { useState } from 'react';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import BoardArea from './components/BoardArea/BoardArea'
import ShowSidebar from './components/ShowSidebar'
import { Board } from './types'
import data from './data.json'

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [showSidebar, setShowSidebar] = useState<boolean>(true)
  const [boardsData, setBoardsData] = useState<Board[] | null>(data ? data.boards : null)
  const [displayBoard, setDisplayBoard] = useState<Board>(boardsData ? boardsData[0] : {name: "", columns: []})

  return (
    <div className={`flex h-full ${isDarkMode && "dark"}`}>
      <Sidebar 
          boardsData={boardsData} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} 
          showSidebar={showSidebar} setShowSidebar={setShowSidebar} 
          displayBoard={displayBoard} setDisplayBoard={setDisplayBoard}      
      />
      <div className="flex flex-col flex-1">
        <Header isDarkMode={isDarkMode} showSidebar={showSidebar} />
        <BoardArea displayBoard={displayBoard}/>
      </div>
      {!showSidebar && <ShowSidebar setShowSidebar={setShowSidebar} />}
    </div>
  )
}

export default App;
