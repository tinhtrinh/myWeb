import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import { fetchProductsList } from '../../store/actions/productsListActions';

import ProductCard from '../product-card';

const ProductList = () => {
    const productsList = useSelector(state => state.productsList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsList());
    }, [])

    return (
        <Grid container justifyContent="space-evenly" alignItems="center">
            {productsList.map((product) => (<ProductCard key={product._id} product={product}/>))}
        </Grid>
    )
}

export default ProductList