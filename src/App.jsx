import { useState } from 'react';

import "./App.scss";
import "./main";
import "./styles/partials/_global.scss";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
 
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
      <>
          <Navigation filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} />
          <Hero />
          <MainContent filtersOpen={filtersOpen} />
          <Footer />
      </>
  );
}

export default App;
