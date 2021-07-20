import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
  FormErrors,
  EmailStatus,
} from "./contactFormElements";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ExternalLink } from "react-external-link";
import { init, sendForm } from "emailjs-com";
init("user_gQBckmhqJpB4WlV1tB0SO");

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [statusMessage, setStatusMessage] = useState("");

  const submitForm = (data) => {
    const form = document.querySelector("#contact-form");
    console.log(data);
    sendForm(
      "service_rjjos69",
      "template_uh02wsa",
      "#contact-form",
      "user_gQBckmhqJpB4WlV1tB0SO"
    ).then(
      (result) => {
        console.log(result.text);
        setStatusMessage("Message Sent!");
        form.reset();
        setTimeout(() => {
          setStatusMessage("");
        }, 5000);
      },
      (error) => {
        console.log(error.text);
        setStatusMessage(
          "Failed to send message! Please try emailing muro285@gmail.com"
        );
      }
    );
  };

  return (
    <>
      <ContactFormContainer id="contact">
        <FormWrapper>
          <form id="contact-form" onSubmit={handleSubmit(submitForm)}>
            <FormTitle>Contact Me</FormTitle>
            <InputContainer>
              <FormInputs>
                <Inputlabel>Name</Inputlabel>
                <InputField
                  id="fullName"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  {...register("name", { required: true })}
                />
                <FormErrors>{errors.name?.message}</FormErrors>
              </FormInputs>
              <FormInputs>
                <Inputlabel>Email</Inputlabel>
                <InputField
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  {...register("email", { required: true })}
                />
                <FormErrors>{errors.email?.message}</FormErrors>
              </FormInputs>
              <FormInputs>
                <Inputlabel>Message</Inputlabel>
                <InputText
                  name="message"
                  placeholder="Enter message"
                  {...register("message", { required: true })}
                />
                <FormErrors>{errors.message?.message}</FormErrors>
              </FormInputs>
              <ButtonWrapper>
                <FormButton type="submit" value="Send">
                  Send
                </FormButton>
                <EmailStatus>{statusMessage}</EmailStatus>
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
