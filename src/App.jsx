import { useState } from 'react';

import "./App.scss";
import "./main";
import "./styles/partials/_global.scss";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
 
  const [filterOff, setFilterOff] = useState("")

  let content = null;
  if (filterOff === true) {
    content = "";
  } else if (filterOff === false) {
    content = <Navigation />
  }

  return (
    <>
    <Hero />
    <MainContent />
    <Navigation setFilterOff = {setFilterOff}/>
      <Footer />
    </>
  );
}

export default App;
