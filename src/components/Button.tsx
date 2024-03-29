import React, { ReactNode } from "react";

interface Props {
  onClick: () => void;
  children: ReactNode;
}

const ButtonComponent: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className="bg-zinc-600 hover:bg-zinc-800 text-white font-normal text-sm py-2 px-6 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;