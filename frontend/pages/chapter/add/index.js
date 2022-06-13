import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import axios from 'axios';

const AddChapter = () => {
    const {register, handleSubmit} = useForm();
    const [test, setTest] = useState('fisst');
    const onSubmit = (data) => {
        const {content, chapterName, file} = data;
        var txttostore = '<p>' + data.content.replace(/\n/g, "</p>\n<p>") + '</p>';
        setTest(txttostore)

        const formData = new FormData();
        // formData.append("file", file);
        formData.append('chapterName', chapterName);

        axios.post('http://localhost:5000/chapter/addChapterFiles', formData)
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <form>
                <h1>This is add chapter</h1>
                <textarea {...register('content')}></textarea>
            
                <h1 dangerouslySetInnerHTML={{__html: test}}></h1>
          
                <input type="text" {...register('chapterName')} />
                <input type="file" name="file" {...register('file')} />
                <input type="submit" onClick={handleSubmit(onSubmit)} />
            </form>
        </div>
    )
}

export default AddChapter