import React from 'react'

type LogoProps = {
    isDarkMode: boolean;
    showSidebar: boolean;
}

const Logo = ({ isDarkMode, showSidebar }:LogoProps) => {
  const logoSource = `${process.env.PUBLIC_URL}/assets/${isDarkMode ? "logo-light.svg" : "logo-dark.svg"}`
  const logoClasses = showSidebar ? "pl-8" : "absolute left-6 top-9"
  return (
        <img className={`h-6 mb-14 ${logoClasses}`} src={logoSource} alt="kanban logo" />
  )
}

export default Logo