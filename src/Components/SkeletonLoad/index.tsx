import React from "react";

interface SkeletonLoadProps {
  bars?: number;
}

const SkeletonLoad: React.FC<SkeletonLoadProps> = ({ bars = 1 }) => {
  const elements: JSX.Element[] = Array(bars).fill(
    <h2 className="bg-gray-400 animate-pulse h-6 w-full mb-2"></h2>
  );

  return <>{elements}</>;
};

export default SkeletonLoad;
