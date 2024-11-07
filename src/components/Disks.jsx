import { useEffect,  } from "react"


export default function Disks({colorsArray,movesArray,isPlaying,scope,animate,setIsPlaying,playSpeed,skipRef}){
  function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  }
  console.log(movesArray)
  useEffect(() => {
  const speedArray = {'1x':0.5,'2x':0.25,'3x':0.125,'4x':0.05}
  const playingSpeed = speedArray[playSpeed]
  const rodValue = {A:1,B:2,C:3}
  
  if(isPlaying) {
    const animatePlaying = async(counter) => {
      if(counter === 0) {
        const disksElements = Array.from(scope.current.children)
        const repositionElements = async () => {
          for (const disk of disksElements) {
            animate(disk, { x: 0 }); // Waits for this animation to finish
            disk.setAttribute('data-rod', movesArray[0].startingRod);
          }
          await delay(1000)
        };
        await repositionElements();
      } 

      if(skipRef.current === true) {
        const disksElements = Array.from(scope.current.children)
        const startingRodValue = rodValue[movesArray[0].startingRod]
        const endRodValue =  rodValue[movesArray[movesArray.length -1].endRod]
        const xValueCalculation = ((endRodValue - startingRodValue) * 450)
        const xValueCalculationWithSign = xValueCalculation >= 0 
          ? xValueCalculation + ((endRodValue - startingRodValue) * 48)
          : xValueCalculation + ((endRodValue - startingRodValue) * 48);
        const finishElements = async () => {
          for (const disk of disksElements) {
            animate(disk, { x: xValueCalculationWithSign , y:0 },); 
          }
        };
        await finishElements();
        setIsPlaying(false);
        skipRef.current = false;
        animatePlaying(movesArray.length);
        return; // Added return to prevent continuing with animation
      }

      if(counter !== movesArray.length) {
        const currentElementIndex = movesArray[counter].disk
        const currentElementStartingRod = movesArray[counter].startingRod
        const currentElementEndRod = movesArray[counter].endRod
        const currentElement = scope.current.querySelector(`[data-index="${currentElementIndex}"]`)
        const rodStartDiskNumber = scope.current.querySelectorAll(`[data-rod="${currentElementStartingRod}"]`).length
        const rodEndDiskNumber = scope.current.querySelectorAll(`[data-rod="${currentElementEndRod}"]`).length
        
        let style = window.getComputedStyle(currentElement)
        // eslint-disable-next-line no-undef
        let matrix = new WebKitCSSMatrix(style.transform)
        let currentElementYValue = matrix.m42
        
        await animate(currentElement, {
          y: currentElementYValue + (-460 + (rodStartDiskNumber * 27))
        }, {
          duration: playingSpeed
        })
        
        let style2 = window.getComputedStyle(currentElement)
        // eslint-disable-next-line no-undef
        let matrix2 = new WebKitCSSMatrix(style2.transform)
        let currentElementXValue = matrix2.m41
        const startingRodValue = rodValue[currentElementStartingRod]
        const endRodValue = rodValue[currentElementEndRod]
        const xValueCalculation = ((endRodValue - startingRodValue) * 450)
        const xValueCalculationWithSign = xValueCalculation >= 0 
          ? xValueCalculation + ((endRodValue - startingRodValue) * 48)
          : xValueCalculation + ((endRodValue - startingRodValue) * 48);
        const xValueWithPreviousTransformValue = xValueCalculationWithSign + currentElementXValue
        
        await animate(currentElement, {
          x: (xValueWithPreviousTransformValue)
        }, {
          duration: playingSpeed
        })
        
        const yValueCalculation = (-rodEndDiskNumber * 27) + (colorsArray.length - (currentElementIndex)) * 27
        await animate(currentElement, {
          y: 0 + yValueCalculation
        }, {
          duration: playingSpeed
        })
        
        currentElement.setAttribute(`data-rod`, currentElementEndRod)
        console.log("y:" + matrix.m42)
        console.log("x:" + matrix.m41)
        animatePlaying(counter + 1)
      } else {
        setIsPlaying(false)
      }
    }
    
    animatePlaying(0)
  }
}, [isPlaying, animate, scope, playSpeed, setIsPlaying])
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