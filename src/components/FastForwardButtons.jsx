import DisabledSpan from "./DisabledSpan";
export default function FastForwardButtons({
  playSpeed,
  setPlaySpeed,
  skipRef,
  isPlaying,
}) {
  return (
    <>
      {' '}
      <button
        className=" border-black border-r-[1px] relative
              hoverable"
        onClick={() => !isPlaying &&setPlaySpeed('1x')}
      >
        <DisabledSpan  borderRadius={0} isPlaying={isPlaying}/>
        <span
          className="absolute right-0 top-0 h-0
                transition-all overflow-clip
                bg-purple-700"
        ></span>
        <span
          className={`z-10 relative block
              transition-all
                w-full h-full px-[18px] ${playSpeed === '1x' ? 'bg-blue-500' : 'hover:text-white'}`}
        >
          1x
        </span>
      </button>
      <button
        className=" border-black border-r-[1px] 
              relative hoverable"
        onClick={() => !isPlaying && setPlaySpeed('2x')}
      >
        <DisabledSpan  borderRadius={0} isPlaying={isPlaying}/>
        <span
          className="absolute right-0 top-0 w-0 
                transition-all overflow-clip
                 bg-purple-700"
        ></span>
        <span
          className={`z-10 relative block
        transition-all
        w-full h-full px-[18px] ${playSpeed === '2x' ? 'bg-blue-500' : 'hover:text-white'}`}
        >
          2x
        </span>
      </button>
      <button
        className="border-black border-r-[1px]
              relative hoverable"
        onClick={() => !isPlaying && setPlaySpeed('3x')}
      >
        <DisabledSpan  borderRadius={0} isPlaying={isPlaying}/>
        <span
          className="absolute left-0 bottom-0 h-0 
                transition-all overflow-clip
                 bg-purple-700"
        ></span>
        <span
          className={`z-10 relative block
          transition-all
        w-full h-full px-[18px] ${playSpeed === '3x' ? 'bg-blue-500' : 'hover:text-white'}`}
        >
          3x
        </span>
      </button>
      <button
        className="relative hoverable
               border-black border-r-[1px]"
        onClick={() => !isPlaying && setPlaySpeed('4x')}

      >
        <DisabledSpan  borderRadius={0} isPlaying={isPlaying}/>
        <span
          className="absolute left-0 top-0 w-0 
                transition-all overflow-clip
                h-full bg-purple-700"
        ></span>
        <span
          className={`z-10 relative block
                 transition-all
                w-full h-full px-[18px] ${playSpeed === '4x' ? 'bg-blue-500' : 'hover:text-white'}`}
        >
          4x
        </span>
      </button>
      <button
        className="relative"
        onClick={() => {
          if (isPlaying) skipRef.current = true;
        }}
      >
        <span
          className="absolute left-0 top-0 w-full
                transition-all overflow-clip
                h-full"
        ></span>
        <span
          className="z-10 relative block
                 hover:text-white  transition-all
                w-full h-full px-[18px]  hover:bg-purple-700"
        >{`>>`}</span>
      </button>
    </>
  );
}
