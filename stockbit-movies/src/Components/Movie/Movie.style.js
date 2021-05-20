const styles = {
  container: {
    display: 'flex',
    padding: '24px'
  },
  imgBtn: (url) => ({
    backgroundImage: `url(${url})`,
    width: 100,
    height: 150,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    color: 'transparent'
  }),
  content: { marginLeft: '24px' },
  title: {
    color: '#8f8f8f',
    lineHeight: 1
  }
};

export default styles;
