import React from 'react';
import { Layout, Input } from 'antd';
import * as IconTypes from '@ant-design/icons/';

import { Navbar as NavbarAntd, Icon } from '../index';
import navbarItem from '../../Constants/navbar';
import styles from './AppLayout.style';

const { Content } = Layout;

const renderLogo = () => (<h1 style={styles.logo}>Movie Stockbit</h1>);

const renderNavbar = () => (
  <div style={styles.navbar.container}>
    <div>
      {renderLogo()}
      <NavbarAntd
        items={navbarItem.sidebar}
        mode='inline'
        styleNavbar={styles.navbar.menu}
        subMenu={true}
      />
    </div>
  </div>
);

const renderSearch = () => (
  <Input
    style={styles.input}
    size="large"
    placeholder="Search"
    prefix={<Icon type='SearchOutlined' style={styles.inputIcon} />}
  />
);

const renderSidebar = (style) => (
  <div style={styles.sidebar.container}>
    {renderSearch()}
    {/* <NavbarAntd
      items={navbarItem.sidebar.social}
      mode='inline'
      styleNavbar={{...style, ...styles.sidebar.}}
    /> */}
  </div>
)

const AppLayout = ({ children }) => {
  return (
    <Layout style={styles.layout}>
      {renderNavbar()}
      <Content style={styles.content}>
        { children }
      </Content>
      {renderSidebar()}
    </Layout>
  );
};

export default AppLayout;