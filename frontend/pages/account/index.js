import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import Link from 'next/dist/client/link';

import Button from '@material-ui/core/Button';

import { fetchProductsListByAuthorID } from "../../store/actions/productsListActions";

const Account = () => {
    const account = useSelector(state => state.account.account);
    const productsList = useSelector(state => state.productsList)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsListByAuthorID(account._id))
    }, [account._id])

    if(!account._id) {
        return (
            <h1>Account not found</h1>
        )
    }

    return (
        <div>
            <h1>This is Account</h1>
            {productsList.map(product => (
                <Link href={{
                    pathname: 'account/product',
                    query: { id: product._id }
                }}>
                    <a><h3>{ product.name }</h3></a>
                </Link>
            ))}
            <Link href='/account/add/product'>
                <Button>Thêm truyện</Button>
            </Link>
        </div>
    )
}

export default Account;