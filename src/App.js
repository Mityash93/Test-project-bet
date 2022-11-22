import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import Price from "./pages/Price/Price";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="https://mityash93.github.io/Test-project-bet/" element={<Home />} />
        <Route path="https://mityash93.github.io/Test-project-bet/about-us" element={<AboutUs />} />
        <Route path="https://mityash93.github.io/Test-project-bet/price" element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;
