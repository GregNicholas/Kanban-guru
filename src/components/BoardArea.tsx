
const BoardArea = () => {

    return (
        <main className="h-full bg-l-gray dark:bg-v-dark-gray">
            <div className="text-center relative top-1/3 font-bold">
                <p className="text-m-gray text-lg pb-8">This board is empty. Create a new column to get started.</p>
                <button className="text-white rounded-3xl bg-main-purple px-4 py-3.5 hover:bg-main-purple-hover focus:bg-red-hover">+ Add New Column</button>
            </div>
        </main>
    )
}

export default BoardArea