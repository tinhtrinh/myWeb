import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from "next/dist/client/router"

import { Menu, MenuItem } from '@material-ui/core';

import { setProfileMenuRef } from '../../../store/actions/menuActions';

const ProfileMenu = () => {
  const profileMenuRef = useSelector(state => state.menu.profileMenuRef);

  const dispatch = useDispatch();
  const handleMenuClose = () => {
    dispatch(setProfileMenuRef({ ref: null }))
  };

  const router = useRouter();
  const onRedirect = (url) => {
    router.push({
        pathname: url,
    },
    undefined,
    { shallow: true })
    handleMenuClose();
  }

  return (
    <Menu
      anchorEl={profileMenuRef}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='profile-menu'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(profileMenuRef)}
      onClose={handleMenuClose}
    > 
      <MenuItem onClick={() => onRedirect('/account')}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )
};

export default ProfileMenu;