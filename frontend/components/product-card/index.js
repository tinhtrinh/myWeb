import * as React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/dist/client/link';

import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Popover} from '@material-ui/core';

import useStyles from './styles';

const ProductCard = ({ product }) => {
  const {_id, name, type, genre, status, author, thumb, newest, newestName} = product;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [test, settest] = React.useState(false);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    settest(true)
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    settest(false)
  };

  const open = Boolean(anchorEl);

  return (
    <div>
    <Card className={classes.root}>
      <Link
          key={_id}
          href={{
            pathname: '/product/[_id]',
            query: { _id }
          }}>
      <CardActionArea>
      
        <CardMedia
          className={classes.media}
          image={thumb}
          title="Contemplative Reptile"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        />
        
        <CardContent className={classes.absolutePosition} overflow="hidden">
          <Typography className={classes.text} gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {type} - {author}
          </Typography>
        </CardContent>
        
      </CardActionArea>
      </Link>

      <CardActions>
      <Link href ={{
        pathname: '/chapter/[_id]',
        query: { _id: newest }
      }}>
        <Button size="large" color="primary" className={classes.alignCenter}>
          {newestName}
        </Button>
        </Link>
      </CardActions>

      
    </Card>

    <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Hover with a Popover.
      </Typography>

    <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
      </Popover>
    </div>
  );
}

export default ProductCard;