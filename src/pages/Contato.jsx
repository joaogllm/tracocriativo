import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contato.css";

const schema = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  mensagem: yup.string().required("Mensagem é obrigatória"),
});

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Adiciona classe ao body quando a página carrega
  useEffect(() => {
    document.body.classList.add("contact-page-body");

    // Remove a classe quando o componente é desmontado
    return () => {
      document.body.classList.remove("contact-page-body");
    };
  }, []);

  const onSubmit = (data) => {
    reset();
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="row">
          {/* Área de informações de contato - Esquerda */}
          <div className="col-md-6">
            <div className="contact-info-section">
              <h1 className="contact-title">Contact</h1>

              <p className="contact-text">
                <strong>
                  Imagemario é uma empresa de Arquitetura e Cenografia.
                </strong>
              </p>
              <p className="contact-text">
                Trabalhamos com modelos 3D, Layouts Humanizados e Projetos BIM
              </p>
              <p className="contact-text">
                Email: tracocriativo1235345@gmail.com
              </p>

              <hr className="contact-divider" />

              <div className="contact-message">
                <p className="contact-text">
                  Aqui você pode me enviar suas dúvidas, sugestões e projetos.
                </p>
                <p className="contact-text">Vou olhar todas.</p>
                <p className="contact-text">
                  Mesmo que não seja o seu caso, pode enviar, vou adorar saber o
                  que você tem a dizer.
                </p>
              </div>

              <p className="contact-text">
                Você pode também entrar em contato pelo número de celular:
              </p>
              <p className="contact-text">
                <strong>+55 (21) 99999-9999</strong>
              </p>
            </div>
          </div>

          {/* Formulário - Direita */}
          <div className="col-md-6">
            {isSubmitSuccessful ? (
              <div className="alert alert-success contact-alert" role="alert">
                Thank you!
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-group">
                  <label className="form-label">Name*</label>
                  <input
                    type="text"
                    className={`form-control contact-input${
                      errors.nome ? " is-invalid" : ""
                    }`}
                    placeholder="First Name"
                    {...register("nome")}
                  />
                  {errors.nome && (
                    <div className="invalid-feedback">
                      {errors.nome.message}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address*</label>
                  <input
                    type="email"
                    className={`form-control contact-input${
                      errors.email ? " is-invalid" : ""
                    }`}
                    placeholder="Email Address"
                    {...register("email")}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Subject*</label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    placeholder="Subject"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message*</label>
                  <textarea
                    className={`form-control contact-input${
                      errors.mensagem ? " is-invalid" : ""
                    }`}
                    rows={4}
                    placeholder="Message"
                    {...register("mensagem")}
                  />
                  {errors.mensagem && (
                    <div className="invalid-feedback">
                      {errors.mensagem.message}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn contact-btn">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
