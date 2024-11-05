export default function FastForwardButtons() {
  return (
    <>
      {' '}
      <button
        className=" border-black border-r-[1px] relative
              hoverable"
      >
        <span
          className="absolute right-0 top-0 h-0
                transition-all overflow-clip
                bg-purple-700"
        ></span>
        <span
          className="z-10 relative block
                 hover:text-white  transition-all
                w-full h-full px-[18px]"
        >
          1x
        </span>
      </button>
      <button
        className=" border-black border-r-[1px] 
              relative hoverable"
      >
        <span
          className="absolute right-0 top-0 w-0 
                transition-all overflow-clip
                 bg-purple-700"
        ></span>
        <span
          className="z-10 relative block
                 hover:text-white  transition-all
                w-full h-full px-[18px]"
        >
          2x
        </span>
      </button>
      <button
        className="border-black border-r-[1px]
              relative hoverable"
      >
        <span
          className="absolute left-0 bottom-0 h-0 
                transition-all overflow-clip
                 bg-purple-700"
        ></span>
        <span
          className="z-10 relative block
                 hover:text-white  transition-all
                w-full h-full px-[18px]"
        >
          3x
        </span>
      </button>
      <button
        className="relative hoverable
               border-black border-r-[1px]"
      >
        <span
          className="absolute left-0 top-0 w-0 
                transition-all overflow-clip
                h-full bg-purple-700"
        ></span>
        <span
          className="z-10 relative block
                 hover:text-white  transition-all
                w-full h-full px-[18px]"
        >
          4x
        </span>
      </button>
    </>
  );
}
