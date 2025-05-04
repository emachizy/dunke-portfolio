import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick: () => void;
  otherClasses: string;
}) => {
  return (
    <div>
      <button
        onClick={() => {
          if (handleClick) {
            handleClick(); // Ensure handleClick is actually called
          }
        }}
        className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none "
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#d046bb_50%,#eadee9_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>
    </div>
  );
};

export default MagicButton;
