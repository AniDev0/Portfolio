import "./app.scss"
import Test from "./Test";
import Navbar from "./components/navbar/navbar/navbar/Navbar";
import Hero from "./components/navbar/navbar/hero/Hero";
import Parallax from "./components/navbar/navbar/parallax/Parallax";
import Services from "./components/navbar/navbar/services/Services";
import Portfolio from "./components/navbar/navbar/portfolio/Portfolio";
import Contact from "./components/navbar/navbar/contact/Contact";
import Cursor from "./components/navbar/navbar/cursor/Cursor";

const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact">
      <Contact/></section>
    {/* <Test/> */}
    </div>;
};

export default App;
