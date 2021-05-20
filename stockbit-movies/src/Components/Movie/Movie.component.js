import React from 'react';
import { Button } from 'antd';

import styles from './Movie.style';

const Movie = ({ Title, Year, imdbID, Type, Poster }) => {
  return (
    <div style={styles.container}>
      <Button style={styles.imgBtn(Poster)} >Btn</Button>
      <div style={styles.content}>
        <h2 style={styles.title}>{Title}</h2>
        <p>{Year}</p>
        <p>{Type}</p>
      </div>
    </div>
  );
};

export default Movie;