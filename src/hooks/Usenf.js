// ─────────────────────────────────────────────
//  NF — Custom Hooks
// ─────────────────────────────────────────────

import { useState, useEffect } from "react";

/** Tracks window.scrollY; updates on every scroll event. */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrollY;
}

/** Cycles through digits 0–9 every `interval` ms. */
export function useCyclingDigit(interval = 800) {
  const [digit, setDigit] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setDigit(d => (d + 1) % 10), interval);
    return () => clearInterval(id);
  }, [interval]);
  return digit;
}

/** Simple cart counter — returns [count, addItem]. */
export function useCart() {
  const [count, setCount] = useState(0);
  const addItem = (e) => {
    e?.stopPropagation();
    setCount(c => c + 1);
  };
  return [count, addItem];
}