import React from "react";

interface Props {
  active: boolean;
}

const PulsingDot: React.FC<Props> = ({ active }) => {
  return (
    <div className="relative">
      <div className={`w-3 h-3 rounded-full ${active ? 'bg-green-600 bg-  animate-pulse bg-' : 'bg-zinc-300'}`}></div>
    </div>
  );
};

export default PulsingDot;