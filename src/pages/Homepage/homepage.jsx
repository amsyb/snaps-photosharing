import { useState } from 'react';

import Navigation from "../../components/Navigation/Navigation";
import MainContent from "../../components/MainContent/MainContent";

function Homepage() {
 
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
     <>
          <Navigation filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} />
          <MainContent filtersOpen={filtersOpen}/>
          </>
  );
}

export default Homepage;
