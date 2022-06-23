import * as React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/dist/client/link';

import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Popover, Popper} from '@material-ui/core';

import ProductPopper from '../product-popper';
import useStyles from './styles';

const ProductCard = ({ product }) => {
  const {_id, name, type, genre, status, author, thumb, newest, newestName, intro} = product;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopperOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopperClose = () => {
    setAnchorEl(null);
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
          aria-owns={open ? 'mouse-over-popover' : undefined}
          onMouseEnter={handlePopperOpen}
          onMouseLeave={handlePopperClose}
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

    <ProductPopper product={product} anchorEl={anchorEl} handlePopoverClose={handlePopperClose} />
    </div>
  );
}

export default ProductCard;