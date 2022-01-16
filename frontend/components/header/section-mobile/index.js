import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { IconButton } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';

import useStyles from './styles';
import { setMobileMenuRef } from '../../../store/actions/menuActions';

const SectionMobile = () => {
    const classes = useStyles();
    const mobileRef = useRef();
    
    const dispatch = useDispatch();
    const handleMobileMenuOpen = () => {
      dispatch(setMobileMenuRef({ ref: mobileRef.current }))
    };

    return (
        <div className={classes.sectionMobile}>
            <IconButton
              ref={mobileRef}
              aria-label="show more"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
        </div>
    )
}

export default SectionMobile;