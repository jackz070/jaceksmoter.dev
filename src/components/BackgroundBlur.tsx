import React from "react";

const BackgroundBlur: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="w-[100vw] h-[100vh] bg-myWhite overflow-hidden fixed top-0 right-0 bottom-0 left-0 -z-10 ">
      {children}
      <div className=" absolute top-0 right-0 bottom-0 left-0 blur-[200px] ">
        <div className="absolute top-24 left-12 rounded-full bg-myOrange sm:w-[60vw] w-[80vw] sm:h-[60vw] h-[80vw] animate-circleMove2 opacity-90 z-10" />
        <div className="absolute top-24 left-12 rounded-full bg-myOrange sm:w-[20vw] w-[50vw] sm:h-[20vw] h-[50vw] animate-circleMove6 opacity-90" />
        <div className="absolute top-48 left-0 rounded-full bg-myCyan sm:w-[50vw] w-[80vw] sm:h-[50vw] h-[80vw] animate-circleMove3 opacity-90" />
        <div className="absolute top-0 left-36 rounded-full bg-myGreen sm:w-[45vw] w-[80vw] sm:h-[45vw] h-[80vw] animate-circleMove3 opacity-90" />
        <div className="absolute top-0 left-0 rounded-full bg-myBlue sm:w-[60vw] w-[80vw] sm:h-[60vw] h-[80vw] animate-circleMove1 -z-10 opacity-90" />
        <div className="absolute top-10 left-64 rounded-full bg-myWhite sm:w-[50vw] w-[70vw] sm:h-[50vw] h-[70vw] animate-circleMove5 opacity-60 z-30" />
      </div>
    </div>
  );
};

export default BackgroundBlur;
