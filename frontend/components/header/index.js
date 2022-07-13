import { Slide, useScrollTrigger, AppBar, Toolbar } from '@material-ui/core';

import useStyles from './styles';
import Logo from './logo';
import Search from './search';
import SectionDesktop from './section-desktop';
import SectionMobile from './section-mobile';
import SideMenu from './side-menu';

const Header = (props) => {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  return (
    <div className={classes.grow}>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar>
          <Toolbar>
            <SideMenu />
            <Logo />
            <Search />
            <div className={classes.grow} />
            <SectionDesktop />
            {/* <SectionMobile/> */}
          </Toolbar>
        </AppBar>
      </Slide>

      <Toolbar />
    </div>
  )
}

export default Header