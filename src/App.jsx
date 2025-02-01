import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/homepage";
import PhotoDetails from "./pages/PhotoDetails/PhotoDetails";
import Footer from "./components/Footer/Footer";
import "../src/styles/partials/_global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/photos/:photoId" element={<PhotoDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
