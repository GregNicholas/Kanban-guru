import React from 'react'

type ButtonProps = {
    type?: "button" | "submit";
    text: string;
    onClick?: (e: any) => void;
    primary?: boolean;
    customStyle?: string | boolean;
    widthFull?: boolean;
}

const Button = ({ type="button", text, onClick, primary=true, customStyle=false, widthFull=true }:ButtonProps) => {
  const color = customStyle ? customStyle
                        : primary ? "text-white bg-main-purple hover:bg-main-purple-hover active:bg-white active:border active:text-main-purple"
                        : "text-main-purple bg-main-purple-hover dark:bg-white"
  const width = widthFull ? "w-full" : null
  return (
    <button type={type} className={`${color} ${width} font-bold rounded-3xl px-4 py-3 min-w-[162px]`}
      onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Button