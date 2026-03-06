// ─────────────────────────────────────────────
//  NF — Footer Component
// ─────────────────────────────────────────────

import { FOOTER_LINKS } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer__brand">NF</div>
        <div className="footer__tagline">Fashion is number.</div>
      </div>

      {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
        <div key={heading}>
          <div className="footer__heading">{heading}</div>
          <ul className="footer__links">
            {links.map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="footer__bottom">
        <div className="footer__copy">
          © 2026 NUMBER FASHION. ALL RIGHTS RESERVED.
        </div>
        <div className="footer__copy">DESIGNED BY THE EQUATION.</div>
      </div>
    </footer>
  );
}
