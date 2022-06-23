import * as React from 'react';

import {Card, CardContent, CardMedia, Typography, Popper} from '@material-ui/core';

import useStyles from './styles';

const ProductPopper = ({ product, anchorEl, handlePopperClose }) => {
  const {_id, name, type, genre, status, author, thumb, newest, newestName, intro} = product;

  const classes = useStyles();

  const open = Boolean(anchorEl);

  return (
    <div>
    <Popper
        className={classes.popperpadding}
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopperClose}
        disableRestoreFocus
        placement="right"
      >
        <Card className={classes.root}>
      
        <CardMedia
          className={classes.media}
          image={thumb}
          title="Contemplative Reptile"
          aria-owns={open ? 'mouse-over-popover' : undefined}
        />
        
        <CardContent overflow="hidden">
          <Typography className={classes.text} gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {type} - {author}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {status}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {intro}
          </Typography>
          </CardContent>

        </Card>
      </Popper>
    </div>
  );
}

export default ProductPopper;