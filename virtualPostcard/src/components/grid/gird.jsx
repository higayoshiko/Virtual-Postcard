// Previous one
import React, { useState } from "react";
import Axios from "axios";
import DisplayImage from "../displayImage/DisplayImage";
// import UploadImage from "../uploadImage/UploadImage";
import styles from "./Grid.module.css";

function Grid() {
  const [query, setQuery] = useState("");
  const [array, setArray] = useState([]);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState("");

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

  // useEffect(() => {
  // setImage(image)
  // }, [image]);

  return (
    <section className={styles.container}>
      <div className={styles.grid_2_columns}>
        {/* display image to other side */}

        <DisplayImage imageTarget={image} />

        <form className={styles.form} onSubmit={getData}>
          <label htmlFor="query"> </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Search..."
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.button} type="submit" onClick={getData}>
            Search
          </button>

          {/* still fixing bugs of upload image*/}
          {/* < UploadImage callUpload={ (e) => setImage(e) } /> */}

          {/* get images and loop through */}
          <div className={styles.grid_4_columns}>
            {array.map((url) => {
              return (
                <div key={url.id}>
                  <img
                    src={url.urls.full}
                    alt="images"
                    onClick={(e) => setImage(e.target.src)}
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
      </div>
    </section>
  );
}

export default Grid;
