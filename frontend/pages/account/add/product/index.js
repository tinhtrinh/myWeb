import { useForm } from 'react-hook-form';
import { useSelector } from "react-redux"
import { useRouter } from "next/dist/client/router"

import { TextField, Button } from '@material-ui/core';

import { addProductDetail } from '../../../../store/actions/productDetailActions';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const router = useRouter();
    const onRedirectToAccount = () => {
        router.push({
            pathname: '/account',
        },
        undefined,
        { shallow: true })
    }

    const account = useSelector(state => state.account.account);
    const onSubmit = (data) => {
        if(!data.name) {
            alert("Truyện phải có tên");
            return;
        }
        
        const product = {
            ...data,
            thumb: 'https://bulma.io/images/placeholders/1280x960.png',
            authorID: account.id,
            author: account.name,
            newest: -1,
            newestName: '',
            rating: 0
        }
        addProductDetail(product);
        onRedirectToAccount()
    }

    if(!account._id) {
        <h1>Forbiden</h1>
    }

    return (
        <div>
            <h1>Thêm truyện</h1>
            <form>
                <TextField margin="dense" id="name" label="Tên truyện" {...register("name")} /><br/>
                <TextField margin="dense" id="type" label="Loại truyện" {...register("type")} /><br/>
                <TextField margin="dense" id="genre" label="Thể loại" {...register("genre")} /><br/>
                <TextField margin="dense" id="status" label="Trạng thái" {...register("status")} /><br/>
                <TextField margin="dense" id="intro" label="Giới thiệu" {...register("intro")} /><br/>
                <Button type="submit" color="primary" onClick={handleSubmit(onSubmit)}>Lưu</Button>
            </form>
        </div>
    )
}

export default AddProduct;