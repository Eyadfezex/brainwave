import { ReactNode } from "react";
import brackets from "../assets/svg/Brackets";

interface props {
  className?: string;
  children?: ReactNode;
}

const TagLine = ({ className, children }: props) => {
  return (
    <div>
      <div className={`tagline flex items-center ${className || ""}`}>
        {brackets("left")}
        <div className="mx-3 text-n-3">{children}</div>
        {brackets("right")}
      </div>
    </div>
  );
};

export default TagLine;
