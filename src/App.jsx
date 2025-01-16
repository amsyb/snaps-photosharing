import "./App.scss";
import "./main";
import "./styles/partials/_global.scss";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Hero />
    <MainContent />
    <Navigation />
      <Footer />
    </>
  );
}

export default App;
