import { useState } from 'react';

function App() {
  const [diskNumber, setDiskNumber] = useState(3);

  const handleDiskInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue >= 1 && newValue <= 14) {
      setDiskNumber(newValue);
    } else if (e.target.value === '') {
      setDiskNumber('');
    }
  };
  return (
    <div
      className="max-w-[100vw] h-[100vh] 
      flex justify-center"
    >
      <div
        className="w-[100%] max-w-[1440px] h-[100vh]
      flex flex-col relative"
      >
        <h1
          className="font-Pixelify-Medium text-[96px] mt-[20px]
          self-center
          shadow-[inset_0px_-4px_0px_rgba(0,0,0,0.6)]
         bg-white px-[36px] rounded-3xl"
        >
          Tower Of Hanoi
        </h1>
        <section className="flex justify-between mt-[40px]">
          <div className="flex flex-col">
            <p className="font-Pixelify-Regular text-[48px] relative w-fit">
              Start Point:
              <button
                className="absolute w-[54px] h-[54px] bg-white
                flex flex-col 
                justify-start
              items-center transition-all duration-300 overflow-clip ease-out
              right-[-76px] top-[10px]  rounded-[100px] text-center text-[36px]
              hover:h-[219px] hover:rounded-[9px]
              shadow-[0_4px_4px_0px_rgba(0,0,0,0.6)]"
              >
                A
                <span
                  className="block border-t-[1px] w-full border-black 
                relative hoverable"
                >
                  <span
                    className="absolute right-0 top-0 h-0
                transition-all overflow-clip
                bg-purple-700"
                  ></span>
                  <span
                    className="z-10 relative block
                 hover:text-white  transition-all
                w-full h-full "
                  >
                    A
                  </span>
                </span>
                <span
                  className="block border-t-[1px] w-full border-black
                relative hoverable "
                >
                  <span
                    className="absolute right-0 top-0 w-0
                transition-all overflow-clip
                bg-purple-700"
                  ></span>
                  <span
                    className="z-10 relative block
                 hover:text-white  transition-all
                w-full h-full "
                  >
                    B
                  </span>
                </span>
                <span
                  className="block border-t-[1px] w-full border-black 
                relative hoverable"
                >
                  <span
                    className="absolute left-0 top-0 w-0
                transition-all overflow-clip
                bg-purple-700"
                  ></span>
                  <span
                    className="z-10 relative block
                 hover:text-white  transition-all
                w-full h-full "
                  >
                    C
                  </span>
                </span>
              </button>
            </p>
            <p className="font-Pixelify-Regular text-[48px] relative w-fit ">
              End Point:
              <button
                className="absolute w-[54px] h-[54px] bg-white
                flex flex-col 
                justify-start
              items-center transition-all duration-300 overflow-clip ease-out
              right-[-76px] top-[10px]  rounded-[100px] text-center text-[36px]
              hover:h-[219px] hover:rounded-[9px]
              shadow-[0_4px_4px_0px_rgba(0,0,0,0.6)]"
              >
                B
                <span
                  className="block border-t-[1px] w-full border-black 
                relative hoverable"
                >
                  <span
                    className="absolute right-0 top-0 h-0
                transition-all overflow-clip
                bg-purple-700"
                  ></span>
                  <span
                    className="z-10 relative block
                 hover:text-white  transition-all
                w-full h-full "
                  >
                    A
                  </span>
                </span>
                <span
                  className="block border-t-[1px] w-full border-black
                relative hoverable "
                >
                  <span
                    className="absolute right-0 top-0 w-0
                transition-all overflow-clip
                bg-purple-700"
                  ></span>
                  <span
                    className="z-10 relative block
                 hover:text-white  transition-all
                w-full h-full "
                  >
                    B
                  </span>
                </span>
                <span
                  className="block border-t-[1px] w-full border-black 
                relative hoverable"
                >
                  <span
                    className="absolute left-0 top-0 w-0
                transition-all overflow-clip
                bg-purple-700"
                  ></span>
                  <span
                    className="z-10 relative block
                 hover:text-white  transition-all
                w-full h-full "
                  >
                    C
                  </span>
                </span>
              </button>
            </p>
          </div>
          <div className="flex flex-col items-start ">
            <div className="flex">
              <p className="font-Pixelify-Regular text-[48px] relative w-fit">
                Disk:{' '}
              </p>
              <input
                type="text"
                placeholder="1-14"
                value={diskNumber}
                onChange={handleDiskInputChange}
                className="w-[133px] h-[41px] rounded-[45px] flex justify-center text-center
               font-Pixelify-Regular text-[36px] self-center ml-[20px]  
               shadow-[inset_1px_3px_2px_rgba(0,0,0,0.6)]"
              />
            </div>
            <div
              className="flex mt-[20px] font-Pixelify-Regular text-[36px]
             w-[384px] h-[54px] bg-white rounded-[9px] overflow-clip
             shadow-[0_4px_4px_0px_rgba(0,0,0,0.6)]"
            >
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
              <button className="relative">
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
            </div>
          </div>
          <button className="absolute text-[48px] px-[40px] py-[5px]
          font-Pixelify-SemiBold w-[231px]
          top-[270px]
           shadow-[0_4px_4px_0px_rgba(0,0,0,0.6)]
           left-1/2  transform -translate-x-1/2
           transition-all ease-out duration-300
            rounded-[42px] bg-white hover:bg-purple-700
            hover:text-white">
            {' '}
            Start
            
          </button>
        </section>
        <section className='mt-auto flex flex-col'>
          <div className='flex gap-[450px] self-center'>
            <div className='h-[400px] w-[48px] bg-white'></div>
            <div className='h-[400px] w-[48px] bg-white'></div>
            <div className='h-[400px] w-[48px] bg-white'></div>

          </div>
          <div className='w-full h-[58px] bg-black'></div>
        </section>
      </div>
    </div>
  );
}

export default App;
