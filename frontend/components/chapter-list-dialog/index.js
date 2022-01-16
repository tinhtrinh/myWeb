import { useEffect } from 'react';
import Link from 'next/dist/client/link';
import { useRouter } from "next/dist/client/router"
import { useDispatch, useSelector } from 'react-redux';

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';

import { setOpenChaptersList, fetchChaptersList } from "../../store/actions/chaptersListActions";
import { fetchChapterDetail } from '../../store/actions/chapterDetailActions';

const ChapterListDialog = ({ pid }) => {
    const { chaptersList, openChapterList } = useSelector(state => state.chaptersList)
    
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(
            setOpenChaptersList({ status: false })
        )
    }

    const router = useRouter();
    const onChangeChapter = (id) => {
        router.push({
            pathname: '/chapter/[_id]',
            query: { _id: id }
        },
        undefined,
        { shallow: true })
        dispatch(fetchChapterDetail(id));
        handleClose();
    }

    useEffect(() => {
        dispatch(fetchChaptersList(pid))
    }, [pid])

    return (
        <Dialog
            open={openChapterList}
            onClose={handleClose}
            fullWidth={true}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">tên truyện</DialogTitle>
            <DialogContent dividers={true}>
            <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Chương</TableCell>
                        <TableCell align="right">Lượt xem</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {chaptersList.map((chapter) => (
                        <TableRow key={chapter._id} onClick={() => onChangeChapter(chapter._id)}>
                            <TableCell component="th" scope="row">{chapter.name}</TableCell>
                            <TableCell align="right">0</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            </DialogContent>

            <DialogActions>
                <Link href={{
                    pathname: '/product/[_id]',
                    query: { _id: pid }
                }}>
                    <Button color="primary" onClick={handleClose}>
                        Xem thông tin truyện
                    </Button>
                </Link>
                <Button color="primary" onClick={handleClose}>
                    Hủy bỏ
                </Button>
            </DialogActions>
      </Dialog>
    )
}

export default ChapterListDialog;