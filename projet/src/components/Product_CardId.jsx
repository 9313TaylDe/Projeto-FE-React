import { useState } from "react";

const Card = ({ fret, vers, className }) => {
  const [flip, setFlip] = useState(false);
  return (
    <div className={`[perspective:1000px] ${className}`}>
      <div
        className={` h-full w-full relative [transform-style:preserve-3d] transition-transform duration-1000 ${
          flip ? "[transform:rotateY(180deg)]  " : ""
        }`}
      >
        {" "}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {fret}
          <button
            onClick={() => setFlip(!flip)}
            className="absolute top-[6.48px] right-2 z-0 
bg-black hover:bg-black text-white 
rounded-full w-7 h-7 flex items-center justify-center 
pi pi-refresh text-[12px] "
          />
        </div>
        {/* VERSO */}
        <div className=" absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {vers}{" "}
          <button
            onClick={() => setFlip(!flip)}
            className="absolute top-[6.48px] right-2 z-20 
bg-black hover:bg-black text-white 
rounded-full w-7 h-7 flex items-center justify-center 
pi pi-refresh text-[12px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
