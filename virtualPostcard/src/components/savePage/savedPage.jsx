import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import EmailForm from "../emailForm/emailForm";
import Header from "../header/header";
import SavedForm from "../savedForm/savedForm";

const SavedPostCard = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "example1",
      title: "example1",
      email: "leegm17@naver.com",
      message: "post card example",
      imgName: "ji",
      imgUrl: "",
    },
    {
      id: "2",
      name: "example2",
      title: "example2",
      email: "leegm17@naver.com",
      message: "post card example",
      imgName: "ji",
      imgUrl: "",
    },
    {
      id: "2",
      name: "example3",
      title: "example3",
      email: "leegm17@naver.com",
      message: "post card example",
      imgName: "ji",
      imgUrl: "",
    },
  ]);
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
    <>
      <Header authService={authService} onLogOut={onLogOut} />
      <h1>saved postcard</h1>
      <EmailForm />
      <SavedForm />
    </>
  );
};

export default SavedPostCard;
