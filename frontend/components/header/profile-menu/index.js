import { useRouter } from "next/dist/client/router"

import { Menu, MenuItem } from '@material-ui/core';

const ProfileMenu = ({anchorEl, handleCloseProfileMenu}) => {
  const router = useRouter();
  const onRedirect = (url) => {
    router.push({
        pathname: url,
    },
    undefined,
    { shallow: true })
    handleCloseProfileMenu;
  }

  return (
    <Menu
      id='profile-menu'
      keepMounted
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      anchorEl={anchorEl} 
      open={ Boolean(anchorEl)}
      onClose={handleCloseProfileMenu}
    > 
      <MenuItem onClick={() => onRedirect('/account')}>Profile</MenuItem>
      <MenuItem onClick={handleCloseProfileMenu}>My account</MenuItem>
    </Menu>
  )
};

export default ProfileMenu;