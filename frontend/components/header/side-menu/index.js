import { useState } from 'react';
import Link from 'next/dist/client/link';

import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import MenuIcon from '@material-ui/icons/Menu';

import HomeIcon from '@material-ui/icons/Home';
import LabelIcon from '@material-ui/icons/Label';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import HistoryIcon from '@material-ui/icons/History';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CreateIcon from '@material-ui/icons/Create';

import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import ReportIcon from '@material-ui/icons/Report';

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
          <ListItem button >
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <Link href={{
            pathname: '/genre'
          }}>
            <ListItem button >
              <ListItemIcon><LabelIcon /></ListItemIcon>
              <ListItemText primary="Genre" />
            </ListItem>
          </Link>

          <Link href={{
            pathname: '/genre'
          }}>
            <ListItem button >
              <ListItemIcon><MenuBookIcon /></ListItemIcon>
              <ListItemText primary="Type" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><FavoriteIcon /></ListItemIcon>
            <ListItemText primary="Favorite" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><HistoryIcon /></ListItemIcon>
            <ListItemText primary="History" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><CreateIcon /></ListItemIcon>
            <ListItemText primary="Your Product" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><FlagIcon /></ListItemIcon>
            <ListItemText primary="Report History" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary="Help" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ReportIcon /></ListItemIcon>
            <ListItemText primary="Report" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default SideMenu;