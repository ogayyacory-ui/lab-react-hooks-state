import React from 'react'

const DarkModeToggle = ({ isDarkMode, setIsDarkMode }) => {
  // TODO: Implement dark mode toggle logic
  const handleToggle = () => setIsDarkMode(!isDarkMode);

  return (
    <button onClick={handleToggle}>
      Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle
