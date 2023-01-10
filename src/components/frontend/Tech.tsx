import React from "react";

const Tech = ({ tech }: { tech: string }) => {
  return (
    <div className="text-sm border-[1px] border-myBlack rounded-md py-[2px] px-[6px] w-fit m-1">
      {tech}
    </div>
  );
};

export default Tech;
