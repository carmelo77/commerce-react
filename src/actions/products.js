import { getProductsApi } from '../api/products';
import { options } from '../utils/constants';
import { error as errorMsg } from '../utils/alerts';

export const getProducts = () => {
    return async ( dispatch ) => {
        try {
            const response = await getProductsApi();
            dispatch( getAllAction( response.data ) );
        } catch (err) {
            console.log(err);
            errorMsg(err);
        }
    }
}

export const getAllAction = ( products ) => {
    return {
        type: options.getProducts,
        payload: products
    }
}