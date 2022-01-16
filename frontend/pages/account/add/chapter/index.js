import { useState } from "react";
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { useRouter } from "next/dist/client/router"
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { TextField, Button } from '@material-ui/core';

import { addChapterDetail } from "../../../../store/actions/chapterDetailActions";

const AddChapter = () => {
    const router = useRouter();
    const { pid } = router.query;
    const onRedirectToAccount = () => {
        router.push({
            pathname: '/account',
        },
        undefined,
        { shallow: true })
    }

    const account = useSelector(state => state.account.account);
    const product = useSelector(state => state.productsList.find(product => product._id == pid))
    const [content, setContent] = useState("");
    const [dirty, setDirty] = useState(false);

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        if(!data.name) {
            alert("Chương phải có tên");
            return;
        }
        
        const chapter = {
            ...data,
            content: content,
            productID: pid,
            productName: product.name,
            backID: product.newest,
            nextID: -1,
            docxPath: '',
            view: 0
        }
        console.log(chapter)
        addChapterDetail(chapter);
        //onRedirectToAccount()
    }

    if(!account._id) {
        <h1>Forbiden</h1>
    }

    if(!product) {
        <h1>Product Not Found</h1>
    }

    return (
        <div>
            <h1>This is add chapter</h1>
            <form>
            <TextField margin="dense" id="name" label="Tên Chương" {...register("name")} /><br/>
            <CKEditor
                  editor={ClassicEditor}
                  data={content || ""}
                  
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setContent(data);
                    setDirty(true);
                  }}
                  
                /><br/>
                <Button type="submit" color="primary" onClick={handleSubmit(onSubmit)}>Lưu</Button>
                <Button type="button">Cancel</Button>
            </form>
        </div>
    )
}

export default AddChapter;