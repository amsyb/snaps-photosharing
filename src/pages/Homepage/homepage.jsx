import { useState } from 'react';
import MainContent from "../../components/MainContent/MainContent";
import NewPhotoList from '../../components/NewPhotoList/NewPhotoList';
import Footer from "../../components/Footer/Footer";

function Homepage() {
    const [filtersOpen, setFiltersOpen] = useState(false);
  return (
    <>
          <MainContent filtersOpen={filtersOpen} />
          <NewPhotoList />
          <Footer />
          
          </>
  )
}

export default Homepage
