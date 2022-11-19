import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/components/AboutUs";
import Home from "./pages/Home/Home";
import Price from "./pages/Price/components/Price";
import Header from "./shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Price" element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;
