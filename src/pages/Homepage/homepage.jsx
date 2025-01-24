import { useState } from 'react';
import Navigation from "../../components/Navigation/Navigation";
import MainContent from "../../components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";

function Homepage() {
    const [filtersOpen, setFiltersOpen] = useState(false);
    return (
        <>
            {/* Pass filtersOpen and setFiltersOpen to Navigation */}
            <Navigation 
                // filtersOpen={filtersOpen} 
                setFiltersOpen={setFiltersOpen} 
            />
            <MainContent filtersOpen={filtersOpen} />
            <Footer />
        </>
    );
}

export default Homepage;
