import { useEffect } from "react";
import { useRouter } from "next/dist/client/router"
import { useSelector, useDispatch } from "react-redux"

import Layout from "../../layouts/Main";
import ChapterController from "../../components/chapter-controller";
import ChapterListDialog from "../../components/chapter-list-dialog";
import { fetchChapterDetail } from "../../store/actions/chapterDetailActions";

let chapter = { productID: 1, backID: 1, nextID: 1, name: "Chap 1", content: "Because withSubscription is a normal function, you can add as many or as few arguments as you like. For example, you may want to make the name of the data prop configurable, to further isolate the HOC from the wrapped component. Or you could accept an argument that configures shouldComponentUpdate, or one that configures the data source. These are all possible because the HOC has full control over how the component is defined." }

const Chapter = () => {
    const router = useRouter();
    const { _id } = router.query;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchChapterDetail(_id));
    }, [_id])

    // const { productID, backID, nextID, name, content } = useSelector(state => state.chapterDetail);

    const { productID, backID, nextID, name, content } = chapter;

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