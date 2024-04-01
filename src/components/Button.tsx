import React, { ReactNode } from "react";

interface Props {
  onClick?: () => void;
  type?: "submit" | "button";
  children: ReactNode;
  
}

export const ButtonComponent: React.FC<Props> = ({ onClick, children, type}) => {
  return (
    <button
      type={type && "button"}
      className="bg-zinc-900 hover:bg-zinc-800 text-white font-normal text-sm py-2 px-6 mr-4 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const ButtonAction: React.FC<Props> = ({ onClick, children , type}) => {
  return (
    <button
      type={type && "button"}
      className="bg-zinc-200 hover:bg-zinc-300 text-zinc-600 font-normal text-sm py-1.5 px-5 mr-4 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export const IconButton: React.FC<Props> = ({ onClick, children , type}) => {
  return (
    <button
      type={type && "button"}
      className="bg-zinc-600 hover:bg-zinc-800 text-white font-normal text-sm p-2.5 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export const IconButtonAction: React.FC<Props> = ({ onClick, children , type}) => {
  return (
    <button
      type={type && "button"}
      className="bg-zinc-200 hover:bg-zinc-300 text-zinc-600 font-normal text-sm p-2.5 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
