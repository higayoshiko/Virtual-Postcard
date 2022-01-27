import React from "react";
import EmailForm from "../emailForm/emailForm";
import Header from "../header/header";

const MakePostCard = ({ authService }) => {
  return (
    <>
      <Header authService={authService} />
      <h1>make postcard</h1>
      <EmailForm />
    </>
  );
};

export default MakePostCard;
