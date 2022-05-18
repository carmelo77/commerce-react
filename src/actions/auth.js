import { options } from "../utils/constants";
import jwtDecode from 'jwt-decode';


export const login = ( token ) => {
    const decode = jwtDecode(token);

    return {
        type: options.login,
        payload: {
            token,
            id: decode.id,
            role: decode.role,
        }
    }
}

export const logout = () => {
    return {
        type: options.logout
    }
}

// export const signinAction = ( form ) => {
//     return (dispatch) => {
//         signinApi( form ).then((res) => {
//             if(res.success) {
//                 dispatch( login( res.token ) );
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             return err;
//         });
//     }
// }