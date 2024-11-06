import { useEffect, useRef } from "react"


export default function Disks({colorsArray,movesArray,isPlaying,scope,animate}){
  
  console.log(movesArray)
  useEffect(()=>{
    if(isPlaying){
      const animatePlaying = async(counter)=>{

        const a = scope.current.querySelector('[data-index="1"]')
        const b = scope.current.querySelector('[data-index="2"]')
        const c = scope.current.querySelector('[data-index="3"]')

        await animate(a,{x:450 + 48,},)
        await animate(b,{x:450+48},{duration:0.5})
        await animate(c,{x:450+48},{duration:0.5})

        let style = window.getComputedStyle(a)
        let matrix = new WebKitCSSMatrix(style.transform)
        console.log("y:" + matrix.m42)
        console.log("x:" + matrix.m41)
      }
      animatePlaying(1)
    }
  },[isPlaying,animate,scope])

  return(
    <>
    {colorsArray.map((color, index) => (
          <div
            key={color}
            style={{
              width: `${360 - 20 * index}px`,
              backgroundColor: `hsl(${color}, 75%, 50%)`,

            }}
            className={`h-[27px] rounded-full  `}
            data-index = {colorsArray.length - index}
            data-rod = {movesArray[0].startingRod}
          ></div>
        ))}
    </>
  )
}