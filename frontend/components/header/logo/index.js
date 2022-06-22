import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';
import { setOpenSideMenu } from '../../../store/actions/menuActions';

const Logo = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const openSideMenu = () => {
        dispatch(setOpenSideMenu({ status: true }))
    }

    return (
        <div className={classes.grow}>
            {/* <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={openSideMenu}
            >
                <MenuIcon />
            </IconButton> */}

            <Link href='/'>
                <Typography className={classes.title} variant="h6" noWrap>
                    Material-UI
                </Typography>
            </Link>
        </div>
    )
}

export default Logo;