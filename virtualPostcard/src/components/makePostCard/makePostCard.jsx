import React from "react";
import styles from "./makePostCard.module.css";
import EmailForm from "../emailForm/emailForm";
import Header from "../header/header";
import PostCard from "../postCard/postCard";

const MakePostCard = ({ authService }) => {
  return (
    <>
      <Header authService={authService} />
      <div className={styles.section}>
        <EmailForm />
        <PostCard />
      </div>
    </>
  );
};

export default MakePostCard;
