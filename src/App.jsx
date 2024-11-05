import { useState } from 'react';
import StartPoint from './components/StartPoint';
import EndPoint from './components/EndPoint';
import FastForwardButtons from './components/FastForwardButtons';
import DiskInput from './components/DiskInput';
import DiskRods from './components/DiskRods';
function App() {
  const [diskNumber, setDiskNumber] = useState([3]);
  const [startingPoint, setStartingPoint] = useState('A');
  const [endPoint, setEndPoint] = useState('B');

  const handleDiskInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue >= 1 && newValue <= 14) {
      setDiskNumber([newValue]);
    } else if (e.target.value === '') {
      setDiskNumber([diskNumber[0],'']);
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
            <StartPoint
              startingPoint={startingPoint}
              endPoint={endPoint}
              setStartingPoint={setStartingPoint}
            />
            <EndPoint startingPoint={startingPoint}
            endPoint={endPoint}
            setEndPoint={setEndPoint} />
          </div>
          <div className="flex flex-col items-start ">
            <DiskInput
              diskNumber={diskNumber}
              handleDiskInputChange={handleDiskInputChange}
            />
            <div
              className="flex mt-[20px] font-Pixelify-Regular text-[36px]
             w-[384px] h-[54px] bg-white rounded-[9px] overflow-clip
             shadow-[0_4px_4px_0px_rgba(0,0,0,0.6)]"
            >
              <FastForwardButtons />

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
          <button
            className="absolute text-[48px] px-[40px] py-[5px]
          font-Pixelify-SemiBold w-[231px]
          top-[270px]
           shadow-[0_4px_4px_0px_rgba(0,0,0,0.6)]
           left-1/2  transform -translate-x-1/2
           transition-all ease-out duration-300
            rounded-[42px] bg-white hover:bg-purple-700
            hover:text-white"
          >
            {' '}
            Start
          </button>
        </section>
        <section className="mt-auto flex flex-col">
          <div className="flex gap-[450px] self-center">
            <DiskRods diskNumber={diskNumber[0]} startingPoint={startingPoint} endPoint={endPoint}/>
          </div>
          <div className="w-full h-[58px] bg-black"></div>
        </section>
      </div>
    </div>
  );
}

export default App;
