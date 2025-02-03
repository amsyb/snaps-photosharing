import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import MainContent from "../../components/MainContent/MainContent";
import axios from "axios";

function Homepage() {
  const base_URL = import.meta.env.VITE_API_URL;
  const [tag, setTags] = useState([]);

  const getTags = async () => {
    try {
      const tagsResponse = await axios.get(`${base_URL}/api/tags`);
      setTags(tagsResponse.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getTags();
  }, []);

  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
    <>
      <Navigation filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} />
      <MainContent filtersOpen={filtersOpen} />
    </>
  );
}

export default Homepage;
