import React from "react";
import profileImg from "../assets/profile.png";
import "./sobre.css";

const verde = "#28a745";

export default function Sobre() {
  return (
    <main className="sobre-main d-flex justify-content-center align-items-center">
      <div className="sobre-card">
        {/* Topo do perfil - Layout horizontal */}
        <div className="sobre-topo d-flex align-items-start gap-5 mb-4">
          <div className="d-flex flex-column align-items-center">
            <img
              src={profileImg}
              alt="Foto de perfil de Mario Sergio da Silva Martins"
              className="sobre-foto rounded-circle shadow"
            />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary d-flex align-items-center gap-1 mt-2"
              style={{
                border: "none",
                padding: 0,
                background: "none",
                color: "#E1306C",
              }}
              aria-label="Instagram"
            >
              <i className="bi bi-instagram" style={{ fontSize: "1.3rem" }}></i>
              Instagram
            </a>
          </div>
          <div className="sobre-info">
            <h2 className="sobre-nome fw-bold mb-1">
              Mario Sergio da Silva Martins
            </h2>
            <div className="sobre-titulo mb-1">
              Arquiteto & Cenógrafo | Modelagem 3D | Projetos BIM
            </div>
            <div className="sobre-local mb-2 text-secondary">
              <i className="bi bi-geo-alt me-2"></i>Rio de Janeiro, Brasil
            </div>
            <div className="sobre-contato d-flex flex-column flex-md-row gap-2 align-items-start justify-content-start mb-2">
              <span className="text-secondary">
                <i className="bi bi-envelope me-1"></i>
                tracocriativo1235345@gmail.com
              </span>
              <span className="text-secondary">
                <i className="bi bi-telephone me-1"></i>+55 (21) 99999-9999
              </span>
            </div>
          </div>
        </div>
        {/* Bio */}
        <div className="mb-4">
          <h5 className="sobre-section-title fw-semibold mb-2">Sobre</h5>
          <p className="sobre-bio text-muted">
            Arquiteto apaixonado por cenografia, modelagem 3D e inovação em
            projetos BIM. Experiência em projetos de grande porte, eventos e
            soluções criativas para espaços. Sempre buscando unir
            funcionalidade, estética e tecnologia para entregar resultados de
            alto impacto.
          </p>
        </div>
        {/* Experiência */}
        <div>
          <h5 className="sobre-section-title fw-semibold mb-3">Experiência</h5>
          <div className="d-flex flex-column gap-3">
            <div className="sobre-exp d-flex align-items-center gap-3">
              <div className="sobre-exp-icon">
                <i className="bi bi-building"></i>
              </div>
              <div>
                <div className="sobre-exp-title fw-bold">
                  Imagemario Arquitetura & Cenografia
                </div>
                <div className="sobre-exp-period text-secondary">
                  Arquiteto e Cenógrafo | Jan 2018 - Presente
                </div>
                <div className="sobre-exp-desc text-muted">
                  Projetos de cenografia, modelagem 3D, layouts humanizados e
                  BIM para eventos e espaços corporativos.
                </div>
              </div>
            </div>
            <div className="sobre-exp d-flex align-items-center gap-3">
              <div className="sobre-exp-icon">
                <i className="bi bi-building"></i>
              </div>
              <div>
                <div className="sobre-exp-title fw-bold">Freelancer</div>
                <div className="sobre-exp-period text-secondary">
                  Modelador 3D | 2015 - 2018
                </div>
                <div className="sobre-exp-desc text-muted">
                  Desenvolvimento de modelos 3D para projetos de arquitetura,
                  cenografia e visualização de ambientes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
