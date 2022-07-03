import React from 'react'

type Props = {
    children: React.ReactNode;
  };

const FormLabel = ({ children }:Props) => {
  return (
    <label className="flex flex-col gap-1 text-[13px] mb-2 leading-6 text-m-gray font-bold dark:text-white">
        {children}
    </label>
  )
}

export default FormLabel