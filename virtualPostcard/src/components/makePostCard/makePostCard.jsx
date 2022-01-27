import React from "react";
import Header from "../header/header";

const MakePostCard = ({ authService }) => {
  return (
    <>
      <Header authService={authService} />
      <h1>make postcard</h1>
    </>
  );
};

export default MakePostCard;
