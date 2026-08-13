import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: 0 | 100 | 200 | 300;
  className?: string;
};

function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const delayClass =
    delay === 100
      ? "reveal-delay-100"
      : delay === 200
        ? "reveal-delay-200"
        : delay === 300
          ? "reveal-delay-300"
          : "";

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;
