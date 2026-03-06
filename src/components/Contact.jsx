// ─────────────────────────────────────────────
//  NF — Contact Section
// ─────────────────────────────────────────────

import { SOCIAL_LINKS } from "../data";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__header">
        <div className="contact__eyebrow">GET IN TOUCH</div>
        <h2 className="contact__title">
          CONNECT
          <br />
          WITH
          <br />
          US
        </h2>
      </div>

      <div className="contact__grid">
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
          >
            <div className="contact__card-symbol">{s.symbol}</div>
            <div className="contact__card-body">
              <div className="contact__card-name">{s.name}</div>
              <div className="contact__card-handle">{s.handle}</div>
            </div>
            <div className="contact__card-arrow">→</div>
          </a>
        ))}
      </div>
    </section>
  );
}
