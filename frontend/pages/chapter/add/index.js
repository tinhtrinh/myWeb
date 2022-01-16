import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"

const AddChapter = () => {
    const {register, handleSubmit} = useForm();
    const [test, setTest] = useState('fisst');
    const onSubmit = (data) => {
        var txttostore = '<p>' + data.content.replace(/\n/g, "</p>\n<p>") + '</p>';
        setTest(txttostore)
    }

    return (
        <div>
            <h1>This is add chapter</h1>
            <textarea {...register('content')}></textarea>
            <button type='submit' onClick={handleSubmit(onSubmit)}>Lưu</button>
            <h1 dangerouslySetInnerHTML={{__html: test}}></h1>
        </div>
    )
}

export default AddChapter