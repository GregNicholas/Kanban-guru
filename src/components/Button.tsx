import React from 'react'

type ButtonProps = {
    type?: "button" | "submit";
    text: string;
    onClick: (e: any) => void;
    primary?: boolean;
}

const Button = ({ type="button", text, onClick, primary=true }:ButtonProps) => {
  const color = primary ? "text-white bg-main-purple hover:bg-main-purple-hover active:bg-white active:border active:text-main-purple"
                        : "text-main-purple bg-main-purple-hover dark:bg-white"
  return (
    <button type={type} className={`${color} font-bold rounded-3xl px-4 py-3 min-w-[162px]`}
      onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Button