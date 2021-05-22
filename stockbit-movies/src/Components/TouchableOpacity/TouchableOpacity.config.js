import PropTypes from 'prop-types';

const propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

const displayName = 'TouchableOpacity';

export default {
  propTypes,
  displayName
};
