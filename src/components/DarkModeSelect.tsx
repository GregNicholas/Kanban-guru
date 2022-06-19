import React from 'react'
import Toggle from './Toggle'

type DarkMode = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeSelect = ({ isDarkMode, setIsDarkMode }:DarkMode) => {

  return (
    <div className="absolute flex justify-between items-center mb-6 px-10 bottom-24 left-2/4 -translate-x-1/2 w-60 h-12 rounded-md bg-l-gray dark:bg-v-dark-gray">
        <img className="h-5 inline cursor-pointer" src={`${process.env.PUBLIC_URL}/assets/icon-light-theme.svg`} 
             onClick={() => setIsDarkMode(prev => !prev)}
             alt="light toggle" 
        />
        <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <img className="h-5 inline cursor-pointer" src={`${process.env.PUBLIC_URL}/assets/icon-dark-theme.svg`} 
             onClick={() => setIsDarkMode(prev => !prev)}
             alt="dark toggle" 
        />
    </div>
  )
}

export default DarkModeSelect