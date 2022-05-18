import { options } from '../utils/constants';

export const ProductsReducer = (state = [], action) => {

    switch (action.type) {
        case options.getProducts:
            return action.payload;

        default:
            return state;
    }
}