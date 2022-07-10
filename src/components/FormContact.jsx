import React from "react";
import styled from "styled-components";
import { RiMailSendLine } from "react-icons/ri";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillCopyrightCircle,
} from "react-icons/ai";

const FormContact = () => {
  return (
    <FormWrapperStyled>
      <form
        target="_blank"
        action="https://formsubmit.co/inf.roycd@gmail.com"
        method="POST"
      >
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Nombre"
            required
          />
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Mensaje"
            className="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <ButtonStyled type="submit" className="btn btn-lg btn-dark btn-block">
          Enviar Mensaje <RiMailSendLine />
        </ButtonStyled>
      </form>
      <IconsContainerStyled>
        <div className="icons-social">
          <a
            className="icon"
            href="https://github.com/roywesome"
            target="_blank"
          >
            <AiFillGithub />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/roycerdan/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a className="icon" href="https://wa.link/c7m4jo" target="_blank">
            <AiOutlineWhatsApp />
          </a>
        </div>
        <span className="copyright">
          <AiFillCopyrightCircle /> ALL OF THE RIGHTS RESERVED BY ROY
        </span>
      </IconsContainerStyled>
    </FormWrapperStyled>
  );
};

export default FormContact;

const FormWrapperStyled = styled.div`
  font-family: "Source Code Pro", monospace;
  margin: 0 20%;
  padding: 5rem;
  display: grid;
  grid-template-columns: 50% 50%;

  .form-control {
    font-family: "Source Code Pro", monospace;
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
  }
`;

const IconsContainerStyled = styled.div`
  padding: 3rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .icons-social {
    .icon {
      color: #000;
      margin: 0 2rem;
    }
  }

  .copyright {
    margin-top: 1.5rem;
    padding: 1.5rem;
    border-top: 1px solid #000;
    font-size: 1rem;
    color: #000;
  }
`;

const ButtonStyled = styled.button`
  font-family: "Source Code Pro", monospace;
  background-color: #1b9aaa;
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem 0;
  border-radius: 2rem;
  color: #edf2f4;
  border: none;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #56cfe1;
    color: #000;
  }
`;
