import React, { useEffect, useState } from "react";
interface Props {
  title: string;
}
const Button: React.FC<Props> = ({ title }) => {
  const [isHydrate, setIsHydrate] = useState(false);
  useEffect(() => {
    setIsHydrate(true);
  }, []);
  return (
    <div className="w-fit h-fit p-2 rounded-sm" style={{ backgroundColor: isHydrate ? "green" : "red" }}>{title}</div>
  );
};

export default Button;
