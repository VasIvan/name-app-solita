import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  /* root: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    maxHeight: 'inherit',
    backgroundImage:
      'linear-gradient(to left bottom, #735aea, #677ff9, #6c9fff, #85bbff, #aad5ff, #a8d2fa, #a6cff5, #a4ccf0, #77ace7, #4e8cdc, #2d6ace, #1c47bb)',
  }, */
  wrapper: {
    maxWidth: '800px',
    margin: `50px auto`,
    padding: '20px',
    borderRadius: 3,
    backdropFilter: 'blur(3px)',
    backgroundColor: 'rgba(250,250,250,0.3)',
  },
  btn: {
    background: 'linear-gradient(45deg, #1c47bb 30%, #735aea 90%)',
    borderRadius: 3,
    border: 0,
    color: '#fff !important',
    height: 55,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  paper: {
    maxWidth: 400,
    margin: `10px auto`,
    padding: '20px',
  },
  avatar: {
    color: '#fff !important',
    background: 'linear-gradient(45deg, #1c47bb 30%, #735aea 90%)',
  },
  pagination: {
    color: '#fff !important',
    background: 'linear-gradient(45deg, #1c47bb 30%, #735aea 90%)',
    marginRight: '5px !important',
  },
});

export default useStyles;
