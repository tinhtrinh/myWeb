import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, IconButton, Badge } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

import useStyles from './styles';
import { setOpenSignIn } from '../../../store/actions/userActions';
import { setProfileMenuRef } from '../../../store/actions/menuActions';

const SectionDesktop = () => {
  const classes = useStyles();
  const profileMenuRef = useRef();

  const { account } = useSelector(state => state.account);

  const dispatch = useDispatch();
  const handleOpenSignIn = () => {
    dispatch(setOpenSignIn({ status: true }))
  }

  const handleOpenProfileMenu = () => {
    dispatch(setProfileMenuRef({ ref: profileMenuRef.current }))
  }

  if(account._id) {
    return (
      <div className={classes.sectionDesktop}>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          ref={profileMenuRef}
          edge="end"
          aria-label="account of current user"
          aria-controls='profile-menu'
          aria-haspopup="true"
          onClick={handleOpenProfileMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </div>
    )
  } else {
    return (
      <div className={classes.sectionDesktop}>
          <Button size="large" onClick={handleOpenSignIn}>
            Đăng nhập
          </Button>
          <Button size="large">
            Đăng ký
          </Button>
      </div>
    )
  }
}

export default SectionDesktop;