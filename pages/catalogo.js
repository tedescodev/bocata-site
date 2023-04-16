import React, { useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";

import SuperGymProLayout from "../components/layout/SuperGymProLayout";
import HeaderPages from "../components/ui/HeaderPages";

import Caminadores from "../public/assets/caminadores_iconos.png";

import {
  FormGroup,
  Form,
  MessageError,
  FeedbackError,
} from "../components/form/style";
import InputComponent from "../components/form/Input";
import ButtonComponent from "../components/form/Button";

import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import NavDesktop from "../components/layout/nav/NavDesktop";
import MenuBar from "../components/ui/MenuBar";

// import BASE_CONNECTION_STRING from "../config"

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.section`
  background-color: #e5e5e5;
  position: relative;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 2%;
  padding-bottom: 5%;
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const SectionContainer = styled.div`
  max-width: 1400px;
  height: 100%;
  @media (min-width: 768px) {
    width: 100%;
    margin: 50px;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

export default function Catalogo() {
  const [form, setForm] = useState({ email: { value: "", isValid: null } });
  const [isValidForm, setIsValidForm] = useState(null);

  const [disabledButton, setDisabledButton] = useState(true);

  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const [errorValidation, setErrorValidation] = useState({
    status: false,
    message: "",
  });

  const emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const handleChange = (state) => setForm({ ...form, email: state });

  useEffect(() => {
    if (form.email.isValid === "true") {
      setDisabledButton(false);
    } else if (form.email.isValid !== null) {
      setDisabledButton(true);
      setErrorValidation({
        status: true,
        message: "Debe ingresar un email válido.",
      });
    }
  }, [form]);

  const sendMail = async (event) => {
    event.preventDefault();
    if (form.email.isValid) {
      setIsValidForm(true);
      const response = await fetch(
        `https://super-gym-cms.tejo.uy/v1/api/contact/catalogue`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: form.email.value }),
        }
      );
      if (response.status !== 201) {
        setError({
          status: true,
          message:
            "Lo sentimos, no pudimos procesar la solicitud. Inténtalo denuevo!",
        });
        return;
      }
      setIsValidForm(null);
      setEmailSent(!emailSent);
    } else {
      setIsValidForm(false);
      return;
    }
  };

  return (
    <div className={styles.pageCatalogo}>
      <Head>
        <title>Catalogo</title>
      </Head>
      <NavDesktop />
      <MenuBar className="only-mobile" nonGradient />
      <HeaderPages shortVersion={true} onlyDesktop={true} nonMenuBar />
      <Section>
        <SectionContainer>
          {!emailSent && (
            <section id="sectionForm">
              <div className={`${styles.contact} container-text`}>
                <div className={`${styles.textCatalogo} content`}>
                  <h2 className="uppercase">Decargá el catálogo</h2>
                  <h5 className="margin0">
                    Ingresa el mail en el que quieras recibir el catálogo
                  </h5>
                  <Form onSubmit={sendMail}>
                    <FormGroup inline>
                      <InputComponent
                        inline
                        width="300px"
                        nonLabel
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@mail.com"
                        state={form.email}
                        regex={emailReg}
                        handleChange={handleChange}
                      />
                      <ButtonComponent
                        id="btnSendMail"
                        type="submit"
                        disabled={disabledButton}
                        variant="btn1"
                        inline
                      >
                        Enviar
                      </ButtonComponent>
                    </FormGroup>
                    {errorValidation.status && (
                      <FeedbackError isValid={form.email.isValid}>
                        {errorValidation.message}
                      </FeedbackError>
                    )}
                    {error.status && (
                      <MessageError>
                        <p>
                          <FontAwesomeIcon icon={faExclamationTriangle} />
                          <b>Error:</b> {error.message}
                        </p>
                      </MessageError>
                    )}

                    {isValidForm === false && (
                      <MessageError>
                        <p>
                          <FontAwesomeIcon icon={faExclamationTriangle} />
                          <b>Error:</b> Por favor rellena el formulario
                          correctamente.
                        </p>
                      </MessageError>
                    )}
                  </Form>
                  <Link href="/supergympro">
                    <a>
                      <h5 className="uppercase decoration-underline">
                        Volver a la página de inicio
                      </h5>
                    </a>
                  </Link>
                </div>
                <div className={styles.ImagenPageBox}>
                  <Image src={Caminadores} layout="raw" alt="Caminadoresdiv" />
                </div>
              </div>
            </section>
          )}
          {emailSent && (
            <section
              id="sectionResponse"
              className={`${styles.padding60} ${styles.contentPages}`}
            >
              <div className="display-flex space-between container-text">
                <div className="content">
                  <h2 className="uppercase">¡Gracias!</h2>
                  <h5 className="margin0 uppercase">
                    El catálogo ha sido enviado a <b>{form.email.value}</b>
                  </h5>
                  <h5 className="margin0 uppercase">
                    Si quiere asesoramiento personal puede contactarse haciendo{" "}
                    <Link href="/contacto">
                      <a>
                        <h5 className="uppercase decoration-underline margin0">
                          click aquí
                        </h5>
                      </a>
                    </Link>
                  </h5>
                  <Link href="/supergympro">
                    <a>
                      <h5 className="uppercase decoration-underline">
                        Volver a la página de inicio
                      </h5>
                    </a>
                  </Link>
                </div>
                <IconContainer>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ fontSize: "19vh", color: "black" }}
                  />
                </IconContainer>
              </div>
            </section>
          )}
        </SectionContainer>
      </Section>
    </div>
  );
}

Catalogo.Layout = SuperGymProLayout;
