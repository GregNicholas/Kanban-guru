import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import BoardArea from './components/BoardArea/BoardArea'
import ShowSidebar from './components/ShowSidebar'
import { Board } from './types'
import { RootState } from "./app/store";
import { useSelector, useDispatch } from 'react-redux'
import { getExistingBoards } from './features/boardsSlice'
import data from './data.json'

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [showSidebar, setShowSidebar] = useState<boolean>(true)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getExistingBoards(data.boards))
  }, [])

  return (
    <div className={`flex h-full ${isDarkMode && "dark"}`}>
      <Sidebar 
          isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} 
          showSidebar={showSidebar} setShowSidebar={setShowSidebar} 
      />
      <div className="flex flex-col flex-1 overflow-scroll">
        <Header isDarkMode={isDarkMode} showSidebar={showSidebar} />
        <BoardArea />
      </div>
      {!showSidebar && <ShowSidebar setShowSidebar={setShowSidebar} />}
    </div>
  )
}

export default App;
