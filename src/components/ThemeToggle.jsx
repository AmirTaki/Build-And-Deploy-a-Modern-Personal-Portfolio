import { Moon, Sun } from "lucide-react"
import { useState } from "react"


export const ThemeToggle = () =>{
    const[isDarkMode, setIsDarkMode] = useState(false)
    const toggleTheme = () => {
    //   setIsDarkMode(isDarkMode ? false : true)
    if(isDarkMode){
        setIsDarkMode(false)
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")

    } 
    else {
        setIsDarkMode(true)
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")

    }
    }
    return(
        <>
          <button onClick={toggleTheme}>
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" /> ):( 
                <Moon className="h-6 w-6 text-blue-900"/>
            )}
          </button>
        </>
    )
}