import SelectBoard from './SelectBoard'
import DarkModeSelect from './DarkModeSelect'
import Logo from '../Logo'

type SidebarProps = {
    isDarkMode: boolean
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    showSidebar: boolean
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = (
    { 
        isDarkMode, 
        setIsDarkMode, 
        showSidebar, 
        setShowSidebar, 
    }:SidebarProps) => {
        return (
            <div className={`hidden md:flex md:flex-col ${!showSidebar && "md:hidden"} justify-between md:w-[261px] lg:w-[300px] h-screen border-r border-l-lines pt-8 dark:bg-d-gray dark:border-d-lines`}>
                <div>
                    <Logo isDarkMode={isDarkMode} showSidebar={showSidebar} />
                    <SelectBoard />
                </div>
                <div className="mb-11">
                    <DarkModeSelect isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                    <div
                        className="py-3.5 pl-8 mr-6 text-m-gray font-bold cursor-pointer transition duration-300 rounded-r-3xl hover:text-main-purple hover:fill-main-purple hover:bg-main-purple hover:bg-opacity-10 dark:hover:bg-white"
                        onClick={() => setShowSidebar(prev => !prev)}
                    >
                        <img className="h-5 mr-4 inline cursor-pointer" src={`${process.env.PUBLIC_URL}/assets/icon-hide-sidebar.svg`}
                            alt="hide sidebar" />
                        Hide Sidebar
                    </div>
                </div>
            </div>
        )
    }
    
    
export default Sidebar