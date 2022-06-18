import SelectBoard from './SelectBoard'
import DarkModeSelect from './DarkModeSelect'

type DarkMode = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar = ({ isDarkMode, setIsDarkMode }:DarkMode) => {

    return (
        <div className="relative w-72 h-screen border-r border-l-lines pt-8 dark:bg-d-gray dark:border-d-lines">
            <div><img className="h-6 mb-14 pl-8" src={`${process.env.PUBLIC_URL}/assets/${isDarkMode ? "logo-light.svg" : "logo-dark.svg"}`} alt="kanban logo" /></div>
            <SelectBoard />
            <DarkModeSelect isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>
    )
}
export default Sidebar