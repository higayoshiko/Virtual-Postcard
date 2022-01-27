import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../header/header";

const SavedPostCard = ({ authService }) => {
  const navigate = useNavigate();

  const onLogOut = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <section>
      <Header authService={authService} onLogOut={onLogOut} />
      <h1>saved postcard</h1>
    </section>
  );
};

export default SavedPostCard;
