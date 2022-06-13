import { useState } from 'react';

import { IconButton } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';

import useStyles from './styles';

import MobileMenu from '../mobile-menu';

const SectionMobile = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleMobileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
      setAnchorEl(null);
    };

    return (
        <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>

            <MobileMenu anchorEl={anchorEl} handleMobileMenuClose={handleMobileMenuClose}/>
        </div>
    )
}

export default SectionMobile;