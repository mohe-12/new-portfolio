import type React from "react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type Variant = "up" | "left" | "right" | "zoom";

/** Fades/slides its children in the first time they scroll into view. */
export function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};
  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-shown={shown ? "" : undefined}
      style={style}
      className={className}
    >
      {children}
    </Tag>
  );
}

/** Lazy image that fades in once loaded (also handles images already cached before hydration). */
export function FadeImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);
  return (
    <img
      ref={ref}
      loading="lazy"
      decoding="async"
      {...props}
      data-fade=""
      data-loaded={loaded ? "" : undefined}
      onLoad={(e) => {
        setLoaded(true);
        props.onLoad?.(e);
      }}
      onError={(e) => {
        setLoaded(true);
        props.onError?.(e);
      }}
    />
  );
}
