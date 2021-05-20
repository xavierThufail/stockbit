import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';

import { Navbar, Carousel, Movie } from '../../Components';
import navbarItem from '../../Constants/navbar';

const data = {
  "Title": "Naruto: Shippûden",
  "Year": "2007–2017",
  "imdbID": "tt0988824",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTE5NzIwMGUtYTE1MS00MDUxLTgyZjctOWVkZDAxM2M4ZWQ4XkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_SX300.jpg"
}

const renderNavbar = (style) => (
  <Navbar
    items={navbarItem.dashboard}
    styleNavbar={{...style, backgroundColor: 'transparent', color: '#8f8f8f', borderBottom: 'none', fontWeight: 'bold'}}
    mode='horizontal'
  />
);

const renderContent = () => (
  <Col>
    {renderNavbar()}
    <Carousel margin={24} height={350} />
    <Movie {...data} />
    <Movie {...data} />
    <Movie {...data} />
    <Movie {...data} />
    <Movie {...data} />
  </Col>
);

const DashboardComponent = () => {

  return (
    <Row style={{ overflowY: 'scroll', height: '100%' }}>
      {renderContent()}
    </Row>
  );
};

export default DashboardComponent;