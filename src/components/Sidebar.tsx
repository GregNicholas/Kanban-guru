import SelectBoard from './SelectBoard'
import DarkModeSelect from './DarkModeSelect'

type DarkMode = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar = ({ isDarkMode, setIsDarkMode }:DarkMode) => {

    return (
        <div className="relative md:w-[261px] lg:w-[300px] h-screen border-r border-l-lines pt-8 dark:bg-d-gray dark:border-d-lines">
            <div><img className="h-6 mb-14 pl-8" src={`${process.env.PUBLIC_URL}/assets/${isDarkMode ? "logo-light.svg" : "logo-dark.svg"}`} alt="kanban logo" /></div>
            <SelectBoard />
            <div></div>
            <DarkModeSelect isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <div 
                className="py-3.5 pl-8text-m-gray font-bold"
                onClick={() => console.log("hide sidebar clicked")}
            >
                <img className="h-5  inline cursor-pointer" src={`${process.env.PUBLIC_URL}/assets/icon-hide-sidebar.svg`} 
                        alt="hide sidebar" 
                />
                Hide Sidebar
            </div>
            <div></div>
        </div>
    )
}
export default Sidebar