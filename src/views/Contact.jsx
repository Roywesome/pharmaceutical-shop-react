import React from "react";
import FormContact from "../components/FormContact";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactWrapperStyled>
      <h1>¡Contáctame!</h1>
      <h4>Dejanos tu mensaje y nos contactaremos a la brevedad</h4>
      <FormContact />
    </ContactWrapperStyled>
  );
};

export default Contact;

const ContactWrapperStyled = styled.div`
  background-color: #fff;
  height: 84.2vh;

  h1,
  h4 {
    padding-top: 2rem;
    font-family: "Source Code Pro", monospace;
    text-align: center;
    color: #000;
  }
`;
