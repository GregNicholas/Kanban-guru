import ModalContainer from './ModalContainer'
import Button from './Button'

type DeleteWarningProps = {
  closeModal: (value: React.SetStateAction<boolean>) => void;
  title: string;
  message: string;
}

const DeleteWarning = ({ closeModal, title, message }: DeleteWarningProps) => {
  const confirmDeleteStyle = "bg-red text-white w-[200px]"
  const cancelDeleteStyle = "bg-[#e6e6ff] dark:bg-white text-main-purple w-[200px]"

  return (
    <ModalContainer>
        <div className="w-120 p-8 text-[13px] font-normal bg-white dark:bg-v-dark-gray rounded-lg cursor-default">
        <h3 className="text-red text-lg font-bold mb-6">{title}</h3>
        <p className="mb-6">
          {message}
        </p>
        <div className="flex gap-4">
          <Button text="Delete" customStyle={confirmDeleteStyle} onClick={() => console.log("Delete task confirmed")} />
          <Button text="Cancel" customStyle={cancelDeleteStyle} onClick={closeModal} />
        </div>
        
    </div>
    </ModalContainer>
  )
}

export default DeleteWarning