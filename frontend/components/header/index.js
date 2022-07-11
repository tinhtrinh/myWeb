import { AppBar, Toolbar } from '@material-ui/core';

import useStyles from './styles';
import Logo from './logo';
import Search from './search';
import SectionDesktop from './section-desktop';
import SectionMobile from './section-mobile';
import SideMenu from './side-menu';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar>
          <SideMenu/>
          <Logo/>
          <Search/>
          <div className={classes.grow} />
          <SectionDesktop />
          {/* <SectionMobile/> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header