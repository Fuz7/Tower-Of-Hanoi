import { useMemo } from 'react';
import colorGenerator from '../utils/colorGenerator';

export default function DiskRods({ diskNumber,startingPoint,endPoint }) {
  const colorsArray = useMemo(() => colorGenerator(diskNumber), [diskNumber]);
  return (
    <>
      {' '}
      <div className={`h-[400px] w-[48px] ${startingPoint==='A'&&'bg-yellow-200'} flex flex-col-reverse 
      ${endPoint === 'A'&&'bg-green-300'} ${startingPoint !=='A' && endPoint !=='A' &&'bg-white'}
      rounded-t-full items-center  justify-start`}>
        {startingPoint === 'A'?(
          <>
          {colorsArray.map((color, index) => (
          <div
            key={color}
            style={{
              width: `${360 - 20 * index}px`,
              backgroundColor: `hsl(${color}, 75%, 50%)`,

            }}
            className={`h-[27px] rounded-full  `}
          ></div>
        ))}</>
        ):null}
        
      </div>
      <div className={`h-[400px] w-[48px] ${startingPoint==='B'&&'bg-yellow-200'} flex flex-col-reverse 
      ${endPoint === 'B'&&'bg-green-300'} ${startingPoint !=='B' && endPoint !=='B' &&'bg-white'}
      rounded-t-full items-center  justify-start`}>
      {startingPoint === 'B'?(
          <>
          {colorsArray.map((color, index) => (
          <div
            key={color}
            style={{
              width: `${360 - 20 * index}px`,
              backgroundColor: `hsl(${color}, 75%, 50%)`,

            }}
            className={`h-[27px] rounded-full  `}
          ></div>
        ))}</>
        ):null}
      </div>
      <div className={`h-[400px] w-[48px] ${startingPoint==='C'&&'bg-yellow-200'} flex flex-col-reverse 
      ${endPoint === 'C'&&'bg-green-300'} ${startingPoint !=='C' && endPoint !=='C' &&'bg-white'}
      rounded-t-full items-center  justify-start`}>
      {startingPoint === 'C'?(
          <>
          {colorsArray.map((color, index) => (
          <div
            key={color}
            style={{
              width: `${360 - 20 * index}px`,
              backgroundColor: `hsl(${color}, 75%, 50%)`,

            }}
            className={`h-[27px] rounded-full  `}
          ></div>
        ))}</>
        ):null}
      </div>
    </>
  );
}
