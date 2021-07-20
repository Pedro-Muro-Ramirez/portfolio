import React from "react";
import emailjs from "emailjs-com";
import {
  ContactFormContainer,
  FormWrapper,
  FormTitle,
  FormInputs,
  FormButton,
  InputContainer,
  Inputlabel,
  InputField,
  InputText,
  ButtonWrapper,
  Linked,
  Icons,
} from "./contactFormElements";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ExternalLink } from "react-external-link";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rjjos69",
        "template_uh02wsa",
        e.target,
        "user_gQBckmhqJpB4WlV1tB0SO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <ContactFormContainer id="contact">
        <FormWrapper>
          <form onSubmit={sendEmail}>
            <FormTitle>Contact Me</FormTitle>
            <InputContainer>
              <FormInputs>
                <Inputlabel>Name</Inputlabel>
                <InputField
                  id="fullName"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                />
              </FormInputs>
              <FormInputs>
                <Inputlabel>Email</Inputlabel>
                <InputField
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                />
              </FormInputs>
              <FormInputs>
                <Inputlabel>Message</Inputlabel>
                <InputText name="message" placeholder="Enter message" />
              </FormInputs>
              <ButtonWrapper>
                <FormButton type="submit" value="Send">
                  Send
                </FormButton>
              </ButtonWrapper>
              <Linked>
                <ExternalLink href="https://www.linkedin.com/in/pedro-muro-ramirez-228272132/">
                  <Icons>
                    <FaLinkedin size="25px" />
                  </Icons>
                </ExternalLink>
                <ExternalLink href="https://github.com/Pedro-Muro-Ramirez">
                  <Icons>
                    <FaGithub size="25px" />
                  </Icons>
                </ExternalLink>
              </Linked>
            </InputContainer>
          </form>
        </FormWrapper>
      </ContactFormContainer>
    </>
  );
};

export default ContactForm;
