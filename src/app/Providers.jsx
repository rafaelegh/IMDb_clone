"use client"
import { ThemeProvider } from 'next-themes'

function Providers({children}) {
  return (
    <ThemeProvider enableSystem attribute='class'>
        <div className='dark:bg-gray-700 dark:text-gray-200 text-grey-700 transition-colors duration-300 min-h-screen select-none'>
            {children}
        </div>
    </ThemeProvider>
  )
}

export default Providers