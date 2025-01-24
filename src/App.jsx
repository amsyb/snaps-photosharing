import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navigation from "./components/Navigation/Navigation";
import Homepage from './pages/Homepage/homepage';
import PhotoDetails from "./pages/PhotoDetails/PhotoDetails";


function App() {
    const [filtersOpen, setFiltersOpen] = useState(false);
  return (

<BrowserRouter>
<Navigation filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} />
<Routes>
 <Route path="/" element={<Homepage />} />
 <Route path ="/photos/:photoId" element = {<PhotoDetails />} />
</Routes>
</BrowserRouter>
  )
}

export default App


