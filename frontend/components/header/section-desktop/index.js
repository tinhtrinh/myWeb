import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, IconButton, Badge } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

import useStyles from './styles';
import { setOpenSignIn } from '../../../store/actions/userActions';

import ProfileMenu from '../profile-menu';

const SectionDesktop = () => {
  const classes = useStyles();

  const { account } = useSelector(state => state.account);

  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const handleOpenSignIn = () => {
    dispatch(setOpenSignIn({ status: true }))
  }

  const handleOpenProfileMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleCloseProfileMenu = () => {
    setAnchorEl(null);
  } 

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
        id="avatar-button"
        edge="end"
        aria-label="account of current user"
        aria-controls={Boolean(anchorEl) ? 'profile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
        color="inherit"
        onClick={handleOpenProfileMenu}
      >
        <AccountCircle />
      </IconButton>

      <ProfileMenu anchorEl={anchorEl} handleCloseProfileMenu={handleCloseProfileMenu}/>
    </div>
  ) 

  // if(account._id) {
  //   return (
  //     <div className={classes.sectionDesktop}>
  //       <IconButton aria-label="show 4 new mails" color="inherit">
  //         <Badge badgeContent={4} color="secondary">
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <IconButton aria-label="show 17 new notifications" color="inherit">
  //         <Badge badgeContent={17} color="secondary">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <IconButton
  //        
  //         edge="end"
  //         aria-label="account of current user"
  //         aria-controls='profile-menu'
  //         aria-haspopup="true"
  //         onClick={handleOpenProfileMenu}
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div className={classes.sectionDesktop}>
  //         <Button size="large" onClick={handleOpenSignIn}>
  //           Đăng nhập
  //         </Button>
  //         <Button size="large">
  //           Đăng ký
  //         </Button>
  //     </div>
  //   )
  // }
}

export default SectionDesktop;