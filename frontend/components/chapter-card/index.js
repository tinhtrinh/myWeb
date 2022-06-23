import Link from 'next/link';
import { useState } from 'react';

import { Button, Card, CardContent, CardMedia, Box, Typography, IconButton } from '@material-ui/core';

import useStyles from './styles';
import ProductPopper from '../product-popper';

var product = { name: "Truyện 1", thumb: "https://imagepi.otakuscan.net/Extend3/Manga/12/b555c485-b699-4420-8016-804c8aa91ab1_mini.jpeg", type: "Tiểu thuyết ngắn", genre: "Học đường", status: "Đang tiến hành", athorID: "KnESx6LhyMVCMYHg", author: "tinhto", intro: "My first novel", newest: "zHdJzpZAHbA3MVL1", newestName: "Chương 1", rating: 10, _id: "0BJHH30z9CTqkoQH" }
const ChapterCard = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopperOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopperClose = () => {
        setAnchorEl(null);
    };

    return (
        <Button
            onMouseEnter={handlePopperOpen}
            onMouseLeave={handlePopperClose}
        >
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography component="p" variant="h5">
                            1
                        </Typography>
                    </CardContent>
                    <CardMedia
                        className={classes.thumbnail}
                        component="img"
                        image="https://imagepi.otakuscan.net/Extend3/Manga/12/b555c485-b699-4420-8016-804c8aa91ab1_mini.jpeg"
                        alt="Live from space album cover"
                    />
                </Card>
                <Typography component="p" variant="h7">
                    Chapter 1
                </Typography>
            </div>

            <ProductPopper product={product} anchorEl={anchorEl} handlePopperClose={handlePopperClose} />
        </Button>
    )
}

export default ChapterCard;