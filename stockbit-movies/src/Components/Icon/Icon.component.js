import React from 'react';
import * as IconTypes from '@ant-design/icons/';

const Icon = ({ type, style, onClick, twoToneColor }) => {
  const Icons = IconTypes[type];

  return Icons
    ? (<Icons onClick={onClick} style={style} twoToneColor={twoToneColor} />)
    : (<span></span>);
};

Icon.displayName  = 'Icon';

export default Icon;
