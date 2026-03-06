// ─────────────────────────────────────────────
//  NF — Hero Section
// ─────────────────────────────────────────────

import { useCyclingDigit } from "../hooks/useNF";
import { TICKER_ITEMS } from "../data";

const STATS = [
  { num: "47", label: "PIECES" },
  { num: "12", label: "LOOKS" },
  { num: "1", label: "VISION" },
];

export default function Hero() {
  const digit = useCyclingDigit(800);

  return (
    <>
      <div className="ticker">
        <div className="ticker__inner">
          {TICKER_ITEMS.map((t, i) => (
            <span key={i}>◆ {t}</span>
          ))}
        </div>
      </div>

      <section className="hero">
        <div className="hero__bg-digit">{digit}</div>

        <div className="hero__eyebrow">
          SPRING/SUMMER 2026 — COLLECTION №{digit + 1}
        </div>

        <h1 className="hero__title">
          <br />
          NUMBER
          <br />
          FASH<span>·</span>
          <br />
          ION
        </h1>

        <p className="hero__subtitle">
          Where every number tells a story. Every piece a theorem. Every look an
          equation.
        </p>

        <div className="hero__cta">
          <button className="hero__cta-primary">EXPLORE SS26</button>
          <button className="hero__cta-secondary">Watch the film →</button>
        </div>

        <div className="hero__stats">
          {STATS.map((s) => (
            <div key={s.label} className="hero__stat">
              <div className="hero__stat-num">{s.num}</div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
