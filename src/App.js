import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <main className="h-full">
      <TopHeader />
      <Home />
      <About />
      <Services />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
