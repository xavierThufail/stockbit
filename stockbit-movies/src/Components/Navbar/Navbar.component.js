import React from 'react';
import { Menu } from 'antd';
import * as IconTypes from '@ant-design/icons/';

import './Navbar.component.css';
import styles from './Navbar.style.js';

const Title = ({title}) => (<p style={styles.title}>{title}</p>);

const groupMapping = (items) => {
  const titleGroups = [];

  for (const [key] of Object.entries(items)) {
    titleGroups.push(key);
  };

  return titleGroups.map(key => {
    let title = key.split('');
    title[0] = title[0].toUpperCase();
    title = title.join('');

    return (
      <Menu.ItemGroup title={<Title title={title} />}>
        {items[key].map(itemMapping())}
      </Menu.ItemGroup>
    )}
  )
}

const itemMapping = (style) => (item, index) => {
  const Icon = IconTypes[item.icon];
  
  return (
    <Menu.Item key={item.key} style={style} icon={item.icon ? (<Icon />) : (<div />) }>
      {item.title}
    </Menu.Item>
  )
}

const Navbar = ({ items, styleNavbar, styleItem, mode, onClick, subMenu }) => (
  <Menu style={ styleNavbar } mode={mode} onClick={onClick} >
    {subMenu
    ? groupMapping(items)
    : items.map(itemMapping(styleItem))}
  </Menu>
);

export default Navbar;