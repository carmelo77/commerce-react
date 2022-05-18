import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/** Reducers */
import { AuthReducer } from '../reducers/AuthReducer';
import { ProductsReducer } from '../reducers/ProductsReducer';
import { CartReducer } from '../reducers/CartReducer';

const reducers = combineReducers({
    auth: AuthReducer,
    products: ProductsReducer,
    cart: CartReducer
});

export const store = createStore(
    reducers,

    applyMiddleware( thunk )
);