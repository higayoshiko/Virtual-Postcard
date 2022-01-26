import React from "react";
import Login from "../login/login";
import Header from "../header/header";

const MakePostCard = ({ authService }) => {
  return (
    <>
      <Header authService={authService} />
      <Login authService={authService} />
      <h1>make postcard</h1>
    </>
  );
};

export default MakePostCard;
