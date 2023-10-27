import React, { useEffect, useState } from "react";
const Button = () => {
  const [isHydrate, setIsHydrate] = useState(false);
  useEffect(() => {
    setIsHydrate(true);
  }, []);
  return (
    <div className="w-fit h-fit p-2 rounded-sm" style={{ backgroundColor: isHydrate ? "green" : "red" }}>{isHydrate? "Hydrate" : "Non"}</div>
  );
};

export default Button;
