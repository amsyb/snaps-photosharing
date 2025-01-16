import "./App.scss";
import "./main";
import "./styles/partials/_global.scss";
import Hero from "./components/Hero/Hero";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Hero />
    <MainContent />
      <Footer />
    </>
  );
}

export default App;
