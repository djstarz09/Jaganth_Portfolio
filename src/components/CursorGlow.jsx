import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500
  });

  useEffect(() => {
    const move = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener("pointermove", move);

    return () => {
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="cursor-glow hidden md:block"
      style={{
        left: position.x,
        top: position.y
      }}
    />
  );
}