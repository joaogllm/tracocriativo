import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./projeto-detalhe.css";

export default function ProjetoDetalhe() {
  const location = useLocation();
  const navigate = useNavigate();
  const { projeto } = location.state || {};
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!projeto) {
    return (
      <div className="container py-5 text-center">
        <h1>Projeto não encontrado</h1>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Voltar para Galeria
        </button>
      </div>
    );
  }

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === projeto.fotos.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? projeto.fotos.length - 1 : prev - 1
    );
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="row">
            {/* Galeria de Fotos - Lado esquerdo */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <div className="projeto-gallery">
                {/* Foto Principal */}
                <div className="main-image-container position-relative">
                  <img
                    src={projeto.fotos[selectedImageIndex].src}
                    alt={projeto.fotos[selectedImageIndex].alt}
                    className="img-fluid rounded shadow-lg main-image"
                  />

                  {/* Botão Fullscreen */}
                  <button
                    className="fullscreen-btn"
                    onClick={toggleFullscreen}
                    aria-label="Ver imagem em tamanho real"
                  >
                    <i className="bi bi-arrows-fullscreen"></i>
                  </button>

                  {/* Navegação entre fotos */}
                  {projeto.fotos.length > 1 && (
                    <>
                      <button
                        className="nav-btn nav-btn-prev"
                        onClick={prevImage}
                        aria-label="Foto anterior"
                      >
                        <i className="bi bi-chevron-left"></i>
                      </button>
                      <button
                        className="nav-btn nav-btn-next"
                        onClick={nextImage}
                        aria-label="Próxima foto"
                      >
                        <i className="bi bi-chevron-right"></i>
                      </button>

                      {/* Indicadores */}
                      <div className="image-indicators">
                        {projeto.fotos.map((_, index) => (
                          <button
                            key={index}
                            className={`indicator ${
                              index === selectedImageIndex ? "active" : ""
                            }`}
                            onClick={() => handleImageClick(index)}
                            aria-label={`Ir para foto ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Miniaturas */}
                {projeto.fotos.length > 1 && (
                  <div className="thumbnails-container mt-3">
                    <div className="thumbnails-scroll">
                      {projeto.fotos.map((foto, index) => (
                        <div
                          key={index}
                          className={`thumbnail ${
                            index === selectedImageIndex ? "active" : ""
                          }`}
                          onClick={() => handleImageClick(index)}
                        >
                          <img
                            src={foto.src}
                            alt={foto.alt}
                            className="img-fluid rounded"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Informações do Projeto - Lado direito */}
            <div className="col-12 col-md-6">
              <div className="projeto-info h-100">
                <h1 className="display-5 fw-bold mb-3">{projeto.titulo}</h1>

                {projeto.categoria && (
                  <div className="categoria-badge mb-3">
                    <span className="badge bg-success fs-6 px-3 py-2">
                      <i className="bi bi-tag me-2"></i>
                      {projeto.categoria}
                    </span>
                  </div>
                )}

                {projeto.descricao && (
                  <div className="descricao-section mb-4">
                    <h5 className="fw-semibold mb-2">
                      <i className="bi bi-info-circle me-2"></i>
                      Descrição
                    </h5>
                    <p className="text-muted lh-base">{projeto.descricao}</p>
                  </div>
                )}

                {/* Estatísticas do projeto */}
                <div className="projeto-stats mb-4">
                  <div className="row">
                    <div className="col-6">
                      <div className="stat-item text-center p-3 bg-light rounded">
                        <i className="bi bi-images fs-3 text-primary mb-2"></i>
                        <div className="stat-number fw-bold">
                          {projeto.fotos.length}
                        </div>
                        <div className="stat-label text-muted">Fotos</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="stat-item text-center p-3 bg-light rounded">
                        <i className="bi bi-calendar-event fs-3 text-success mb-2"></i>
                        <div className="stat-number fw-bold">{projeto.ano}</div>
                        <div className="stat-label text-muted">Ano</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <button className="btn-voltar" onClick={() => navigate("/")}>
                    <i className="bi bi-arrow-left me-2"></i>Voltar para Galeria
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Fullscreen */}
      {isFullscreen && (
        <div className="fullscreen-modal" onClick={closeFullscreen}>
          <div
            className="fullscreen-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="fullscreen-close" onClick={closeFullscreen}>
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="fullscreen-image-container">
              <img
                src={projeto.fotos[selectedImageIndex].src}
                alt={projeto.fotos[selectedImageIndex].alt}
                className="fullscreen-image"
              />
            </div>

            {/* Navegação no fullscreen */}
            {projeto.fotos.length > 1 && (
              <>
                <button
                  className="fullscreen-nav-btn fullscreen-nav-prev"
                  onClick={prevImage}
                  aria-label="Foto anterior"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button
                  className="fullscreen-nav-btn fullscreen-nav-next"
                  onClick={nextImage}
                  aria-label="Próxima foto"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>

                {/* Indicadores no fullscreen */}
                <div className="fullscreen-indicators">
                  {projeto.fotos.map((_, index) => (
                    <button
                      key={index}
                      className={`fullscreen-indicator ${
                        index === selectedImageIndex ? "active" : ""
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                      aria-label={`Ir para foto ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
