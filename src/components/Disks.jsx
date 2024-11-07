import { useEffect, useRef } from "react"


export default function Disks({colorsArray,movesArray,isPlaying,scope,animate,setIsPlaying}){
  
  console.log(movesArray)
  useEffect(()=>{
    const rodValue = {A:1,B:2,C:3}
    if(isPlaying){
      const animatePlaying = async(counter)=>{
        if(counter === 0){}
        if(counter !==movesArray.length){
          const currentElementIndex = movesArray[counter].disk
          const currentElementStartingRod = movesArray[counter].startingRod
          const currentElementEndRod = movesArray[counter].endRod
          const currentElement = scope.current.querySelector(`[data-index="${currentElementIndex}"]`)
          const rodStartDiskNumber = scope.current.querySelectorAll(`[data-rod="${currentElementStartingRod}"]`).length
          const rodEndDiskNumber = scope.current.querySelectorAll(`[data-rod="${currentElementEndRod}"]`).length
          let style = window.getComputedStyle(currentElement)
          let matrix = new WebKitCSSMatrix(style.transform)
          let currentElementYValue = matrix.m42
          await animate(currentElement,{y: currentElementYValue +(-460 + (rodStartDiskNumber * 27)),},{duration:0.5})
          let style2 = window.getComputedStyle(currentElement)

          let matrix2 = new WebKitCSSMatrix(style2.transform)
          let currentElementXValue = matrix2.m41
          const startingRodValue = rodValue[currentElementStartingRod]
          const endRodValue =  rodValue[currentElementEndRod]
          const xValueCalculation = ((endRodValue - startingRodValue) * 450)
          const xValueCalculationWithSign = xValueCalculation >= 0? xValueCalculation +((endRodValue- startingRodValue) * 48): xValueCalculation + ((endRodValue- startingRodValue) * 48);
          const xValueWithPreviousTransformValue = xValueCalculationWithSign + currentElementXValue
          await animate(currentElement,{x:(xValueWithPreviousTransformValue),},{duration:0.5})
          const yValueCalculation = (-rodEndDiskNumber * 27) + (colorsArray.length - (currentElementIndex)) * 27
          await animate(currentElement,{y: 0  + yValueCalculation,},{duration:0.5})
          currentElement.setAttribute(`data-rod`,currentElementEndRod)
          console.log("y:" + matrix.m42)
          console.log("x:" + matrix.m41)
          animatePlaying(counter + 1)
     
        }
        setIsPlaying(false)


      }
      animatePlaying(0)
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