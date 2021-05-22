import React from 'react';
import { Row, Col, Divider } from 'antd';

const renderTitle = ({ Title }) => (<h1 style={{ color: '#8f8f8f', fontSize: '40px', lineHeight: 1, marginBottom: '5px' }}>{Title}</h1>);

const renderSubTitle = ({ Year, Rated, Runtime }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <p style={{ fontWeight: 'bold', marginRight: '20px', marginBottom: '0px' }}>{Year}</p>
    <p style={{ fontWeight: 'bold', marginRight: '20px', marginBottom: '0px' }}>{Rated}</p>
    <p style={{ fontWeight: 'bold', marginRight: '20px', marginBottom: '0px' }}>{Runtime}</p>
  </div>
);

const renderRating = ({ Source, Value, index }) => (
  <div key={index} style={{ marginRight: '20px' }}>
    <p style={{ fontWeight: 'bold' }}>{Source === 'Internet Movie Database' ? 'IMDb' : Source}</p>
    <p style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '0px', lineHeight: 1 }}>{ Value }</p>
  </div>
);

const renderImage = ({ Poster }) => (
  <img alt='img-movies' src={Poster} style={{
    borderRadius: '20px',
    marginRight: '24px'
  }} />
);

const renderDivider = () => (
  <div style={{
    display: 'flex',
    width: '100%',
    borderTop: 'solid 1px #c33e32',
    marginBottom: '12px',
    marginTop: '12px'
  }} />
);

const renderGenre = ({ genre, index }) => (
  <div key={index} style={{
    display: 'inline-block',
    padding: '5px 10px',
    borderRadius: '10px',
    border: 'solid 1px #c33e32',
    color: 'white',
    fontWeight: 'bold',
    marginRight: '5px',
    marginBottom: '5px'
  }}>
    <span>{genre}</span>
  </div>
);

const renderText = ({ text, title }) => (
  <div>
    {renderDivider()}
    <div style={{
      display: 'flex', width: '100%'
    }}>
      <p style={{ fontWeight: 'bold', marginRight: '20px', marginBottom: '0px', width: '25%' }}>{title} :</p>
      <p style={{ marginBottom: '0px', width: '75%' }}>{text}</p>
    </div>
  </div>
);

const renderInfo = ({ Plot, Genre, Director, Writer, Actors, Awards, Production }) => (
  <div>
    {Genre.split(', ').map((genre, index) => renderGenre({ genre, index }))}
    <p style={{ fontWeight: 'bold', marginBottom: '0px', textAlign: 'justify' }}>{Plot}</p>
    {renderText({ text: Director, title: 'Director' })}
    {renderText({ text: Writer, title: 'Writer' })}
    {renderText({ text: Actors, title: 'Actors' })}
    {renderText({ text: Awards, title: 'Awards' })}
  </div>
);

const renderHeader = ({ Title, Year, Rated, Runtime, Ratings }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    marginBottom: '24px'
  }}>
    <div>
      {renderTitle({ Title })}
      {renderSubTitle({ Year, Rated, Runtime })}
    </div>
    <div style={{ display: 'flex' }}>
      {Ratings && Ratings.map(({ Source, Value }, index) => renderRating({ Source, Value, index }))}
    </div>
  </div>
);

const renderDetail = ({ Poster, props }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '24px'
  }}>
    {renderImage({ Poster })}
    {renderInfo(props)}
  </div>
)

const renderContent = ({ Title, Year, Rated, Runtime, Ratings, Poster, ...props }, handleToDetail) => (
  <Col style={{
    width: '100%'
  }}>
    {renderHeader({ Title, Year, Rated, Runtime, Ratings })}
    {Poster && renderDetail({ Poster, props })}
    {}
  </Col>
);

const DetailComponent = ({ movieDetail, handleToDetail }) => (
  <Row>
    {renderContent(movieDetail, handleToDetail)}
  </Row>
);

export default DetailComponent;