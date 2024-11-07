export default function DisabledSpan({ borderRadius, isPlaying }) {
  return (
    <span className={`${isPlaying?'w-full h-full':'w-0 h-0'} bg-[rgba(56,35,56,0.25)] rounded-[${borderRadius}px]
       absolute top-0 left-0`}></span>
  );
}
