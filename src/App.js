import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/navbar";
import Home from './pages/Home'
import Hotels from "./pages/Hotels";
import SingleHotel from "./pages/SingleHotel";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/hotels/:id" element={<SingleHotel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
