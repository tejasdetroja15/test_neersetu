import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import Working from "./components/Working";
import Tech from "./components/Tech";
import GroundwaterMap from "./components/GroundwaterMap";

function App() {
  return (
    <div className="snap-container">
      <section className="auto-section">
        <Header />
      </section>
      <section className="snap-section">
        <Hero />
      </section>
      {/* <section className="snap-section">
        <Logos />
      </section> */}
      {/* <section className="snap-section">
        <Showcase />
      </section> */}
      <section className="snap-section">
        <Features />
      </section>
      <section className="snap-section">
        <GroundwaterMap />
      </section>
      <section className="auto-section">
        <Working />
      </section>
      <section className="auto-section">
        <Tech />
      </section>
      <section className="auto-section">
        <Footer />
      </section>
    </div>
  );
}

export default App;
