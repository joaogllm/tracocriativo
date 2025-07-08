import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./imagem-detalhe.css";

export default function ImagemDetalhe() {
  const location = useLocation();
  const navigate = useNavigate();
  const { imagem } = location.state || {};

  if (!imagem) {
    return (
      <div className="container py-5 text-center">
        <h1>Imagem não encontrada</h1>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Voltar para Galeria
        </button>
      </div>
    );
  }

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="row">
            {/* Imagem - Lado esquerdo */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <div className="text-center">
                <img
                  src={imagem.src}
                  alt={imagem.titulo}
                  className="img-fluid rounded shadow-lg imagem-detalhe-img"
                />
              </div>
            </div>

            {/* Informações - Lado direito */}
            <div className="col-12 col-md-6">
              <div className="imagem-info h-100">
                <h1 className="display-5 fw-bold mb-3">{imagem.titulo}</h1>

                {imagem.categoria && (
                  <div className="categoria-badge mb-3">
                    <span className="badge bg-success fs-6 px-3 py-2">
                      {imagem.categoria}
                    </span>
                  </div>
                )}

                {imagem.descricao && (
                  <div className="descricao-section mb-4">
                    <h5 className="fw-semibold mb-2">Descrição</h5>
                    <p className="text-muted lh-base">{imagem.descricao}</p>
                  </div>
                )}

                <div className="mt-auto">
                  <button className="btn-voltar" onClick={() => navigate("/")}>
                    <i className="bi bi-arrow-left me-2"></i>Voltar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
