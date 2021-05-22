import React from 'react';

import './TouchableOpacity.component.css';
import config from './TouchableOpacity.config';

const TouchableOpacity = ({ children, onClick, style }) => (
  <div
    onClick={onClick}
    style={style}
    className='touchable'
  >
    {children}
  </div>
);

TouchableOpacity.propTypes = config.propTypes;
TouchableOpacity.displayName = config.displayName;

export default TouchableOpacity;
