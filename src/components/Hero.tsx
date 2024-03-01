import { useState } from "react";

export const Hero = () => {
  const [menu, setMenu] = useState<boolean>();
  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <>
      <button onClick={handleClick}>{menu ? "CLIKED" : "CLICK ME"}</button>
    </>
  );
};
