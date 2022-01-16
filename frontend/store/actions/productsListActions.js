import axios from 'axios'

export const fetchProductsList = () => {
    return (dispatch) => {
        return axios.get('http://localhost:5000/product')
            .then(res => {
                dispatch(setProductsList(res.data))
            })
            .catch(error => console.log(error))
    }
}

export const fetchProductsListByAuthorID = (authorID) => {
    return (dispatch) => {
        return axios.get(`http://localhost:5000/product/author/${authorID}`)
            .then(res => {
                dispatch(setProductsList(res.data))
            })
            .catch(error => console.log(error))
    }
}

export const setProductsList = (data) => ({
    type: 'SET_PRODUCTS_LIST',
    data
})