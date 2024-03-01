import { useEffect, useRef } from "react";

export const DomRef = () => {
  const inputRed = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRed.current?.focus();
  }, []);

  return (
    <div>
      <input type="text" />
    </div>
  );
};
