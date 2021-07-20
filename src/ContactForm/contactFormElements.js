import styled from "styled-components";

export const ContactFormContainer = styled.div`
  color: #fff;
  background: #1d2122;
  height: 900px;
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  margin: 150px auto 0;
`;

export const InputContainer = styled.div`
  height: 200px;
  width: 400px;
  margin: 0 auto;
  text-align: left;

  @media screen and (max-width: 480px) {
    width: 250px;
  }
`;

export const FormTitle = styled.h1`
  font-size: 70px;
  text-align: center;
  margin: 0 auto 40px;
  color: #33dac4;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const FormInputs = styled.div`
  margin-bottom: 20px;
  flex-basis: 100%;
`;

export const Inputlabel = styled.label`
  display: inline-block;
  font-size: 1.5rem;
  margin-bottom: 6px;
`;

export const InputField = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
`;

export const InputText = styled.textarea`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
`;

export const ButtonWrapper = styled.div`
  flex-basis: 100%;
  margin-bottom: 20px;
`;

export const FormButton = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 15px;

  text-align: center;
  background-color: #fff;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: limegreen;
  }
`;

export const Linked = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Icons = styled.i`
  color: white;
  cursor: pointer;
`;

export const FormErrors = styled.p`
  color: red;
`;

export const EmailStatus = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: limegreen;
`;
