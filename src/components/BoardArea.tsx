import Button from './Button'

const BoardArea = () => {
    const addColumn = () => {
        console.log("Add a new column")
    }

    return (
        <main className="h-full bg-l-gray dark:bg-v-dark-gray">
            <div className="text-center relative top-1/3 font-bold">
                <p className="text-m-gray text-lg pb-8">This board is empty. Create a new column to get started.</p>
                <Button text="+ Add New Column" onClick={addColumn} />
            </div>
        </main>
    )
}

export default BoardArea