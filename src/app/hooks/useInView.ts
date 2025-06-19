/*import { useEffect, useRef, useState } from 'react';

export default function useInView<T extends Element = HTMLElement>(threshold = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isInView };
}*/
import { useEffect, useRef, useState } from 'react';

export default function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const target = ref.current; // ✅ cache the current ref

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target); // ✅ safe to use cached ref
    };
  }, [threshold]);

  return { ref, isInView };
}

