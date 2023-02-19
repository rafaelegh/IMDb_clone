"use client"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  
  useEffect(() => {
    setMounted(true)
  }, []);

  if(!mounted) return null;

  return (
    <>
      {currentTheme === "dark" ? 
        <div 
          data-testid="light-mode-button"
          onClick={() => setTheme("light")}
        >
          <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' />
        </div> :
        <div
          onClick={() => setTheme("dark")}
          data-testid="dark-mode-button" 
        >
          <MdDarkMode className='text-xl cursor-pointer hover:text-amber-500' />
        </div> 
      }
    </>
  )
}

export default DarkModeSwitch