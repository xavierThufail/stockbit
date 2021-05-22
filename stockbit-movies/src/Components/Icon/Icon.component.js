import React from 'react';
import * as IconTypes from '@ant-design/icons/';

import config from './Icon.config';

const Icon = ({ type, style, onClick, twoToneColor }) => {
  const Icons = IconTypes[type];

  return Icons
    ? (<Icons onClick={onClick} style={style} twoToneColor={twoToneColor} />)
    : (<span></span>);
};

Icon.displayName  = config.displayName;
Icon.propTypes = config.propTypes;

export default Icon;
