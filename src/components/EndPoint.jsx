import DisabledSpan from "./DisabledSpan";



export default function EndPoint({startingPoint,endPoint,setEndPoint,isPlaying}) {
  return (
    <p className="font-Pixelify-Regular text-[48px] relative w-fit ">
      End Point:
      <button
        className={`absolute w-[54px] h-[54px] bg-white
                flex flex-col 
                justify-start
              items-center transition-all duration-300 overflow-clip ease-out
              right-[-76px] top-[10px]  rounded-[100px] text-center text-[36px]
              ${!isPlaying && ' hover:h-[219px] hover:rounded-[9px]'}
              shadow-[0_4px_4px_0px_rgba(0,0,0,0.6)]`}
      >
        <DisabledSpan borderRadius={9} isPlaying={isPlaying} />
        {endPoint}
        <span
          className={`block border-t-[1px] w-full border-black 
                relative ${startingPoint==='A'?'bg-yellow-300':''}
                ${startingPoint !=='A'&& endPoint !== 'A'?'hoverable':''}
                ${endPoint === 'A'?'bg-green-400':''}
                `
              }
              onClick={()=>{
                startingPoint !=='A' && endPoint!=='A'?setEndPoint('A'):null
              }}
        >
          <span
            className="absolute right-0 top-0 h-0
                transition-all overflow-clip
                bg-purple-700"
          ></span>
          <span
            className={`z-10 relative block
                 ${startingPoint==='A' || endPoint ==='A'?'': 'hover:text-white'}  transition-all
                w-full h-full `}
          >
            A
          </span>
        </span>
        <span
          className={`block border-t-[1px] w-full border-black 
            relative ${startingPoint==='B'?'bg-yellow-300':''}
            ${startingPoint !=='B'&& endPoint !== 'B'?'hoverable':''}
            ${endPoint === 'B'?'bg-green-400':''}
            `
          }
          onClick={()=>{
            startingPoint !=='B'&& endPoint!=='B'?setEndPoint('B'):null
          }}
        >
          <span
            className="absolute right-0 top-0 w-0
                transition-all overflow-clip
                bg-purple-700"
          ></span>
          <span
            className={`z-10 relative block
              ${startingPoint==='B' || endPoint ==='B'?'': 'hover:text-white'}  transition-all
             w-full h-full `}
          >
            B
          </span>
        </span>
        <span
          className={`block border-t-[1px] w-full border-black 
            relative ${startingPoint==='C'?'bg-yellow-300':''}
            ${startingPoint !=='C'&& endPoint !== 'C'?'hoverable':''}
            ${endPoint === 'C'?'bg-green-400':''}
            `
          }
          onClick={()=>{
            startingPoint !=='C'&& endPoint!=='C'?setEndPoint('C'):null
          }}
        >
          <span
            className="absolute left-0 top-0 w-0
                transition-all overflow-clip
                bg-purple-700"
          ></span>
          <span
            className={`z-10 relative block
              ${startingPoint==='A' || endPoint ==='A'?'': 'hover:text-white'}  transition-all
             w-full h-full `}
          >
            C
          </span>
        </span>
      </button>
    </p>
  );
}
