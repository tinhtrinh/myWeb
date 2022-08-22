import { Card, CardContent, CardMedia, Typography, Popper, Divider, Paper } from '@material-ui/core';

import useStyles from './styles';

const GenrePopper = ({ anchorEl, handlePopperClose }) => {
    const classes = useStyles();

    const open = Boolean(anchorEl);

    let thumb = "https://bulma.io/images/placeholders/1280x960.png";
    let descripsion = "I always find myself having at least 10 tabs open in VS Code. I easily get lost in all my tabs and I feel it kills productivity.";
    return (
        <Popper
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopperClose}
            placement="bottom"
        >
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={thumb}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography>{descripsion}</Typography>
                </CardContent>
            </Card>
        </Popper>
    )
}

export default GenrePopper;