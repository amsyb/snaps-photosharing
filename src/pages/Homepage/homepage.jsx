import { useState, useEffect } from 'react';

import Navigation from "../../components/Navigation/Navigation";
import MainContent from "../../components/MainContent/MainContent";
import axios from 'axios'

function Homepage() {

  const [tag, setTags] = useState([])

  const getTags = async () => {
    try {
      const tagsResponse = await axios.get (
        `http://localhost:8888/api/tags`
      );
      setTags(tagsResponse.data);
    } catch (error) {
      console.error("error", error)
    }
    }

  useEffect(() => {
    getTags(tag)
      })
 
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
     <>
          <Navigation filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} />
          <MainContent filtersOpen={filtersOpen}/>
          </>
  );
}

export default Homepage;
