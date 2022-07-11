import { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

const SideMenu = () => {
  const classes = useStyles();

  const [isSideMenuOpen, setSideMenuOpen] = useState(false)
  const handleCloseSideMenu = () => {
    setSideMenuOpen(false);
  };
  const handleOpenSideMenu = () => {
    setSideMenuOpen(true);
  }

  return (
    <div>
      <IconButton
        variant="contained"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleOpenSideMenu}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={isSideMenuOpen}
        onClose={handleCloseSideMenu}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleCloseSideMenu}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}

export default SideMenu;