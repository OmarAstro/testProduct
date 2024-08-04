import React, { useEffect } from "react";
import { BrowserRouter, createHashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbarr from "./seactions/Navbar/Navbar";
import Footer from "./seactions/Footer/Footer";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
// aos animation library
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000});
  }, []);
  const routes = createHashRouter([
  

      <>
        <BrowserRouter>
          <Navbarr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
  ])
  }

export default App;
