import { useEffect, useState } from "react";

const StartBackground = () => {
    const [stars, setStars] = useState([])
    useEffect(()=>{
        generateStarts()
    },[])
    const generateStarts = () =>{
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000)
        const newStars = []
        for(let i = 0; i < numberOfStars ; i ++){
            newStars.push({
                id:i,
                size : Math.random() * 3 + 1,
                x : Math.random() * 100,
                y: Math.random() * 100,
                opacity : Math.random() * .5 + .5,
                animationDuration : Math.random() * 4 + 2,
            })
        }

        setStars(newStars)
        
    }
    return(
        <>
        
        </>
    )
}
export default StartBackground;