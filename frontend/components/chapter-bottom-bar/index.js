import { Slide, useScrollTrigger, AppBar, Toolbar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import useStyles from './styles';
import ChapterAction from '../chapter-action';

const ChapterBottomBar = () => {
    const classes = useStyles();
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="up" in={!trigger}>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <IconButton><InfoIcon/></IconButton>
                    <ChapterAction />
                    <IconButton><FavoriteBorderIcon/></IconButton>
                    <IconButton><ArrowUpwardIcon/></IconButton>
                </Toolbar>
            </AppBar>
        </Slide>
    )
}

export default ChapterBottomBar;