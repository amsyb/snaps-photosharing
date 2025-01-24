import { useState } from 'react';

import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import MainContent from "./components/MainContent/MainContent";
import NewPhotoList from './components/NewPhotoList/NewPhotoList';
import Footer from "./components/Footer/Footer";

function App() {
 
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
      <>
          <Navigation filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} />
          <MainContent filtersOpen={filtersOpen}/>
          <NewPhotoList />
          <Footer />
      </>
  );
}

export default App;

