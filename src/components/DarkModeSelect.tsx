import React from 'react'

type DarkMode = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeSelect = ({ isDarkMode, setIsDarkMode }:DarkMode) => {
    const darkClass = 'transform translate-x-4';

  return (
    <div className="absolute flex justify-between items-center px-10 bottom-24 left-2/4 -translate-x-1/2 w-60 h-12 rounded-md bg-l-gray dark:bg-v-dark-gray">
        <img className="h-5 inline cursor-pointer" src={`${process.env.PUBLIC_URL}/assets/icon-light-theme.svg`} 
             onClick={() => setIsDarkMode(prev => !prev)}
             alt="light toggle" 
        />
        <div className="inline-flex p-x-12 w-10 h-5  items-center bg-main-purple rounded-full p-1 cursor-pointer"
            onClick={() => setIsDarkMode(prev => !prev)}
        >
            <div className =  
                {`bg-white h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out ${isDarkMode ? darkClass : null}`} 
            >
            </div>
        </div>
        <img className="h-5 inline cursor-pointer" src={`${process.env.PUBLIC_URL}/assets/icon-dark-theme.svg`} 
             onClick={() => setIsDarkMode(prev => !prev)}
             alt="dark toggle" 
        />
    </div>
  )
}

export default DarkModeSelect