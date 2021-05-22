import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  titleStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
  destroyOnClose: PropTypes.bool
};

const defaultProps = {
  titleStyle: {},
  destroyOnClose: false
};

const displayName = 'Modal';

export default {
  propTypes,
  defaultProps,
  displayName
};
