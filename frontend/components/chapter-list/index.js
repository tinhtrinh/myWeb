import { useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';

import useStyles from "./styles";
import { fetchChaptersList } from "../../store/actions/chaptersListActions";


const ChapterList = ({ pid }) => {
    const classes = useStyles();
    // const chaptersList = useSelector(state => state.chaptersList.chaptersList);
    const chaptersList = [
        {_id: 1, name: "Chapter 1"}, 
        {_id: 2, name: "Chapter 2"}, 
        {_id: 3, name: "Chapter 3"}, 
        {_id: 4, name: "Chapter 4"}, 
        {_id: 5, name: "Chapter 5"}
    ]

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchChaptersList(pid))
    },[pid])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Chương</TableCell>
                        <TableCell align="right">Tựa đề</TableCell>
                        <TableCell align="right">Lượt xem</TableCell>
                        <TableCell align="right">Ngày thêm</TableCell>
                        <TableCell align="right">Hành động</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {chaptersList.map((chapter) => (
                        <Link key={chapter._id} href={{
                            pathname: '/chapter/[_id]',
                             query: { _id: chapter._id }
                        }}>
                            <TableRow>
                                <TableCell component="th" scope="row">{chapter.name}</TableCell>
                                <TableCell align="right">Chưa có</TableCell>
                                <TableCell align="right">0</TableCell>
                                <TableCell align="right">0</TableCell>
                                <TableCell align="right">Tải xuống</TableCell>
                            </TableRow>
                        </Link>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ChapterList;