import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggle = ({theme, settheme}) => {

useEffect(() => {
  if(theme ==='dark'){
    document.documentElement.classList.add('dark')
  }else{
     document.documentElement.classList.add("dark");
    
  }
  localStorage.setItem('them',theme)

 
}, [theme])


  return (
    <>
    <button>
        {theme =='dark' ? (
            <img onClick={()=>settheme('light')} src={assets.sun_icon} className='size-8.5 p-1.5 borde border-gray-500'></img>
        ):(
            <img onClick={()=>settheme('dark')} src={assets.moon_icon} className='size-8.5 p-1.5 borde border-gray-500'></img>
        )}
    </button>
    
    </>
  )
}

export default ThemeToggle