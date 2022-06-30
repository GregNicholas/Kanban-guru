import React from 'react'

type Props = {
    children: React.ReactNode;
  };

const ModalContainer = ({ children }:Props) => {
  return (
    <div className="absolute top-0 left-0 p-4 h-fit min-h-full w-full text-xs text-m-gray bg-filter flex items-center justify-center">
        {children}
    </div>
  )
}

export default ModalContainer