import SelectBoard from './SelectBoard'
import DarkModeSelect from './DarkModeSelect'
import Logo from '../Logo'

type SidebarProps = {
    isDarkMode: boolean
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    showSidebar: boolean
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
    isMobile?: boolean
}

const Sidebar = (
    { 
        isDarkMode, 
        setIsDarkMode, 
        showSidebar, 
        setShowSidebar, 
        isMobile=false
    }:SidebarProps) => {
        const mobileClass = !isMobile ? "hidden sm:flex sm:flex-col lg:w-[300px] h-screen pt-8" 
                : "absolute flex flex-col sm:hidden top-20 left-1/2 translate-x-[-50%] z-10 bg-white rounded-lg pt-4"

        return (
            <div className={`${!showSidebar && "sm:hidden"} ${mobileClass} w-[261px] justify-between border-r border-l-lines dark:bg-d-gray dark:border-d-lines`}>
                <div>
                    <Logo isDarkMode={isDarkMode} showSidebar={showSidebar} />
                    <SelectBoard />
                </div>
                <div className={`${isMobile ? "mb-0" : "mb-11"}`}>
                    <DarkModeSelect isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                    { !isMobile && <div
                        className="py-3.5 pl-8 mr-6 text-m-gray font-bold cursor-pointer transition duration-300 rounded-r-3xl hover:text-main-purple hover:fill-main-purple hover:bg-main-purple hover:bg-opacity-10 dark:hover:bg-white"
                        onClick={() => setShowSidebar(prev => !prev)}
                    >
                        <img className="h-5 mr-4 inline cursor-pointer" src={`${process.env.PUBLIC_URL}/assets/icon-hide-sidebar.svg`}
                            alt="hide sidebar" />
                        Hide Sidebar
                    </div>}
                </div>
            </div>
        )
    }
    
    
export default Sidebar