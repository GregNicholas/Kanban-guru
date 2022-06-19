import Button from './Button'

const Header = () => {
    const addTask = () => {
        console.log("add task to current board")
    }

    return (
        <header className="w-full h-24 pl-6 pr-8 flex items-center justify-between border-b border-l-lines bg-white dark:bg-d-gray dark:border-d-lines">
            <h2 className="font-bold font-sans text-black dark:text-white text-center text-2xl">Board Name</h2>
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