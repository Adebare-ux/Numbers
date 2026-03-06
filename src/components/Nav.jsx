import { useScrollY } from "../hooks/useNF";
import { NAV_LINKS } from "../data";

export default function Navbar({ cartCount }) {
  const scrollY = useScrollY();

  return (
    <nav className={`nav${scrollY > 80 ? " nav--scrolled" : ""}`}>
      <div className="nav__logo">NF</div>
      <ul className="nav__links">
        {NAV_LINKS.map((l) => (
          <li key={l}>
            <a href="#">{l}</a>
          </li>
        ))}
      </ul>
      <button className="nav__cart">CART ({cartCount})</button>
    </nav>
  );
}
