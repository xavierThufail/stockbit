import React from 'react';
import { Row, Col, Spin } from 'antd';

import { Navbar, Carousel, Movie, TouchableOpacity, Modal } from '../../Components';
import navbarItem from '../../Constants/navbar';

const renderNavbar = (style) => (
  <Navbar
    items={navbarItem.dashboard}
    styleNavbar={{...style, backgroundColor: 'transparent', color: '#8f8f8f', borderBottom: 'none', fontWeight: 'bold'}}
    mode='horizontal'
  />
);

const renderMovie = ({ movie, index, handleToDetail, handleOpenModal }) => (
  <Movie {...movie} onClick={handleToDetail(movie)} key={index} handleOpenModal={handleOpenModal} />
);

const renderModal = ({ showModal, handleCloseModal, imgUrl }) => (
  <Modal
    handleClose={handleCloseModal}
    visible={showModal}
    destroyOnClose={true}
    url={imgUrl}
  />
)

const renderContent = ({ listMovies, lastPage, loader, handleToDetail, showModal, handleCloseModal , handleOpenModal, imgUrl }) => (
  <Col style={{ width: '100%' }}>
    {renderNavbar()}
    <Carousel margin={24} height={350} />
    {listMovies && listMovies.map((movie, index) => renderMovie({ movie, index, handleToDetail, handleOpenModal }))}
    <div ref={loader} />
    {(!lastPage) && <div style={{ width: '100%' }} >
      <Spin style={{ width: '100%' }} />
    </div>}
    {renderModal({ showModal, handleCloseModal, imgUrl })}
  </Col>
);

const DashboardComponent = (props) => (
  <Row style={{ overflowY: 'scroll', height: '100%' }}>
    {renderContent(props)}
  </Row>
);

export default DashboardComponent;