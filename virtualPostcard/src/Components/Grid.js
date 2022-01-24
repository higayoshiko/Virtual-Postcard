import React from 'react';
import axios from 'axios';

export default class Grid extends React.Component {

  constructor() {
    super();
    this.state = {
      images: [],
      id: []
    };
  }

  componentDidMount = () => {
    axios.get("/getImagesArray").then(response => {
      this.setState({
        images: response.data.imagesArray,
        id: response.data.imagesId
      })
    });
  };

  render() {
  return this.state.images.map(item => {
        return <div key={item.id}>
          <img src={item} alt="images" />
          </div>
    });
  }
}
