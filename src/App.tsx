import React from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import BoardArea from './components/BoardArea'

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <BoardArea />
      </div>
    </div>
  )
}

export default App;
