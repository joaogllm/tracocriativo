import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useFilter } from "../contexts/FilterContext";
import "./Navbar.css";
import logoBranco from "../assets/LOGO TRAÇO CRIATIVO BRANCO.png";

export default function Navbar() {
  const { selectedCategory, setCategory, clearFilter } = useFilter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Verifica se está na página da galeria (home)
  const isInGallery = location.pathname === "/";

  const categories = [
    "Arquitetura",
    "Corporativo",
    "Design",
    "Stands",
    "Natal",
    "Eventos",
  ];

  const handleCategoryClick = (category) => {
    setCategory(category);
    setIsDropdownOpen(false);
  };

  const handleClearFilter = () => {
    clearFilter();
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Fecha o dropdown quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Limpa o filtro quando sair da galeria
  useEffect(() => {
    if (!isInGallery && selectedCategory) {
      clearFilter();
    }
  }, [isInGallery, selectedCategory, clearFilter]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4 custom-navbar">
      <div className="container">
        <Link
          className="navbar-brand fw-bold custom-navbar-brand d-flex align-items-center gap-2"
          to="/"
        >
          <img
            src={logoBranco}
            alt="Logo Traço Criativo"
            style={{ height: "44px" }}
          />
          <span className="navbar-brand-text">TraçoCriativo</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2 custom-navbar-list">
            <li className="nav-item">
              <Link className="nav-link custom-navbar-link" to="/">
                Home
              </Link>
            </li>
            {isInGallery && (
              <li className="nav-item dropdown" ref={dropdownRef}>
                <button
                  className={`nav-link custom-navbar-link dropdown-toggle ${
                    isDropdownOpen ? "show" : ""
                  }`}
                  onClick={toggleDropdown}
                  type="button"
                  id="projetosDropdown"
                  aria-expanded={isDropdownOpen}
                >
                  Projetos
                </button>
                <ul
                  className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                  aria-labelledby="projetosDropdown"
                >
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        className={`dropdown-item ${
                          selectedCategory === category ? "active" : ""
                        }`}
                        onClick={() => handleCategoryClick(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                  {selectedCategory && (
                    <>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-muted"
                          onClick={handleClearFilter}
                        >
                          <i className="bi bi-x-circle me-2"></i>
                          Limpar filtro
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link custom-navbar-link" to="/sobre">
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-navbar-link" to="/contato">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
