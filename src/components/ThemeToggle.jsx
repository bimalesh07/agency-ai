import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggle = ({theme, settheme}) => {
console.log("Theme:", theme, "Showing:", theme === "dark" ? "Sun" : "Moon");


useEffect(() => {

  if(theme === 'dark'){
    document.documentElement.classList.add('dark')

  }else{
     document.documentElement.classList.remove("dark");
    
  }
  localStorage.setItem('theme',theme)

 
}, [theme])


  return (
    <>
    <button>
        {theme ==='dark' ? (
        <img onClick={()=>settheme('light')} src={assets.sun_icon} className='w-8 h-8 p-1.5 border border-gray-500 rounded-md inline-block'></img>

        ):(
        <img onClick={()=>settheme('dark')} src={assets.moon_icon} className='w-8 h-8 p-1.5 border border-gray-500 rounded-md inline-block'></img>
        
        )}
    </button>
    
    </>
  )
}

export default ThemeToggle