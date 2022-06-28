import React from 'react'

type ButtonProps = {
    text: string;
    onClick?: (e: any) => void;
}

const Button = ({ text, onClick }:ButtonProps) => {
  return (
    <button className="text-white rounded-3xl bg-main-purple px-4 py-3 min-w-[162px] hover:bg-main-purple-hover active:bg-white active:border active:text-main-purple"
      onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Button