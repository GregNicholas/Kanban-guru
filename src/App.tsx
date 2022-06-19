import React, { useState } from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import BoardArea from './components/BoardArea'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div className={`flex ${isDarkMode && "dark"}`}>
      <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="flex flex-col flex-1">
        <Header />
        <BoardArea />
      </div>
    </div>
  )
}

export default App;
