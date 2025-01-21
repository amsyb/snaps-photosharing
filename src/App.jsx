import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.scss";
import Homepage from './pages/Homepage/Homepage';
// import Navigation from "./components/Navigation/Navigation";
// import MainContent from "./components/MainContent/MainContent";
// import Footer from "./components/Footer/Footer";

function App() {
 
//   const [filtersOpen, setFiltersOpen] = useState(false);
  return (
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Homepage />} />
          {/* <Navigation filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} />
          <MainContent filtersOpen={filtersOpen}/>
          <Footer /> */}
          </Routes>
      </BrowserRouter>
  );
}

export default App;
