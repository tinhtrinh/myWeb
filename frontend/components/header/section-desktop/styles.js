import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sectionDesktop: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      },
    },
  }));

export default useStyles;