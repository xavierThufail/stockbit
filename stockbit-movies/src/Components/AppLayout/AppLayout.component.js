import React from 'react';
import { Layout, Input, Spin } from 'antd';
import { useHistory } from 'react-router-dom';

import { Navbar as NavbarAntd, Icon, TouchableOpacity } from '../index';
import navbarItem from '../../Constants/navbar';
import useLayout from './AppLayout.hook';
import routePaths from '../../Constants/routePaths';
import styles from './AppLayout.style';
import config from './AppLayout.config';

const { Content } = Layout;

const renderLogo = (handleClickLogo) => (
  <TouchableOpacity onClick={handleClickLogo} >
    <h1 style={styles.logo}>Movie Stockbit</h1>
  </TouchableOpacity>
);

const renderNavbar = (handleClickLogo) => (
  <div style={styles.navbar.container}>
    <div>
      {renderLogo(handleClickLogo)}
      <NavbarAntd
        items={navbarItem.sidebar}
        mode='inline'
        styleNavbar={styles.navbar.menu}
        subMenu={true}
      />
    </div>
  </div>
);

const renderSearch = ({ handleSearch }) => (
  <Input
    style={styles.input}
    size="large"
    placeholder="Search"
    prefix={<Icon type='SearchOutlined' style={styles.inputIcon} />}
    onChange={handleSearch}
  />
);

const renderSidebar = ({ handleSearch }) => (
  <div style={styles.sidebar.container}>
    {renderSearch({ handleSearch })}
  </div>
)

const AppLayout = ({ children }) => {
  const { loading, handleSearch } = useLayout();
  const history = useHistory();

  const redirectToDashboard = () => history.push(routePaths.DASHBOARD);

  return (
    <Spin size='large' style={styles.loading} spinning={loading}>
      <Layout style={styles.layout}>
        {renderNavbar(redirectToDashboard)}
        <Content style={styles.content}>
          { children }
        </Content>
        {renderSidebar({ handleSearch })}
      </Layout>
    </Spin>
  );
};

AppLayout.displayName = config.displayName;
AppLayout.propTypes = config.propTypes;

export default AppLayout;