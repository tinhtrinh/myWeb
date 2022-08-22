import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { useSelector, useDispatch } from "react-redux";

import Layout from "../../layouts/Main";
import ProductDetail from "../../components/product-detail";

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
            </Layout>)
    }
}

export default Product;