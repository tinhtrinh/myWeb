import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { useSelector, useDispatch } from "react-redux";

import { Grid, Typography } from '@material-ui/core';

import Layout from "../../layouts/Main";
import ProductCard from "../../components/product-card";
import ChapterList from "../../components/chapter-list";

import { fetchProductDetail } from "../../store/actions/productDetailActions";

const Product = () => {
    const router = useRouter();
    const { _id } = router.query;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductDetail(_id))
    }, [_id])
    
    const productDetail = useSelector(state => state.productDetail);

    if(!productDetail._id){
        return <h1>Product not found</h1>
    } else{
        return (
        <Layout>
            <Grid container justifyContent="center" alignItems="center" spacing={7}>
                <ProductCard product={productDetail}/>
                <Grid item xs={6}>
                    <Typography>{productDetail.name}</Typography>
                    <Typography>{productDetail.genre}</Typography>
                </Grid>
            </Grid>
            <ChapterList pid={_id}/>
        </Layout>)
    }
}

export default Product;