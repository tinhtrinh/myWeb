import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { useSelector, useDispatch } from "react-redux";

import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@material-ui/core';

import Layout from "../../layouts/Main";
import ProductDetail from "../../components/product-detail";
import ChapterList from "../../components/chapter-list";

import { fetchProductDetail } from "../../store/actions/productDetailActions";

var product = { name: "Truyện 1", thumb: "https://imagepi.otakuscan.net/Extend3/Manga/12/b555c485-b699-4420-8016-804c8aa91ab1_mini.jpeg", type: "Tiểu thuyết ngắn", genre: "Học đường", status: "Đang tiến hành", athorID: "KnESx6LhyMVCMYHg", author: "tinhto", intro: "My first novel", newest: "zHdJzpZAHbA3MVL1", newestName: "Chương 1", rating: 10, _id: "0BJHH30z9CTqkoQH" };

const Product = () => {
    const router = useRouter();
    const { _id } = router.query;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductDetail(_id))
    }, [_id])

    // const productDetail = useSelector(state => state.productDetail);
    const productDetail = product;

    if (!productDetail._id) {
        return <h1>Product not found</h1>
    } else {
        return (
            <Layout>
                <ProductDetail />
                {/* <ChapterList pid={_id} /> */}
            </Layout>)
    }
}

export default Product;