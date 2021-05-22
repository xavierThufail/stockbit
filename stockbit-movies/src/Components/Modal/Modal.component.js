import React from 'react';
import { Modal as AntDesignModal, Col, Row } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import './Modal.component.css';
import { TouchableOpacity } from '../index';
import config from './Modal.config';
import styles from './Modal.style';

const renderCloseButton = ({ handleClose }) => (
  <TouchableOpacity onClick={handleClose} style={styles.btnClose}>
    <CloseOutlined />
  </TouchableOpacity>
);

const renderTitleModal = ({ title, style }) => (
  <div style={styles.titleModal}>
    {title}
  </div>
);

const renderContent = ({ children, handleClose, titleStyle, title }) => (
  <Row>
    <Col style={styles.col}>
      {renderCloseButton({ handleClose })}
      {renderTitleModal({ title, style: titleStyle })}
      {children}
    </Col>
  </Row>
);

const Modal = ({ children, handleClose, visible, titleStyle, title, destroyOnClose, style, url }) => (
  <AntDesignModal
    title={false}
    visible={visible}
    closable={false}
    footer={null}
    bodyStyle={styles.content(url)}
    width={300}
    centered
    destroyOnClose={destroyOnClose}
    style={style}
  >
    {renderContent({ children, handleClose, titleStyle, title })}
  </AntDesignModal>
);

Modal.propTypes = config.propTypes;
Modal.defaultProps = config.defaultProps;
Modal.displayName = config.displayName;

export default Modal;
