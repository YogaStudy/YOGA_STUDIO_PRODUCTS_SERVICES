// components/ProgressBar.js

import { useEffect, useState } from "react";
interface ProgressBarProps {
  progress: number;
  height?: number;
  color?: string;
}
const ProgressBar = ({
  progress,
  height = 6,
  color = "red",
}: ProgressBarProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateProgressBar = () => {
      if (progress >= 0 && progress < 100) {
        setWidth(progress);
      } else {
        setWidth(0);
      }
    };

    updateProgressBar();

    return () => {
      // Cleanup or any additional logic on component unmount
    };
  }, [progress]);

  const progressBarStyle = {
    width: `${width}%`,
    height: `${height}px`,
    backgroundColor: color,
    transition: "width 0.3s ease-in-out",
  };

  return (
    <div style={{ height: `${height}px`, overflow: "hidden", width: "100%" }}>
      <div style={progressBarStyle} className="text-black">
        ss
      </div>
    </div>
  );
};

export default ProgressBar;
