export default function DiskInput({ diskNumber, handleDiskInputChange,isPlaying }) {

  return (
    <div className="flex">
      <p className="font-Pixelify-Regular text-[48px] relative w-fit">Disk: </p>
      <input
        type="text"
        placeholder="1-14"
        disabled={isPlaying}
        value={diskNumber[diskNumber.length -1]}
        onChange={handleDiskInputChange}
        className="w-[133px] h-[41px] rounded-[45px] flex justify-center text-center
               font-Pixelify-Regular text-[36px] self-center ml-[20px]  
               shadow-[inset_1px_3px_2px_rgba(0,0,0,0.6)]"
      />
    </div>
  );
}
