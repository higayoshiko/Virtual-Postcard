import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../header/header";

const SavedPostCard = ({ authService }) => {
  const onLogOut = () => {
    authService.logout();
  };

  return (
    <>
      <Header authService={authService} onLogOut={onLogOut} />
      <h1>saved postcard</h1>
    </>
  );
};

export default SavedPostCard;
