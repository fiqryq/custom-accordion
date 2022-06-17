import { useState } from "react";
import { IExperiment } from "./types";
import { GoChevronRight } from "react-icons/go";

export const Experiment = ({ content, title, className }: IExperiment) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const parentClassnames: string = "w-full cursor-pointer bg-white text-left";
  return (
    <div className="p-2">
      <div className={`${parentClassnames} ${className}`} onClick={handleClick}>
        <div className="flex items-center space-x-3 text-[#4A4A4A]">
          <GoChevronRight
            color="#10A8E5"
            className={!open ? "rotate-90 transition-all duration-100" : ""}
          />
          {title}
        </div>
      </div>
      <div hidden={open}>
        <div className="bg-[#F8F8F8] p-4">
          <p className="text-[#4A4A4A]">{content}</p>
        </div>
      </div>
    </div>
  );
};
