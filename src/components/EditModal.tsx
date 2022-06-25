type EditModalProps = {
    editText: string;
    deleteText: string;
}

const EditModal = ({ editText, deleteText }:EditModalProps) => {
  return (
    <div className="flex flex-col justify-between w-48 h-24 p-4 absolute top-20 right-6 text-[13px] bg-white dark:bg-v-dark-gray rounded-lg">
        <p 
          className="text-m-gray cursor-pointer leading-6"
          onClick={() => console.log("EDIT BOARD")}
        >
          {editText}
        </p>
        <p 
          className="text-red cursor-pointer leading-6"
          onClick={() => console.log("DELETE BOARD")}
        >
          {deleteText}
        </p>
    </div>
  )
}

export default EditModal