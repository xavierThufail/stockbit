import React from 'react';
import { Menu } from 'antd';
import * as IconTypes from '@ant-design/icons/';
import { useHistory } from 'react-router-dom';

import routePaths from '../../Constants/routePaths';
import './Navbar.component.css';
import styles from './Navbar.style.js';
import config from './Navbar.config';

const Title = ({title}) => (<p style={styles.title}>{title}</p>);

const groupMapping = (items, history) => {
  const titleGroups = [];

  for (const [key] of Object.entries(items)) {
    titleGroups.push(key);
  };

  return titleGroups.map((key, index) => {
    let title = key.split('');
    title[0] = title[0].toUpperCase();
    title = title.join('');

    return (
      <Menu.ItemGroup title={<Title title={title} />} key={index} >
        {items[key].map(itemMapping({}, history))}
      </Menu.ItemGroup>
    )}
  )
};

const mappingHandleClick = ({ title }, history) => {
  return title === 'Home'
    ? () => history.push(routePaths.DASHBOARD)
    : () => {console.log('Hahahahaha')};
}

const itemMapping = (style, history) => (item, index) => {
  const Icon = IconTypes[item.icon];
  
  return (
    <Menu.Item onClick={mappingHandleClick(item, history)} key={item.key} style={style} icon={item.icon ? (<Icon />) : (<div />) }>
      {item.title}
    </Menu.Item>
  )
};

const Navbar = ({ items, styleNavbar, styleItem, mode, onClick, subMenu }) => {
  const history = useHistory();

  return (
    <Menu style={ styleNavbar } mode={mode} onClick={onClick} >
      {subMenu
      ? groupMapping(items, history)
      : items.map(itemMapping(styleItem))}
    </Menu>
  );
};

Navbar.displayName = config.displayName;
Navbar.propTypes = config.propTypes;

export default Navbar;