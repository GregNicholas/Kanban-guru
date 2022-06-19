import { useState } from 'react'
import SelectBoard from './SelectBoard'
import DarkModeSelect from './DarkModeSelect'

type DarkMode = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar = ({ isDarkMode, setIsDarkMode }:DarkMode) => {
    const [showSidebar, setShowSidebar] = useState(true)

    return (
        <div className={`${!showSidebar && "hidden"} flex flex-col justify-between md:w-[261px] lg:w-[300px] h-screen border-r border-l-lines pt-8 dark:bg-d-gray dark:border-d-lines`}>
            <div>
                <div><img className="h-6 mb-14 pl-8" src={`${process.env.PUBLIC_URL}/assets/${isDarkMode ? "logo-light.svg" : "logo-dark.svg"}`} alt="kanban logo" /></div>
                <SelectBoard />
            </div>
            <div className="mb-11">
                <DarkModeSelect isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                <div 
                    className="py-3.5 ml-6 text-m-gray font-bold cursor-pointer"
                    onClick={() => setShowSidebar(prev => !prev)}
                >
                    <img className="h-5 mr-4 inline cursor-pointer" src={`${process.env.PUBLIC_URL}/assets/icon-hide-sidebar.svg`} 
                            alt="hide sidebar" 
                    />
                    Hide Sidebar
                </div>
            </div>
        </div>
    )
}
export default Sidebar