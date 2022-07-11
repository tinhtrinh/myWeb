import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 280,
      margin: 20
    },
    media: {
      height: 280,
      width: 280,
    },
    alignCenter: {
      margin: 'auto'
    },
    absolutePosition: {
      position: 'absolute',
      top: 200,
      width: "100%",
      background: 'rgba(255, 255, 255, 0.8)'
    },
    text: {
      color: '#000000'
    },
    popperpadding: {
      padding: 10,
    }
  });

export default useStyles;