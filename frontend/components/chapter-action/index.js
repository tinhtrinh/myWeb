import { useRouter } from "next/dist/client/router"
import { useDispatch } from "react-redux"
import { useState } from "react";

import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ListIcon from '@material-ui/icons/List';

import useStyles from "./styles";
import { fetchChapterDetail } from "../../store/actions/chapterDetailActions";
import { setOpenChaptersList } from "../../store/actions/chaptersListActions";
import ChapterListDialog from "../chapter-list-dialog";

const ChapterAction = ({ backID, nextID }) => {
    const classes = useStyles();
    const router = useRouter();
    const dispatch = useDispatch();
    const onChangeChapter = (id) => {
        router.push({
            pathname: '/chapter/[_id]',
            query: { _id: id }
        },
            undefined,
            { shallow: true })
        dispatch(fetchChapterDetail(id));
    }

    const [isChapterListOpen, setChapterListOpen] = useState(false);
    const handleOpenChapterList = () => {
        setChapterListOpen(true);
    }

    const handleCloseChapterList = () => {
        setChapterListOpen(false);
    }

    return (
        <div className={classes.grow}>
            <IconButton onClick={() => onChangeChapter(backID)}>
                <NavigateBeforeIcon fontSize="large" />
                <div className={classes.title}>Previous Chapter   </div>
            </IconButton>

            <IconButton onClick={handleOpenChapterList}>
                <ListIcon fontSize="large" />
            </IconButton>

            <IconButton onClick={() => onChangeChapter(nextID)}>
                <div className={classes.title}>Next Chapter </div>
                <NavigateNextIcon fontSize="large" />
            </IconButton>

            <ChapterListDialog isChapterListOpen={isChapterListOpen} handleCloseChapterList={handleCloseChapterList} />
        </div>
    )
}

export default ChapterAction;