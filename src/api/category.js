import { API_HOST, storages_var } from "../utils/constants";

export const getCategoriesApi = async () => {

    const { token } = JSON.parse(localStorage.getItem(storages_var.auth));

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': token
        }
    }

    try {
        const res = await fetch(`${API_HOST}/categories`, params);
        const response = await res.json();
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const storeCategoryApi = async ( data ) => {

    const { token } = JSON.parse(localStorage.getItem(storages_var.auth));

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            token
        },
        body: JSON.stringify( data )
    }

    try {
        const res = await fetch(`${API_HOST}/categories`, params);
        const response = await res.json();
        return response;

    } catch (err) {
        console.log(err);
        return err;
    }
}

export const showCategoryApi = async ( id ) => {
    const { token } = JSON.parse(localStorage.getItem(storages_var.auth));

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            token
        }
    }

    try {
        const res = await fetch(`${API_HOST}/category/${id}`, params);
        const response = await res.json();
        return response;

    } catch (err) {
        console.log(err);
        return err;
    }
}

export const updateCategoryApi = async ( id, data ) => {

    const { token } = JSON.parse(localStorage.getItem(storages_var.auth));

    const params = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            token
        },
        body: JSON.stringify(data)
    }

    try {
        const res = await fetch(`${API_HOST}/categories/update/${id}`, params);
        const response = await res.json();
        return response;

    } catch (err) {
        console.log(err);
        return err;
    }
}

export const destroyCategoryApi = async ( id ) => {
    const { token } = JSON.parse(localStorage.getItem(storages_var.auth));

    const params = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            token
        }
    }

    try {
        const res = await fetch(`${API_HOST}/category/${id}`, params);
        const response = await res.json();
        return response;

    } catch (err) {
        console.log(err);
        return err;
    }
}