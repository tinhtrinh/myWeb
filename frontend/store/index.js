import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';

import productsListReducer from './reducers/productList';
import productDetailReducer from './reducers/productDetail';
import chaptersListReducer from './reducers/chaptersList';
import chapterDetailReducer from './reducers/chapterDetail';
import userReducer from './reducers/user';
import menuReducer from './reducers/menu';
import accountReducer from './reducers/account';

const bindMiddleware = (middleware) => {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
}

const combinedReducer = combineReducers({
    productsList: productsListReducer,
    productDetail: productDetailReducer,
    chaptersList: chaptersListReducer,
    chapterDetail: chapterDetailReducer,
    user: userReducer,
    menu: menuReducer,
    account: accountReducer
});

const makeStore = () => {
    return createStore(combinedReducer, bindMiddleware([thunkMiddleware]));
}

export const wrapper = createWrapper(makeStore);