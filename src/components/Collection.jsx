// ─────────────────────────────────────────────
//  NF — Collection & Products Section
// ─────────────────────────────────────────────

import { useState } from "react";
import { PRODUCTS, COLLECTIONS } from "../data";

export default function Collection({ onAddToCart }) {
  const [active, setActive] = useState("SS26");

  const filtered = PRODUCTS.filter((p) => p.collection === active);

  return (
    <section className="collection">
      {/* ── Header ── */}
      <div className="collection__header">
        <h2 className="section-title">
          THE
          <br />
          COLLECTION
        </h2>
        <div className="collection__tabs">
          {COLLECTIONS.map((c) => (
            <button
              key={c}
              className={`collection__tab${active === c ? " collection__tab--active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
              <span className="collection__tab-count">
                {PRODUCTS.filter((p) => p.collection === c).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="products-grid">
        {filtered.map((p) => (
          <div key={p.id} className="product-card">
            {/* Image */}
            <div className="product-card__image-wrap">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="product-card__image"
                />
              ) : (
                <div
                  className="product-card__placeholder"
                  style={{ background: p.color }}
                >
                  <span style={{ color: p.accent }}>{p.number}</span>
                </div>
              )}
              <div className="product-card__tag">{p.tag}</div>
              <button
                className="product-card__quick-add"
                onClick={(e) => onAddToCart(e, p.id)}
              >
                + QUICK ADD
              </button>
            </div>

            {/* Info */}
            <div className="product-card__info">
              <div className="product-card__top">
                <span className="product-card__number-label">{p.number}</span>
                <span className="product-card__price">{p.price}</span>
              </div>
              <div className="product-card__name">{p.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Footer count ── */}
      <div className="collection__footer">
        SHOWING {filtered.length} OF {PRODUCTS.length} PIECES
      </div>
    </section>
  );
}
