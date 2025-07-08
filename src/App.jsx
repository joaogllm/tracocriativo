import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Galeria from "./pages/Galeria";
import ProjetoDetalhe from "./pages/ProjetoDetalhe";
import Navbar from "./components/Navbar";
import { FilterProvider } from "./contexts/FilterContext";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

export default function App() {
  useEffect(() => {
    // Garante que o JS do Bootstrap está carregado para o menu mobile
  }, []);
  return (
    <FilterProvider>
      <>
        {/* Importa Rubik do Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <Router basename="/tracocriativo">
          <Navbar />
          <main className="py-4 py-md-5">
            <Routes>
              <Route path="/" element={<Galeria />} />
              <Route path="/projeto" element={<ProjetoDetalhe />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </main>
        </Router>
      </>
    </FilterProvider>
  );
}
