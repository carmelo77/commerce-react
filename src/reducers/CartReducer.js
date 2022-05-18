import { options } from '../utils/constants';

const shopping_cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

export const CartReducer = (state = shopping_cart, action) => {
    switch (action.type) {
        case options.listCart:
            return state;
        
        case options.addTocart:
            if(state.length == 0) {
                state = [ ...state, action.payload.product ];
            } else {
                let find = state.findIndex( val => val.id == action.payload.product.id );
                if(find == -1) {
                    state = [ ...state, action.payload.product ];
                } else {
                    state[find].qty = state[find].qty + 1;
                    state = [ ...state ];
                }
            }

            localStorage.setItem('shoppingCart', JSON.stringify(state) );

            return state;
        

        case options.increaseCart:
            
            state = state.map(v => {
                if(v.id == action.payload.id) {
                    return { ...v, qty: v.qty + 1 }
                } 

                return v;
            });

            localStorage.setItem('shoppingCart', JSON.stringify(state) );
        
            return state;

        case options.decreaseCart:
            state = state.map(v => {
                if(v.id == action.payload.id && v.qty > 1) {
                    return { ...v, qty: v.qty - 1 }
                } 

                return v;
            });

            localStorage.setItem('shoppingCart', JSON.stringify(state) );
        
            return state;
        
        case options.deleteProductCart:
            return state;

        case options.cleanCart:
            localStorage.removeItem('shoppingCart');
            state = JSON.parse(localStorage.getItem('shoppingCart')) || [];
            return state;
    
        default:
            return state;
    }
}