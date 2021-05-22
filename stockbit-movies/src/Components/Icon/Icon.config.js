import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
  twoToneColor: PropTypes.bool
};

const displayName = 'Icon';

const config = {
  displayName,
  propTypes
};

export default config;
