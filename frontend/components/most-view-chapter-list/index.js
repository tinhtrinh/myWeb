import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, Chip, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import { fetchProductsList } from '../../store/actions/productsListActions';

import useStyles from './styles';
import ChapterCard from '../chapter-card';

var chaptersList = [{ name: "Truyện 1", thumb: "https://imagepi.otakuscan.net/Extend3/Manga/12/b555c485-b699-4420-8016-804c8aa91ab1_mini.jpeg", type: "Tiểu thuyết ngắn", genre: "Học đường", status: "Đang tiến hành", athorID: "KnESx6LhyMVCMYHg", author: "tinhto", intro: "My first novel", newest: "zHdJzpZAHbA3MVL1", newestName: "Chương 1", rating: 10, _id: "0BJHH30z9CTqkoQH" },
{ name: "Truyện 2", thumb: "https://bulma.io/images/placeholders/1280x960.png", type: "Tiểu thuyết ngắn", genre: "Phép thuật", status: "Đang tiến hành", "authorID": "KnESx6LhyMVCMYHg", author: "tinhto", intro: "My second novel", newest: "qXuaVpefL3MtSW5a", newestName: "Chương 2", rating: 10, _id: "jqj9ELSuGOIwyZAp" },
{ name: "Truyện 3", thumb: "https://bulma.io/images/placeholders/1280x960.png", type: "Truyện tranh", genre: "Hài hước", status: "Đang tiến hành", "authorID": "KnESx6LhyMVCMYHg", author: "tinhto", intro: "My third novel", newest: "RK2T2aG7RT2sIKOC", newestName: "Chương 3", rating: 10, _id: "o5OcYK7GvW36eKj5" }]


const MostViewChapterList = () => {
    const classes = useStyles();

    // const productsList = useSelector(state => state.productsList);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchProductsList());
    // }, [])

    return (
        <Container>
            
                <Chip label="Most View Of The Day" color="primary" />
            
            
                <Grid className={classes.root} container justifyContent="space-evenly" alignItems="center">
                    {chaptersList.map((chapter, index) => (<ChapterCard key={chapter._id} chapter={chapter} index={index} />))}
                </Grid>
        </Container>
    )
}

export default MostViewChapterList;