import { useMemo } from 'react';
import colorGenerator from '../utils/colorGenerator';
import towerOfHanoi from '../utils/towerOfHanoi'; 
import Disks from './Disks';
import { useAnimate } from 'framer-motion';


export default function DiskRods({ diskNumber,startingPoint,endPoint, isPlaying }) {
  const colorsArray = useMemo(() => colorGenerator(diskNumber), [diskNumber]);
  const [scope,animate] = useAnimate()
  const rods = ['A','B','C']
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const otherRod = useMemo(()=>rods.filter((currentRod) => currentRod != startingPoint && currentRod != endPoint)[0],[startingPoint,endPoint])

  const movesArray = towerOfHanoi(diskNumber,startingPoint,endPoint,otherRod)
  return (
    <>
      {' '}
      <div className={`h-[400px] w-[48px] ${startingPoint==='A'&&'bg-yellow-200'} 
      ${endPoint === 'A'&&'bg-green-300'} ${startingPoint !=='A' && endPoint !=='A' &&'bg-white'}
      rounded-t-full `}      >
        {startingPoint === 'A'?
        (
          <div className='h-full w-full flex flex-col-reverse items-center  justify-start'
          ref={scope}>
            <Disks colorsArray={colorsArray} movesArray={movesArray} isPlaying={isPlaying} scope={scope} animate={animate}/>
          </div>
        ):null}
        
      </div>
      <div className={`h-[400px] w-[48px] ${startingPoint==='B'&&'bg-yellow-200'} 
      ${endPoint === 'B'&&'bg-green-300'} ${startingPoint !=='B' && endPoint !=='B' &&'bg-white'}
      rounded-t-full `}
      >
      {startingPoint === 'B'?(
          <div className='h-full w-full flex flex-col-reverse items-center  justify-start'
          ref={scope}>
            <Disks colorsArray={colorsArray} movesArray={movesArray} isPlaying={isPlaying} scope={scope} animate={animate}/>
          </div>
        ):null}
      </div>
      <div className={`h-[400px] w-[48px] ${startingPoint==='C'&&'bg-yellow-200'} 
      ${endPoint === 'C'&&'bg-green-300'} ${startingPoint !=='C' && endPoint !=='C' &&'bg-white'}
      rounded-t-full `}
      >
      {startingPoint === 'C'?(
          <div className='h-full w-full flex flex-col-reverse items-center  justify-start'
          ref={scope}>
          <Disks colorsArray={colorsArray} movesArray={movesArray} isPlaying={isPlaying} scope={scope} animate={animate}/>
          </div>
        ):null}
      </div>
    </>
  );
}
