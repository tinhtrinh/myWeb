import { useEffect } from "react";
import { useRouter } from "next/dist/client/router"
import { useSelector, useDispatch } from "react-redux"

import Layout from "../../layouts/Main";
import ChapterController from "../../components/chapter-controller";
import ChapterListDialog from "../../components/chapter-list-dialog";
import { fetchChapterDetail } from "../../store/actions/chapterDetailActions";

const Chapter = () => {
    const router = useRouter();
    const { _id } = router.query;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchChapterDetail(_id));
    }, [_id])

    const { productID, backID, nextID, name, content } = useSelector(state => state.chapterDetail);

    if(!name) {
        return <h1>Chapter not found</h1>
    } else {
        return (
        <Layout>
            <ChapterController backID={backID} nextID={nextID}/>
            
            <h3>{ name }</h3>
            <p dangerouslySetInnerHTML={{__html: content}}></p>

            <ChapterController backID={backID} nextID={nextID}/>

            <ChapterListDialog pid={productID}/>
        </Layout>
    )}
}

export default Chapter;