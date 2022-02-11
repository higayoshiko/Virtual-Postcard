import React, { useState } from "react";
import styles from "./imgApi.module.css";
import Axios from "axios";
import PropTypes from "prop-types";

const ImgApi = ({ onClickImg, onImgReset }) => {
  const [query, setQuery] = useState("");
  const [array, setArray] = useState([]);
  const [page, setPage] = useState(1);

  const clientId = process.env.REACT_APP_CLIENT_ID;
  const url = `https://api.unsplash.com/search/photos?client_id=${clientId}&query=${query}&page=${page}&per_page=16`;

  // call Unsplash
  function getData(e) {
    e.preventDefault();
    try {
      Axios.get(url).then(
        (response) => {
          setArray(response.data.results);
        },
        [query]
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className={styles.form} onSubmit={getData}>
      <div className={styles.searchBar}>
        <button className={styles.x} onClick={onImgReset}>
          x
        </button>
        <input
          className={styles.input}
          type="text"
          placeholder="Search..."
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.searchBtn} type="submit" onClick={getData}>
          Search
        </button>
      </div>

      {/* still fixing bugs of upload image*/}
      {/* < UploadImage callUpload={ (e) => setImage(e) } /> */}

      {/* get images and loop through */}
      <div className={styles.grid}>
        {array.map((url) => {
          return (
            <div key={url.id}>
              <img
                src={url.urls.full}
                alt="images"
                onClick={onClickImg}
                className={styles.img}
              />
            </div>
          );
        })}
      </div>

      {/*  previous and next buttons  */}
      <div className={styles.pageBtn}>
        <button
          className={styles.button}
          onClick={() => {
            if (page !== 1) {
              setPage((page) => page - 1);
            }
          }}
        >
          Previous
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setPage((page) => page + 1);
          }}
        >
          Next
        </button>
      </div>
    </form>
  );
};

ImgApi.propTypes = {
  onClickImg: PropTypes.func,
  onImgReset: PropTypes.func,
};
export default ImgApi;
