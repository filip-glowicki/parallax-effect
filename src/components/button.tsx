import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export const Button = ({ children }: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef?.current;
    if (!button) return;

    const onMouseMove = (event: MouseEvent) => {
      button.style.setProperty("--x", `${event.offsetX}px`);
      button.style.setProperty("--y", `${event.offsetY}px`);
    };

    button.addEventListener("mousemove", onMouseMove);
    return () => button.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <button ref={buttonRef}>
      <span>{children}</span>
    </button>
  );
};
