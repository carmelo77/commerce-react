import { API_HOST } from '../utils/constants';

export const getProductsApi = async () => {

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    try {
        const res = await fetch(`${ API_HOST }/products`, params);
        const response = await res.json();
        return response;

    } catch (err) {
        return err;
    }
}

export const storeProductsApi = async ( token, form ) => {

    const product = {
        ...form,
        category_id: form.category
    }

    delete product.category;
    
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': token
        },
        body: JSON.stringify(product)
    }

    console.log(product);

    try {
        const res = await fetch(`${API_HOST}/products`, params);
        if(res.status == 403) {
            console.warn('You`re not authorized.');
            return false;
        }

        const response = await res.json();
        return response;

    } catch (err) {
        return err;
    }
}

export const showProductApi = async (ID, token) => {
    
    const params = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            token
        }
    }

    try {
        const res = await fetch(`${API_HOST}/product/${ID}`, params);
        const response = await res.json();
        return response;

    } catch (err) {
        console.log(err);
        return err;
    }
}

export const updateProductApi = async ( id, data, token ) => {

    const productUpdt = {
        ...data,
        category_id: data.category
    }

    delete productUpdt.category;

    const params = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            token
        },
        body: JSON.stringify(data)
    }

    try {
        const res = await fetch(`${API_HOST}/products/update/${id}`, params);
        const response = await res.json();
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }

}

export const deleteProductsApi = async (ID, token) => {

    const params = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            token
        }
    }

    try {
        const res = await fetch(`${API_HOST}/product/${ID}`, params);
        const response = await res.json();
        return response;  
    } catch (err) {
        console.log(err);
        return err;
    }
}