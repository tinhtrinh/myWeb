import Link from 'next/link';
import { useState } from 'react';

import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import useStyles from './styles';
import ProductPopper from '../product-popper';

const ChapterCard = ({ chapter, index }) => {
    const {_id, name, type, genre, status, author, thumb, newest, newestName, intro} = chapter;

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopperOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopperClose = () => {
        setAnchorEl(null);
    };

    return (
        <Link
          key={_id}
          href={{
            pathname: '/chapter/[_id]',
            query: { _id }
          }}>
        <Button
            onMouseEnter={handlePopperOpen}
            onMouseLeave={handlePopperClose}
        >
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography component="p" variant="h5">
                           {index + 1}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        className={classes.thumbnail}
                        component="img"
                        image={thumb}
                        alt="Live from space album cover"
                    />
                </Card>
                <Typography component="p" variant="subtitle1">
                    {newestName}
                </Typography>
            </div>

            <ProductPopper product={chapter} anchorEl={anchorEl} handlePopperClose={handlePopperClose} />
        </Button>
        </Link>
    )
}

export default ChapterCard;