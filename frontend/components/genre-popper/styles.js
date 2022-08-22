import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    media: {
        height: 100,
        width: 100,
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

export default useStyles;