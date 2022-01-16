import { useSelector } from 'react-redux';
import Link from 'next/dist/client/link';

import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

import useStyles from './styles';

const ProductCard = ({ product }) => {
  const {_id, name, type, genre, status, author, thumb, newest, newestName} = product;

  const classes = useStyles();

  return (
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
        />
        
        <CardContent overflow="hidden">
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
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
  );
}

export default ProductCard;