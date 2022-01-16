const initialState = []

const productsListReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_PRODUCTS_LIST':
            state = action.data;
            return [...state];
        default:
            return state;
    }
}

export default productsListReducer;