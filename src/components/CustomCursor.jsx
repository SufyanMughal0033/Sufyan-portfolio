import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    let ringX = 0, ringY = 0;
    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      ringX = e.clientX;
      ringY = e.clientY;
    };

    let raf;
    const animateRing = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      raf = requestAnimationFrame(animateRing);
    };
    animateRing();

    const onOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        ringRef.current?.classList.add('scale-150', 'border-accent');
      }
    };
    const onOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        ringRef.current?.classList.remove('scale-150', 'border-accent');
      }
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary md:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 transition-transform duration-200 ease-out md:block"
      />
    </>
  );
}
