import { useCart } from "./hooks/useNF";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Manifesto from "./components/Manifesto";
import { Marquee, Lookbook } from "./components/Marqueelookbook";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  const [cartCount, addToCart] = useCart();

  return (
    <div className="app-root">
      <Nav cartCount={cartCount} />
      <Hero />
      <Marquee />
      <Collection onAddToCart={addToCart} />
      <Manifesto />
      <Marquee />
      <Lookbook />
      <Contact />
      <Footer />
    </div>
  );
}
