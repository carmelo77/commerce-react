import { options, storages_var } from '../utils/constants';

const AuthState = JSON.parse(localStorage.getItem(storages_var.auth)) || {
    token: null,
    role: null,
    id: null
}; 

export const AuthReducer = (state = AuthState, action) => {

    switch(action.type) {
        case options.login: 
            localStorage.setItem(storages_var.auth, JSON.stringify(action.payload));

            return {
                ...action.payload,
            };
        
        case options.logout: 
            localStorage.removeItem(storages_var.auth);
            return {
                token: null,
                role: null,
                id: null
            };

        default:
            return state;
    }
}