import React from 'react';
import { Button } from 'antd';

import { TouchableOpacity } from '../index';
import styles from './Movie.style';
import config from './Movie.config';

const Movie = ({ Title, Year, imdbID, Type, Poster, onClick, handleOpenModal }) => {
  return (
    <div style={styles.container}>
      <TouchableOpacity onClick={handleOpenModal(Poster)}>
        <img alt='img' src={Poster} style={styles.imgBtn} />
      </TouchableOpacity>
      <TouchableOpacity onClick={onClick} style={styles.content}>
        <h2 style={styles.title}>{Title}</h2>
        <p>{Year}</p>
        <p>{Type}</p>
      </TouchableOpacity>
    </div>
  );
};

Movie.displayName = config.displayName;
Movie.propTypes = config.propTypes;

export default Movie;