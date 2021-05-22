import PropTypes from 'prop-types';

const propTypes = {
  items: PropTypes.array.isRequired,
  styleNavbar: PropTypes.object,
  styleItem: PropTypes.object,
  mode: PropTypes.string,
  onClick: PropTypes.func,
  subMenu: PropTypes.bool
};

const displayName = 'Navbar';

const config = {
  displayName,
  propTypes
};

export default config;
