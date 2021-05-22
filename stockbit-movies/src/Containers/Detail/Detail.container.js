import React from 'react';
import { Row, Col } from 'antd';

import DetailComponent from './Detail.component';
import useDetail from './Detail.hook';

const Detail = () => {
  const hooks = useDetail();

  return (<DetailComponent {...hooks} />)
};

export default Detail;
