export const API_HOST = 'http://localhost:3001';

export const options = {
    login: '[auth] login',
    logout: '[auth] logout',
    
    getProducts: '[product] all',
    storeProducts: '[product] store',

    listCart: '[cart] all',
    addTocart: '[cart] add',
    increaseCart: '[cart] increase',
    decreaseCart: '[cart] decrease',
    deleteProductCart: '[cart] delete',
    cleanCart: '[cart] clean'
}

export const storages_var = {
    auth: '[user] storage_auth',
}