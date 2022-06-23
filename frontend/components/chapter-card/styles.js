import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
   display: 'flex',
   flexDirection: 'column',
   textAlign: 'center'
  },
  card: {
    display: 'flex',
  },
  thumbnail: {
    width: 60, 
    height: 70
  }
}));

export default useStyles;