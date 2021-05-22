import PropTypes from 'prop-types';

const propTypes = {
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired
};

const displayName = 'Movie';

const config = {
  displayName,
  propTypes
};

export default config;
