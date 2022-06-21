import React, { useState } from 'react';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import BoardArea from './components/BoardArea/BoardArea'
import ShowSidebar from './components/ShowSidebar'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)
  return (
    <div className={`flex h-full ${isDarkMode && "dark"}`}>
      <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="flex flex-col flex-1">
        <Header isDarkMode={isDarkMode} showSidebar={showSidebar} />
        <BoardArea />
      </div>
      {!showSidebar && <ShowSidebar setShowSidebar={setShowSidebar} />}
    </div>
  )
}

export default App;
