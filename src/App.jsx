import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import PhotoDetails from "./pages/PhotoDetails/PhotoDetails";


function App() {
  return (

<BrowserRouter>
<Routes>
 <Route path="/" element={<Homepage />} />
 <Route path ="/photos/:photoId" element = {<PhotoDetails />} />
</Routes>
</BrowserRouter>
  )
}

export default App


