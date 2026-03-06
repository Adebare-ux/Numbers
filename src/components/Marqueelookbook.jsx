// ─────────────────────────────────────────────
//  NF — Marquee Banner & Lookbook Section
// ─────────────────────────────────────────────

import { useState, useEffect } from "react";
import { MARQUEE_ITEMS, LOOKBOOK } from "../data";

// ── Marquee ──────────────────────────────────

export function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee__inner">
        {MARQUEE_ITEMS.map((t, i) => (
          <span key={i} className={t === "∞" ? "marquee--faded" : ""}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Lookbook Modal ────────────────────────────

function LookbookModal({ entry, onClose }) {
  const [active, setActive] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const look = entry.looks[active];

  return (
    <div className="lb-modal" onClick={onClose}>
      <div className="lb-modal__panel" onClick={(e) => e.stopPropagation()}>
        {/* ── Close ── */}
        <button className="lb-modal__close" onClick={onClose}>
          ✕
        </button>

        {/* ── Left — main image ── */}
        <div className="lb-modal__main" style={{ "--modal-bg": entry.bg }}>
          {look.image ? (
            <img
              src={look.image}
              alt={look.caption}
              className="lb-modal__img"
            />
          ) : (
            <div
              className="lb-modal__placeholder"
              style={{ background: entry.bg }}
            >
              <span style={{ color: entry.fg }}>{entry.num}</span>
            </div>
          )}
          <div className="lb-modal__caption">{look.caption}</div>
        </div>

        {/* ── Right — info + thumbnails ── */}
        <div className="lb-modal__sidebar">
          <div className="lb-modal__season">{entry.season}</div>
          <div className="lb-modal__title">{entry.title}</div>
          <div className="lb-modal__count">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(entry.looks.length).padStart(2, "0")}
          </div>

          {/* Thumbnails */}
          <div className="lb-modal__thumbs">
            {entry.looks.map((lk, i) => (
              <button
                key={i}
                className={`lb-modal__thumb${active === i ? " lb-modal__thumb--active" : ""}`}
                style={{ "--thumb-bg": entry.bg }}
                onClick={() => setActive(i)}
              >
                {lk.image ? (
                  <img src={lk.image} alt={lk.caption} />
                ) : (
                  <span style={{ color: entry.fg }}>{entry.num}</span>
                )}
              </button>
            ))}
          </div>

          {/* Nav arrows */}
          <div className="lb-modal__nav">
            <button
              className="lb-modal__nav-btn"
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              disabled={active === 0}
            >
              ← PREV
            </button>
            <button
              className="lb-modal__nav-btn"
              onClick={() =>
                setActive((a) => Math.min(entry.looks.length - 1, a + 1))
              }
              disabled={active === entry.looks.length - 1}
            >
              NEXT →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Lookbook Grid ─────────────────────────────

export function Lookbook() {
  const [openEntry, setOpenEntry] = useState(null);

  return (
    <>
      <div className="lookbook">
        {LOOKBOOK.map((l, i) => (
          <div
            key={i}
            className="look-card"
            style={{
              "--look-bg": l.bg,
              "--look-fg": l.fg,
              "--look-height": i === 0 ? "700px" : "340px",
            }}
          >
            {l.image && (
              <img
                src={l.image}
                alt={l.title}
                className="look-card__bg-image"
              />
            )}
            <div className="look-card__overlay" />
            <div className="look-card__inner">
              <div className="look-card__number">{l.num}</div>
              <div className="look-card__content">
                <div className="look-card__season">{l.season}</div>
                <div className="look-card__title">{l.title}</div>
                <button
                  className="look-card__link"
                  onClick={() => setOpenEntry(l)}
                >
                  {l.link}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openEntry && (
        <LookbookModal entry={openEntry} onClose={() => setOpenEntry(null)} />
      )}
    </>
  );
}
