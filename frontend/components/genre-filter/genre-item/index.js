import { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';

import GenrePopper from '../../genre-popper';

const GenreItem = ({ name }) => {
    const handleChange = () => {}

  const [anchorEl, setAnchorEl] = useState(null);

    const handlePopperOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handlePopperClose = () => {
        setAnchorEl(null);
      };
    
    return (
        <ListItem>
            <FormControlLabel
                control={<Checkbox onChange={handleChange} name={name} />}
                label={name}
                onMouseEnter={handlePopperOpen}
                onMouseLeave={handlePopperClose}
            />

            <GenrePopper anchorEl={anchorEl} handlePopperClose={handlePopperClose}/>
        </ListItem>
    )
}

export default GenreItem;