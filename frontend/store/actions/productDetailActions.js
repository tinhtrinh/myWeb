import axios from "axios"

export const fetchProductDetail = (id) => {
    return (dispatch) => {
        return axios.get(`http://localhost:5000/product/${id}`)
            .then(res => {
                dispatch(setProductDetail(res.data))
            })
            .catch(error => console.log(error))
    }
}

export const setProductDetail = (data) => ({
    type: 'SET_PRODUCT_DETAIL',
    data
})

export const addProductDetail = (data) => {
    return axios.post('http://localhost:5000/product/add', data)
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(error))
}