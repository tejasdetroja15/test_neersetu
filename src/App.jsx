import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ minHeight: "100dvh", background: "#04070a" }}>
      <Header />
      <Hero />
      {/* <Logos /> */}
      <Features />
      <Showcase />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
