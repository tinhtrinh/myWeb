const initialState = {}

const productDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PRODUCT_DETAIL':
            state = action.data;
            return {...state}
        default:
            return state;
    }
}

export default productDetailReducer;