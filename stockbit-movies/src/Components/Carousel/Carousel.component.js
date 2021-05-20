import React from 'react';
import { Carousel as AntdCarousel } from 'antd';

import imageUrl from '../../Constants/carousel';
import styles from './Carousel.style';

const Carousel = ({ height = '200px', margin, width }) => {
  return (
    <AntdCarousel autoplay>
      {imageUrl.map(url => (
        <div>
          <div style={{...styles(url), height, width, margin}} />
        </div>
      ))}
    </AntdCarousel>
  );
};

export default Carousel;
