import { options } from "../utils/constants"


export const addProductToCart = ( product ) => {
    return {
        type: options.addTocart,
        payload: {
            product
        }
    }
}

export const increaseProductCart = ( id ) => {
    return {
        type: options.increaseCart,
        payload: {
            id
        }
    }
}

export const decreaseProductCart = ( id ) => {
    return {
        type: options.decreaseCart,
        payload: {
            id
        }
    } 
}

export const cleantProductsCart = () => {
    return {
        type: options.cleanCart
    }
}