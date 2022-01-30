import React, { useState } from 'react';
import Axios from 'axios';
import Card from "../card/Card";
import styles from './Grid.module.css'

function Grid() {

  const [inputText, setInput] = useState("");
  const [post, setPost] = useState([]);
  const [image, setImage] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  function sendInput(e) {
    e.preventDefault();

    try {
      Axios.post("http://localhost:8000/sendInput", {
        inputText
      });
      Axios.get("http://localhost:3000/getImagesArray").then(response => {
        setPost(response.data.imagesArray);
      }, []);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  function sendImage(e) {
    setImage(e.target.src);
  }

  return <div className = {styles.container} >
    < div className = { styles.grid_2_column } >
    < Card imageTarget = { image } />
    < form className = { styles.form } onSubmit = { handleChange } >
    < div className = { styles.searchBar } >
    < input className = { styles.input }
    type = "text"
    onChange = { handleChange }
    placeholder = "Search..."
    value = { inputText } />
    < button className = { styles.button }
    type = "submit"
    onClick = { sendInput } > Search
    < /button >
    < /div>
    < div className = { styles.grid_3_columns } >
    { post.map(url => { return <div key = { url.id } >
    < div >
    < img src = { url }
    alt = "images"
    onClick = { sendImage }
    className = { styles.img } />
    < /div >
    </div > })}
    < /div >
    < /form >
    < /div >
    < /div >
}

export default Grid;
