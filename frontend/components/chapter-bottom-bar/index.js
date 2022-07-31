import { Slide, useScrollTrigger, AppBar, Toolbar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

import useStyles from './styles';
import ChapterAction from '../chapter-action';
import FavoriteButton from '../favorite-button';
import GoTopButton from '../go-top-button';

const ChapterBottomBar = () => {
    const classes = useStyles();
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="up" in={!trigger}>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <IconButton><InfoIcon/></IconButton>
                    <ChapterAction />
                    <FavoriteButton />
                    <GoTopButton />
                </Toolbar>
            </AppBar>
        </Slide>
    )
}

export default ChapterBottomBar;