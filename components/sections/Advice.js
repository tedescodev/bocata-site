import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import contactanos from "../../public/assets/plano_form.png";

import styles from "../../styles/Home.module.css";
import styled from "styled-components";

import { FormGroup, Form, MessageError, MessageSuccess } from "../form/style";

import InputComponent from "../form/Input";
import ButtonComponent from "../form/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  padding: 30px;
  display: ${(props) => props.display && props.display};
  justify-content: center;
  align-items: center;
  width: 100%;
  ${(props) =>
    props.widthInherit &&
    css`
      width: inherit;
    `}
`;

export default function Advice() {
  const [form, setForm] = useState({
    name: { value: "", isValid: null },
    email: { value: "", isValid: null },
    phone: { value: "", isValid: null },
  });

  const [isValidForm, setIsValidForm] = useState(null);
  const [disabledButtonForm, setDisabledButtonForm] = useState(true);
  const [emailSent, setEmailSent] = useState(false);

  const emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const nameReg = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
  const phoneReg = /^\d{7,14}$/; // 7 a 14 numeros.

  const handleChangeName = (state) => setForm({ ...form, name: state });
  const handleChangePhone = (state) => setForm({ ...form, phone: state });
  const handleChangeEmail = (state) => setForm({ ...form, email: state });

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (
        form.name.isValid === "true" &&
        form.phone.isValid === "true" &&
        form.email.isValid === "true"
      ) {
        setIsValidForm(true);
        const response = await fetch(
          `https://bocata.tedesco.es/v1/api/contact/advice`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              name: form.name.value,
              phone: form.phone.value,
              email: form.email.value,
            }),
          }
        );
        if (response.status === 201) {
          setForm({
            name: { value: "", isValid: null },
            email: { value: "", isValid: null },
            phone: { value: "", isValid: null },
          });
          setIsValidForm(null);
          setEmailSent(!emailSent);
        }
      } else {
        setIsValidForm(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      form.name.isValid === "true" &&
      form.phone.isValid === "true" &&
      form.email.isValid === "true"
    ) {
      setDisabledButtonForm(() => false);
    } else {
      setDisabledButtonForm(() => true);
    }
  }, [form]);

  return (
    <section className={`${styles.padding60} background-grey-mobile`}>
      <div className={`${styles.contact} container-text`}>
        {!emailSent && (
          <div className="padding-right-60">
            <h2 className="margin0">Asesorate</h2>
            <h5 className="margin0">
              Completa el formulario y te contactamos en menos de dos horas!
            </h5>
            <Form onSubmit={handleSubmit}>
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
                  id="phone"
                  name="Teléfono"
                  type="text"
                  placeholder="099 000 000"
                  state={form.phone}
                  regex={phoneReg}
                  errorMsg="Debe ingresar un número de 7 a 14 caracteres."
                  handleChange={handleChangePhone}
                />
              </FormGroup>
              <FormGroup>
                <InputComponent
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ejemplo@mail.com"
                  state={form.email}
                  regex={emailReg}
                  errorMsg="Debe ingresar un email válido."
                  handleChange={handleChangeEmail}
                />
              </FormGroup>

              <FormGroup className="text-right">
                <ButtonComponent
                  id="btnSubmit1"
                  type="submit"
                  variant="btn1"
                  disabled={disabledButtonForm}
                >
                  Enviar
                </ButtonComponent>
              </FormGroup>
              {isValidForm === false && (
                <MessageError>
                  <p>
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                    <b>Error:</b> Por favor rellena el formulario correctamente.
                  </p>
                </MessageError>
              )}
            </Form>
          </div>
        )}
        {emailSent && (
          <div className="display-flex space-between">
            <Content display="row">
              <IconContainer>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ fontSize: "10vh", color: "black" }}
                />
              </IconContainer>
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
              {/* <Link href="/supergympro">
                <a>
                  <h5 className="uppercase decoration-underline">
                    Volver a la página de inicio
                  </h5>
                </a>
              </Link> */}
            </Content>
          </div>
        )}
        <div className="padding-left-60 vertical-center text-center">
          <Image alt="contacto" src={contactanos} />
        </div>
      </div>
    </section>
  );
}
