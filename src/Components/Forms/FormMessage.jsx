import React, { useState } from "react";
import { css, StyleSheet } from "aphrodite/no-important";
import ButtonOk from "../OtherComponents/ButtonOk";

const styleSheet = StyleSheet.create({
  formMessage: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    background: "#65E841",
    border: "1px solid black",
    borderRadius: 5,
    boxShadow: "3px 3px 5px black"
  },
  textArea: {
    width: "90%",
    height: 100
  }
});

const FormMessage = () => {
  const [textMessage, setTextMassage] = useState("");
  const [autorName, setAutorName] = useState("");
  const [autorMail, setAutorMail] = useState("");
  return (
    <form className={css(styleSheet.formMessage)}>
      <h2>Сообщение</h2>
      <textarea
        className={css(styleSheet.textArea)}
        name="message"
        value={textMessage}
        onChange={({ target: { value } }) => setTextMassage(value)}
      />
      <h3>
        Представьтесь пожалуйста
        <input
          name="name"
          type="text"
          value={autorName}
          onChange={({ target: { value } }) => setAutorName(value)}
        />
      </h3>
      <h3>
        Ваш адрес{" "}
        <input
          name="adress"
          type="adress"
          value={autorMail}
          onChange={({ target: { value } }) => setAutorMail(value)}
        />
      </h3>
      <ButtonOk
        onClick={() => {
          alert("click");
        }}
      />
    </form>
  );
};

export default FormMessage;
