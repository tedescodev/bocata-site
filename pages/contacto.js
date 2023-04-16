import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

import SuperGymProLayout from "../components/layout/SuperGymProLayout";
import HeaderPages from "../components/ui/HeaderPages";

import { FormGroup, Form, MessageError } from "../components/form/style";
import InputComponent from "../components/form/Input";
import ButtonComponent from "../components/form/Button";
import TextAreaComponent from "../components/form/TextArea";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import NavDesktop from "../components/layout/nav/NavDesktop";
import MenuBar from "../components/ui/MenuBar";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    ${(props) =>
    !props.justifyContent && `justify-content: start;`}
  }
`;

export default function Contacto() {
  const [form, setForm] = useState({
    name: { value: "", isValid: null },
    email: { value: "", isValid: null },
    message: { value: "", isValid: null },
  });
  const [isValidForm, setIsValidForm] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  const [file, setFile] = useState(null);
  const [feedbackError, setFeedbackError] = useState(null);

  const emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const nameReg = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
  const areaReg = /^[-\w]+(?:\W+[-\w]+){0,299}\W*$/; // Permitimos un mínimo de 10 palabras y un máximo de 300.

  const handleChangeName = (state) => setForm({ ...form, name: state });
  const handleChangeEmail = (state) => setForm({ ...form, email: state });
  const handleChangeMessage = (state) => setForm({ ...form, message: state });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      form.name.isValid === "true" &&
      form.email.isValid === "true" &&
      form.message.isValid === "true"
    ) {
      setIsValidForm(true);
      let body = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      };
      if (file) body.file = file;
      try {
        const response = await fetch(
          `https://super-gym-cms.tejo.uy/v1/api/contact`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(body),
          }
        );
        if (response.status !== 201) {
          setFeedbackError(() => "No pudimos enviar el formulario.");
          setIsValidForm(false);
          return;
        }
        setIsValidForm(null);
        setEmailSent(!emailSent);
      } catch (err) {
        debugger;
        setFeedbackError(() => "Ha ocurrido un error inesperado.");
        setIsValidForm(false);
      }
    } else {
      setFeedbackError(() => "Por favor rellena el formulario correctamente.");
      setIsValidForm(false);
    }
  };

  const handleFile = function (e) {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    isValidForm === false &&
      setTimeout(() => {
        setIsValidForm(null);
      }, 4000);
  }, [isValidForm]);

  return (
    <div className={styles.pageContacto}>
      <Head>
        <title>Contacto</title>
        <meta
          name="description"
          content="Contactate para recibir asesoramiento profesional"
        />
      </Head>
      <NavDesktop />
      <MenuBar className="only-mobile" nonGradient />
      <HeaderPages backgroundBlack={true} heightContact nonMenuBar>
        <Content>
          <div>
            <h2>CONTACTATE</h2>
            <h4>Contactate para recibir asesoramiento profesional</h4>
          </div>
        </Content>
      </HeaderPages>
      {!emailSent && (
        <section className={`${styles.contentPages}`}>
          <div className="display-flex space-between">
            <Content display="flex" justifyContent="center">
              <Form onSubmit={handleSubmit} width="340px">
                <FormGroup>
                  <InputComponent
                    id="name"
                    name="Nombre"
                    type="text"
                    placeholder="Nombre"
                    state={form.name}
                    regex={nameReg}
                    errorMsg="Debe ingresar un nombre sin caracteres especiales, ni puntos, ni guiones."
                    handleChange={handleChangeName}
                  />
                </FormGroup>
                <FormGroup>
                  <InputComponent
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@mail.com"
                    state={form.email}
                    regex={emailReg}
                    errorMsg="Debe ingresar un email válido."
                    handleChange={handleChangeEmail}
                  />
                </FormGroup>
                <FormGroup>
                  <TextAreaComponent
                    name="Mensaje"
                    placeholder="Escribe aquí tu mensaje"
                    rows="5"
                    regex={areaReg}
                    state={form.message}
                    errorMsg="Debe ingresar un mínimo de 1 palabra y un máximo de 300."
                    handleChange={handleChangeMessage}
                  ></TextAreaComponent>
                </FormGroup>
                <FormGroup>
                  <input
                    id="upload"
                    type="file"
                    className="hidden"
                    onChange={handleFile}
                  />
                  <ButtonComponent
                    type="button"
                    onClick={() => {
                      document.querySelector("#upload").click();
                    }}
                    variant="btn3"
                  >
                    Adjuntar archivos
                  </ButtonComponent>
                  {file && (
                    <label style={{ marginLeft: "5px" }}>Adjuntado</label>
                  )}
                </FormGroup>
                <FormGroup textRigth>
                  <ButtonComponent type="submit" variant="btn1">
                    Enviar
                  </ButtonComponent>
                </FormGroup>

                {isValidForm === false && (
                  <MessageError>
                    <p>
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                      <b>Error:</b> {feedbackError}
                    </p>
                  </MessageError>
                )}
              </Form>
            </Content>
            <div className={styles.imgRight}></div>
          </div>
        </section>
      )}
      {emailSent && (
        <section id="sectionResponse" className={`${styles.contentPages}`}>
          <div className="display-flex space-between">
            <Content display="row">
              <Container>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ fontSize: "10vh", color: "black" }}
                />
              </Container>
              <h2 className="uppercase">
                ¡Gracias por comunicarte con SuperGym Pro!
              </h2>
              <h5 className="margin0">Tu mensaje ha sido enviado con éxito.</h5>
              <h5 className="margin0">
                Nuestros asesores se estarán comunicando contigo a la brevedad.
              </h5>
              <h5 className="margin0">
                Mientras tanto puedes descargar nuestro catálogo de productos
                haciendo{" "}
                <Link href="/catalogo">
                  <a>
                    <h5 className="uppercase decoration-underline margin0">
                      click aquí.
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
            </Content>
            <div className={styles.imgRight}></div>
          </div>
        </section>
      )}
    </div>
  );
}

Contacto.Layout = SuperGymProLayout;
