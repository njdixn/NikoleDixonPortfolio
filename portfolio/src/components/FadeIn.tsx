import React, { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "none";
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, immediately display
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      { threshold: 0.01, rootMargin: "60px" }
    );

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    // Safety fallback: ensure content is revealed even if observer is delayed
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, Math.max(150, delay * 1000 + 100));

    return () => {
      if (current) observer.unobserve(current);
      clearTimeout(timer);
    };
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return "translateY(0)";
    if (direction === "up") return "translateY(20px)";
    if (direction === "down") return "translateY(-20px)";
    return "none";
  };

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
