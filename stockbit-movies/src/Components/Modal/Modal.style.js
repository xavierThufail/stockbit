const styles = {
  btnClose: {
    position: 'absolute',
    right: 0,
    fontSize: '20px',
    lineHeight: 1,
    zIndex: 1000,
    borderRadius: '50px',
    backgroundColor: '#191a1f',
    color: '#c33e32',
    fontWeight: 'bold',
    padding: '5px'
  },
  content: (url) => ({
    height: '450px',
    backgroundImage: `url(${url})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '10px',
  }),
  col: {
    width: '100%',
    position: 'relative'
  },
  titleModal: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '40px',
    fontWeight: 'bold',
    color: '#00a4de',
    lineHeight: 1
  }
};

export default styles;
