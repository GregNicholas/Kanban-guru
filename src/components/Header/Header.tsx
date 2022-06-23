import Button from '../Button'
import Logo from '../Logo'

type HeaderProps = {
    boardName: string;
    isDarkMode: boolean;
    showSidebar: boolean;
}

const Header = ({ boardName, isDarkMode, showSidebar }:HeaderProps) => {
    const addTask = () => {
        console.log("add task to current board")
    }
    const nameClasses = !showSidebar ? "ml-44" : "ml-0"
    return (
        <header className="w-full h-24 pl-6 pr-8 flex items-center justify-between border-b border-l-lines bg-white dark:bg-d-gray dark:border-d-lines">
            {!showSidebar && <Logo isDarkMode={isDarkMode} showSidebar={showSidebar} /> }
            <div className={`flex items-center h-full ${nameClasses}`}>
                {!showSidebar && <div className="w-px h-full mr-8 border-l border-l-lines dark:border-d-lines"></div>}
                <h2 className={`font-bold font-sans text-black dark:text-white text-center text-2xl`}>{boardName}</h2>
            </div>
            <div>
                    <Button text=" + Add New Task " onClick={addTask} />
                    <img className="h-5 ml-6 inline cursor-pointer" src={`${process.env.PUBLIC_URL}/assets/icon-vertical-ellipsis.svg`} 
                        onClick={() => console.log("elipse clicked")}
                        alt="board options" 
                    />
            </div>
            
        </header>
    )
}

export default Header