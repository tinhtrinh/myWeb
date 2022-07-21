import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: "flex"
  },
  flexBox: {
    display: "flex",
    paddingLeft: 10,
    paddingRight: 10
  },
  contentCenter: {
    display: "flex",
    justifyContent: "center"
  },
  textCenter: {
    textAlign: "center",
    width: 120,
   
  }
});

export default useStyles;